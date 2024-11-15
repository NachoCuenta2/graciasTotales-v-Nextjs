import { GraciasTotalesFetcher } from "@/config/gracias-totales-fetcher"
import { GetCanjesByUid } from "@/core/uses-cases/canjes/get-canjes-by-uid"
import { ApiResponse } from "@/infraestructure/interfaces/api-response"
import { Busqueda } from "@/infraestructure/interfaces/canjes-response"
import { useState } from "react"

export const UseUserCanjes = () => {
    const [userCanjes, setUserCanjes] = useState<Busqueda[]>([])

    const onGetCanjesByUid = async (uid: string): Promise<ApiResponse> => {
        const resp = await GetCanjesByUid(uid, GraciasTotalesFetcher);
        if (resp.ok) {
            setUserCanjes(resp.data as Busqueda[]);
            return {
                ok: true,
            }
        } else {
            return {
                ok: false,
                msg: resp.msg
            }
        }

    }


    return {

        userCanjes,

        //Methods


        onGetCanjesByUid,



    }
}