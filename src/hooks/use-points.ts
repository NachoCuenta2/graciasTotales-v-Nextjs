import { startPutPoints } from "@/core/uses-cases/points/put-points"
import { UseSession } from "./useSession"
import { GraciasTotalesFetcher } from "@/config/gracias-totales-fetcher"
import { Puntos } from "@/infraestructure/interfaces/points-response"
import { ApiResponse } from "@/infraestructure/interfaces/api-response"
import { authStore } from "@/store/auth/auth-store"

export const UsePoints = () => {
    const { setPoints } = authStore()
    const { user } = UseSession()
    const putPoints = async (cantidad: number, tipo: string, codigo: string, uid: string): Promise<ApiResponse> => {
        try {

            const body: Puntos = {
                cantidad: cantidad.toString(),
                codigo,
                id: uid
            }
            const resp = await startPutPoints(GraciasTotalesFetcher, body, tipo)
            if (resp.ok) {

                setPoints(resp.cantidad!)
            }

            return resp
        } catch (error) {
            console.log(error);
            return {
                ok: false
            }
        }
    }


    return {
        //methods


        putPoints
    }
}