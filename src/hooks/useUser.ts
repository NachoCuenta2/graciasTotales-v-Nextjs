import { GraciasTotalesFetcher } from "@/config/gracias-totales-fetcher";
import { GetPointsUserByuid } from "@/core/uses-cases/points/get-points-by-uid";
import { FireBaseDB } from "@/firebase/config";
import { ApiResponse } from "@/infraestructure/interfaces/api-response";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";

export const UseUser = () => {
    const [UserPoints, setUserPoints] = useState(0);
    const [userList, setuserList] = useState<{ displayName: string; uid: string; }[]>([])

    const getUserList = async () => {
        const collectionRef = collection(FireBaseDB, `/usuarios`);
        const docs = await getDocs(collectionRef);
        const notes: { displayName: string, uid: string }[] = [];
        docs.forEach(doc => {
            notes.push({ uid: doc.id, displayName: doc.data().displayName });
            //El id del documento es el uid del usuario
        });
        setuserList(notes);
    }
    const GetUserPoints = async (uid: string): Promise<ApiResponse> => {
        const resp = await GetPointsUserByuid(uid, GraciasTotalesFetcher);
        if (resp.ok) {
            setUserPoints(resp.data as number);
            console.log(resp)
            return {
                ok: true,
            };
        } else {
            return {
                ok: false,
                msg: resp.msg
            }
        }
    }

    return {
        UserPoints,
        userList,
        //methods

        getUserList,
        GetUserPoints
    }
}