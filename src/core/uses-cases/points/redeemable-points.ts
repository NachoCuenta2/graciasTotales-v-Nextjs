import { HttpAdapter } from "@/config/adapter/http/http.adapter";
import { ApiResponse } from '../../../infraestructure/interfaces/api-response';
import { RedeemablePointsResponse } from "@/infraestructure/interfaces/points-response";

export const RedeemablePoints = async (fetcher: HttpAdapter): Promise<ApiResponse> => {
    try {
        const resp = await fetcher.get<RedeemablePointsResponse>(`/points/ver`);
        if (resp.ok) {
            return {
                ok: true,
                data: resp.puntos,
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