import { HttpAdapter } from "@/config/adapter/http/http.adapter";
import { ApiResponse } from '../../../infraestructure/interfaces/api-response';
import { NewRedeemablePointsResponse } from "@/infraestructure/interfaces/points-response";

export const CreateRedeemablePoints = async (quantity: number, code: string, fetcher: HttpAdapter): Promise<ApiResponse> => {
    try {
        const resp = await fetcher.post<NewRedeemablePointsResponse>(`points/crear`, { cantidad: quantity, codigo: code });
        console.log(resp)
        if (resp.ok) {
            return {
                ok: true,
                data: resp.puntos,
                msg: resp.puntos.codigo
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