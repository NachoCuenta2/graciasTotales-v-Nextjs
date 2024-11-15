import React, { useState } from 'react'
import { Busqueda } from '../../infraestructure/interfaces/canjes-response';
import styles from './canjeProductInQueryBox.module.css'
import { SwalComponentWithAction } from '../swal/swalComponents';
import { ApiResponse } from '@/infraestructure/interfaces/api-response';
import { GraciasTotalesFetcher } from '@/config/gracias-totales-fetcher';
import { StartAlterCanjeWithId } from '@/core/uses-cases/canjes/Start-alter-canje-with-Id';
interface Props {
    producto: Busqueda;
}
export const CanjeProductInQueryBox = ({ producto }: Props) => {

    const [Claimed, setClaimed] = useState<boolean>(producto.reclamado)


    //este metodo es para cumplir con los requerimientos de los parametros de SwalComponentWithAction que espera => Promise<ApiResponse>;
    //Asi además, manejamos el estado del producto en un estado local
    const toogleClaimed = async (id: string): Promise<ApiResponse> => {
        const resp = await StartAlterCanjeWithId(id, GraciasTotalesFetcher);
        if (resp.ok) {
            setClaimed(true);
            return {
                ok: true
            }
        } else {
            return {
                ok: false
            }
        }
    }
    const alterProductState = () => {
        SwalComponentWithAction({ action: () => toogleClaimed(producto.id), title: 'Marcar como reclamado', text: 'No podrás revertir esta acción', icon: 'warning', secondTitleOk: '¡Modificado!', secondTextOk: 'El estado del canje fue modificado exitosamente', iconSecondOk: 'success', secondTitleError: '¡Ups... :(', secondTextError: 'Ha ocurrido un error, vuelve a intentarlo más tarde', iconSecondError: 'warning' })
    }
    return (
        <li className={`text-start break-words mb-5 font-sans ${styles.fontSizeChanger}`}>

            <span className='text-start'>-<span className='font-bold'>Producto: </span>{producto.titulo}-<span className='font-bold'>ID:</span>{producto.id}<span className='font-bold'> Reclamado:</span> {Claimed === true ? 'Si' : 'No'}--
                <button className={`text-start underline ${Claimed !== true ? 'block' : 'hidden'}`} onClick={alterProductState}>Marcar como reclamado. </button></span>

        </li>
    )
}
