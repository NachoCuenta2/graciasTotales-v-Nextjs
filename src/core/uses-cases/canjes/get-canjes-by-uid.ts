

import { HttpAdapter } from "@/config/adapter/http/http.adapter";
import { AllUserCanjes, Busqueda } from "@/infraestructure/interfaces/canjes-response";
import { ApiResponse } from '../../../infraestructure/interfaces/api-response';

export const GetCanjesByUid = async (uid: string, fetcher: HttpAdapter): Promise<ApiResponse<Busqueda[]>> => {
    try {
        const resp = await fetcher.post<AllUserCanjes>(`/canjes/obtenerPorUsuario`, { uid });
        if (resp.ok) {
            return {
                ok: true,
                data: resp.busqueda
            }
        } else {
            return {
                ok: false,
                msg: 'No se ha podido traer los canjes, por favor, vuelva a intentarlo más tarde. '
            }

        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            msg: 'No se ha podido traer los canjes, por favor, vuelva a intentarlo más tarde. '
        }
    }
}
