import { HttpAdapter } from "@/config/adapter/http/http.adapter";
import { Puntos } from "@/infraestructure/interfaces/points-response";





export const startPutPoints = async (fetcher: HttpAdapter, body: Puntos, tipo: string): Promise<{ ok: boolean, cantidad?: number, msg?: string }> => {

    try {
        const resp = await fetcher.put<{ ok: boolean, cantidad: number }>('/puntosUsuarios/cargar', { ...body, tipo, uid: body.id });
        return {
            ok: true,
            cantidad: resp.cantidad
        }

    } catch (error) {

        console.log(error)
        return {
            ok: false,
            msg: 'No se pudo canjear los puntos, por favor asegurese de haber ingresado correctamente el codigo de seguridad.'
        }
    }
}