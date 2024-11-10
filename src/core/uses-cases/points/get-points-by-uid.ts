import { AxiosAdapter } from "@/config/adapter/http/axios.adapter";
import { HttpAdapter } from "@/config/adapter/http/http.adapter";
import { AllUserCanjes, Busqueda } from "@/infraestructure/interfaces/canjes-response";
import { ApiResponse } from '../../../infraestructure/interfaces/api-response';
import { PointsResponse } from "@/infraestructure/interfaces/points-response";

export const GetPointsUserByuid = async (uid: string, fetcher: HttpAdapter): Promise<ApiResponse> => {
    try {
        const resp = await fetcher.post<PointsResponse>(`puntosUsuarios/obtener`, { uid });
        if (resp.ok) {
            return {
                ok: true,
                data: resp.cantidad
            }
        } else {
            return {
                ok: false,
                msg: 'No se ha podido traer los puntos del usuario, por favor, vuelva a intentarlo más tarde. '
            }

        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            msg: 'No se ha podido traer los puntos del usuario, por favor, vuelva a intentarlo más tarde. '
        }
    }
}