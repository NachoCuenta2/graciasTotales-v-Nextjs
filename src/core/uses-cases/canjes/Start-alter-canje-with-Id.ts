

import { AxiosAdapter } from "@/config/adapter/http/axios.adapter";
import { HttpAdapter } from "@/config/adapter/http/http.adapter";
import { AllUserCanjes, Busqueda } from "@/infraestructure/interfaces/canjes-response";
import { ApiResponse } from '../../../infraestructure/interfaces/api-response';

export const StartAlterCanjeWithId = async (id: string, fetcher: HttpAdapter): Promise<ApiResponse> => {
    try {
        const resp = await fetcher.put<ApiResponse>('/canjes/modificar', { id })
        if (resp.ok) {
            return {
                ok: true,
            }
        } else {
            return {
                ok: false,
                msg: 'No se ha podido modificar el estado de el canjes, por favor, vuelva a intentarlo más tarde. '
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
