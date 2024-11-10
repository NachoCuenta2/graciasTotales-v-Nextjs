import { GraciasTotalesFetcher } from "@/config/gracias-totales-fetcher"
import { GetAllCanjes } from "@/core/uses-cases/canjes/get-all-canjes"
import { GetCanjesByUid } from "@/core/uses-cases/canjes/get-canjes-by-uid"
import { StartAlterCanjeWithId } from "@/core/uses-cases/canjes/Start-alter-canje-with-Id"
import { ApiResponse } from "@/infraestructure/interfaces/api-response"
import { Busqueda } from "@/infraestructure/interfaces/canjes-response"
import { useState } from "react"

export const UseCanjes = () => {
    const [userCanjes, setUserCanjes] = useState<Busqueda[]>([])
    const onGetAllCanjes = async (): Promise<ApiResponse> => {

        const resp = await GetAllCanjes(GraciasTotalesFetcher);
        if (resp.ok) {
            // setAllCanjes(resp.data as Busqueda[]);
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

    const AlterStateCanje = async (id: string): Promise<ApiResponse> => {
        const resp = await StartAlterCanjeWithId(id, GraciasTotalesFetcher);
        if (resp.ok) {
            return {
                ok: true
            }
        } else {
            return {
                ok: false
            }
        }
    }
    return {

        userCanjes,

        //Methods
        AlterStateCanje,

        onGetCanjesByUid,

        onGetAllCanjes

    }
}