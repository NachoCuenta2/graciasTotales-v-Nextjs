
import { FireBaseDB } from "@/firebase/config";
import { ApiResponse } from "@/infraestructure/interfaces/api-response";
import { doc, updateDoc } from "firebase/firestore";


export const SetVisibleProduct = async (id: string): Promise<ApiResponse> => {


    try {
        const docRef = doc(FireBaseDB, `/productos/${id}`);
        await updateDoc(docRef, {
            disponible: true
        });

        return {
            ok: true,

        };
    } catch (error) {
        console.error(error);
        return {
            ok: false,

        };
    }
};

