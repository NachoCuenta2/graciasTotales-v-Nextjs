

import { HttpAdapter } from "@/config/adapter/http/http.adapter";
import { ApiResponse } from '../../../infraestructure/interfaces/api-response';

export const ClaimProduct = async (idProducto: string, uid: string, titulo: string, fetcher: HttpAdapter): Promise<ApiResponse> => {
    try {
        const resp = await fetcher.post<ApiResponse>('/canjes/crear', { uid, idProducto, titulo, reclamado: false })
        if (resp.ok) {
            return {
                ok: true,
            }
        } else {
            return {
                ok: false,
                msg: 'No se ha canjear el producto, por favor vuelva a intentarlo más tarde '
            }

        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            msg: 'No se ha podido modificar el estado de el canjes, por favor, vuelva a intentarlo más tarde. '
        }
    }
}
