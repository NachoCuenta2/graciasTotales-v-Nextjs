import Swal from "sweetalert2";
import { ApiResponse } from '../../infraestructure/interfaces/api-response';
import { CreateRedeemablePoints } from "@/core/uses-cases/points/create-new-redeemable-point";
import { GraciasTotalesFetcher } from "@/config/gracias-totales-fetcher";
import { useRouter } from "next/navigation";


const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success btn-spacing",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
});
interface SwalWithActionProps {
    action: (id?: string) => Promise<ApiResponse>;
    title: string;
    text: string,
    icon: 'error' | 'info' | 'question' | 'success' | 'warning';
    secondTitleOk: string,
    secondTextOk: string,
    iconSecondOk: 'error' | 'info' | 'question' | 'success' | 'warning';
    secondTitleError: string,
    secondTextError: string,
    iconSecondError: 'error' | 'info' | 'question' | 'success' | 'warning';
    reload?: boolean
}
export const SwalComponentWithAction = async ({ action, title, text, icon, secondTitleOk, secondTextOk, iconSecondOk, secondTitleError, secondTextError, iconSecondError, reload }: SwalWithActionProps) => {

    swalWithBootstrapButtons.fire({
        title: title,
        text,
        icon: icon,
        showCancelButton: true,
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar",
        reverseButtons: true
    }).then(async (result) => {
        if (result.isConfirmed) {
            const resp = await action();
            if (resp.ok) {
                swalWithBootstrapButtons.fire({
                    title: secondTitleOk,
                    text: secondTextOk,
                    icon: iconSecondOk,
                });

            } else {
                swalWithBootstrapButtons.fire({
                    title: secondTitleError,
                    text: secondTextError,
                    icon: iconSecondError,
                });

            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "Se canceló la acción correctamente",
                icon: "success"
            });

        }
    });
}
interface generarRedeemabledPointsWithActionProps {
    title: string,
    points: number
}
export const GenerarRedeemabledPoints = async ({ title, points }: generarRedeemabledPointsWithActionProps): Promise<ApiResponse> => {
    const result = await Swal.fire({
        title,
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        customClass: {
            container: 'my-swal-container',
            title: 'my-swal-title',
            confirmButton: 'my-swal-confirm-button'
        },
        confirmButtonText: "Confirmar",
        showLoaderOnConfirm: true,
        preConfirm: async (inputValue) => {
            // Aquí puedes realizar validaciones o retornar el valor ingresado
            if (!inputValue) {
                Swal.showValidationMessage("Por favor, ingrese un código de confirmación");
            }
            return inputValue;
        }
    });

    // Verifica si el usuario confirmó la acción
    if (result.isConfirmed) {
        // Llama a CreateRedeemablePoints con el valor ingresado por el usuario
        const resp = await CreateRedeemablePoints(points, result.value, GraciasTotalesFetcher);

        if (resp.ok) {
            return {
                ok: true,
                data: resp.data,
                msg: resp.msg
            };
        }
    }

    // Retorna un resultado negativo si la acción no fue confirmada o si hubo un problema
    return {
        ok: false
    };
};
