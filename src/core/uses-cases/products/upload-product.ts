
import { FireBaseApp } from "@/firebase/config";
import { GenerateSlug } from "@/helper/generateSlug";
import { UploadingPhotos } from "@/helper/uploadPhotosToCloudinary";
import { ApiResponse } from "@/infraestructure/interfaces/api-response";


export const UploadProduct = async (formState: {
    Titulo: '', Descripcion: '', Valor: '',
}, Imagenes: File[]): Promise<ApiResponse> => {
    try {
        const photoURL = await UploadingPhotos(Imagenes);

        const body = {
            Imagenes: photoURL,
            titulo: formState.Titulo,
            valor: +formState.Valor,
            descripcion: formState.Descripcion,
            disponible: true,
            slug: GenerateSlug(formState.Titulo),
        };
        const { getFirestore, addDoc, collection } = await import("firebase/firestore");
        const FireBaseDB = getFirestore(FireBaseApp);
        const productosRef = collection(FireBaseDB, 'productos');
        await addDoc(productosRef, body);
        return {
            ok: true
        }
    } catch (error) {
        console.error(error);
        return {
            ok: false,

        };
    }
};

