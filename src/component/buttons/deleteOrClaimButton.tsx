"use client"
import { DeleteProduct } from "@/core/uses-cases/products/delete-product";
import { authStore } from "@/store/auth/auth-store"
import { SwalComponentWithAction } from "../swal/swalComponents";
import { ApiResponse } from "@/infraestructure/interfaces/api-response";
import { ClaimProduct } from "@/core/uses-cases/canjes/claim-product";
import { GraciasTotalesFetcher } from "@/config/gracias-totales-fetcher";
import { startPutPoints } from "@/core/uses-cases/points/put-points";
import { Puntos } from "@/infraestructure/interfaces/points-response";
import { SetVisibleProduct } from "@/core/uses-cases/products/set-visible-product";

interface Props {
    id: string,
    valorDeProducto: number,
    tituloProducto: string,
    disponible?: boolean
}
export const DeleteOrClaimButton = ({ id, valorDeProducto, tituloProducto, disponible = true }: Props) => {
    const { mode, points, user, setPoints } = authStore();


    const toogleClaimed = async (variableParaCumplirRequisitos: string): Promise<ApiResponse> => {
        if (!user) return { ok: false };
        const points: Puntos = {
            cantidad: valorDeProducto.toString(),
            codigo: variableParaCumplirRequisitos ? variableParaCumplirRequisitos : 'abc', //este codigo no es necesario para el backend al quitar puntos
            id: user.uid
        }
        let resp = await startPutPoints(GraciasTotalesFetcher, points, 'resta')
        if (resp.ok) {
            setPoints(resp.cantidad!)
            resp = await ClaimProduct(id, user?.uid, tituloProducto, GraciasTotalesFetcher)
            if (resp.ok) {
                return {
                    ok: true
                }
            } return {
                //TODO: En este caso lo que paso es que se le quitaron los puntos al usuario pero no se le dio el producto, hay que devolverle los productos.
                ok: false
            }

        } else {
            return {
                ok: false
            }
        }
    }
    const deleteProduct = async () => {
        SwalComponentWithAction({
            action: () => DeleteProduct(id),
            title: 'Eliminar producto', text: 'No podrás revertir esta acción',
            icon: 'warning', secondTitleOk: '¡Eliminado!', secondTextOk: 'El producto fue eliminado corractamente',
            iconSecondOk: 'success', secondTitleError: '¡Ups... :(', secondTextError: 'Ha ocurrido un error, vuelve a intentarlo más tarde',
            iconSecondError: 'warning', reload: true
        })
    }
    const setProductVisible = async () => {
        SwalComponentWithAction({
            action: () => SetVisibleProduct(id),
            title: 'Renovar producto', text: 'El producto estara disponible nuevamente para ser canjeado',
            icon: 'warning', secondTitleOk: '¡Listo!', secondTextOk: 'El producto fue modificado corractamente',
            iconSecondOk: 'success', secondTitleError: '¡Ups... :(', secondTextError: 'Ha ocurrido un error, vuelve a intentarlo más tarde',
            iconSecondError: 'warning', reload: true
        })
    }
    // 

    const claimProduct = async () => {
        SwalComponentWithAction({
            action: () => toogleClaimed('123'),
            title: 'Canjear producto', text: 'No podrás revertir esta acción',
            icon: 'warning', secondTitleOk: '¡Canjeado!', secondTextOk: `El producto fue agregado corractamente a tu cuenta en la seccion 'Tus canjes' `,
            iconSecondOk: 'success', secondTitleError: '¡Ups... :(', secondTextError: 'Ha ocurrido un error, vuelve a intentarlo más tarde',
            iconSecondError: 'warning'
        })
    }

    return (
        <div>
            <div className={`${mode === 'Admin' ? 'block' : 'hidden'}`}>
                <button className={`btn bg-black rounded-xl px-5 py-1 text-white hover:bg-gray-900 ${disponible === true ? 'block' : 'hidden'} transition-all mr-5 `}
                    onClick={() => deleteProduct()}>
                    Quitar
                </button>
                <button className={`btn bg-black rounded-xl px-5 py-1 text-white hover:bg-gray-900 ${disponible === true ? 'hidden' : 'block'} transition-all mr-5 `}
                    onClick={() => setProductVisible()}>
                    Configurar como disponible para los usuarios
                </button>
            </div>
            <button className={`btn ${points < valorDeProducto && 'bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed'}  bg-black rounded-xl px-5 py-1 text-white hover:bg-gray-900  transition-all mr-5 ${mode === 'Admin' ? 'hidden' : 'block'}`}
                onClick={() => claimProduct()}
            >
                Canjear
            </button>

        </div>

    )
}
