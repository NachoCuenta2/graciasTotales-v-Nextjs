
import { FireBaseApp } from "@/firebase/config";
import { ApiResponse } from "@/infraestructure/interfaces/api-response";


export const GetAllSlug = async (): Promise<ApiResponse<{ slug: string }[]>> => {
    try {
        const { getFirestore, getDocs, collection } = await import("firebase/firestore");
        const FireBaseDB = getFirestore(FireBaseApp);
        const collectionRef = collection(FireBaseDB, 'productos');
        const docs = await getDocs(collectionRef);

        // Mapear los documentos a un arreglo de objetos con el slug
        const slugs: { slug: string }[] = docs.docs.map(doc => ({ slug: doc.data().slug }));

        // Deberías eliminar el console.log cuando pases a producción
        console.log(slugs);

        return {
            ok: true,
            data: slugs
        };
    } catch (error) {
        console.error(error);  // Es mejor usar console.error para errores
        return {
            ok: false,
            data: []
        };
    }
};

