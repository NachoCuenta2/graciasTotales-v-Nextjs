
import { FireBaseApp } from '@/firebase/config';
import { ApiResponse } from "@/infraestructure/interfaces/api-response";


export const DeleteProduct = async (id: string): Promise<ApiResponse> => {


    try {
        const { getFirestore, doc, updateDoc } = await import("firebase/firestore");
        const FireBaseDB = getFirestore(FireBaseApp);
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

