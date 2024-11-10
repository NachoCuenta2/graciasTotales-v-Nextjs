import Swal from "sweetalert2";
import { ApiResponse } from '../../infraestructure/interfaces/api-response';


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
}
export const SwalComponentWithAction = async ({ action, title, text, icon, secondTitleOk, secondTextOk, iconSecondOk, secondTitleError, secondTextError, iconSecondError }: SwalWithActionProps) => {
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