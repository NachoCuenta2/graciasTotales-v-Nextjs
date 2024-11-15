
import { FireBaseApp } from "@/firebase/config";
import { ApiResponse } from "@/infraestructure/interfaces/api-response";


export const SetVisibleProduct = async (id: string): Promise<ApiResponse> => {

    const { getFirestore, doc, updateDoc } = await import("firebase/firestore");
    const FireBaseDB = getFirestore(FireBaseApp);
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

