
import { FireBaseApp } from "@/firebase/config";
import { ApiResponse } from "@/infraestructure/interfaces/api-response";


export const GetProductValueBySlug = async (slug: string): Promise<ApiResponse<number>> => {
    try {
        const { getFirestore, getDocs, collection, query, where } = await import("firebase/firestore");
        const FireBaseDB = getFirestore(FireBaseApp);
        const collectionRef = collection(FireBaseDB, 'productos');

        // Crear una consulta para filtrar por el slug
        const q = query(collectionRef, where("slug", "==", slug));
        const docs = await getDocs(q);

        if (!docs.empty) {
            // Extraer el valor del primer documento encontrado
            const productValue = docs.docs[0].data().valor;

            return {
                ok: true,
                data: productValue
            };
        } else {
            // Retornar un error si no se encuentra ningún documento
            return {
                ok: false,
                data: 0, // O el valor que consideres apropiado por defecto
            };
        }
    } catch (error) {
        console.error(error);  // Registrar el error
        return {
            ok: false,
            data: 0
        };
    }
};