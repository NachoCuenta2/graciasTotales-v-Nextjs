
import { FireBaseDB } from "@/firebase/config";
import { ApiResponse } from "@/infraestructure/interfaces/api-response";
import { doc, updateDoc } from "firebase/firestore";


export const DeleteProduct = async (id: string): Promise<ApiResponse> => {


    try {
        const docRef = doc(FireBaseDB, `/productos/${id}`);
        await updateDoc(docRef, {
            disponible: false
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

