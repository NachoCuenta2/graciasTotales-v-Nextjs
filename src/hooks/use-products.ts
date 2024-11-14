import { ProductsEntities } from "@/core/entities/products-entites";
import { FireBaseDB } from "@/firebase/config";
import { GenerateSlug } from "@/helper/generateSlug";
import { UploadingPhotos } from "@/helper/uploadPhotosToCloudinary";
import { ApiResponse } from "@/infraestructure/interfaces/api-response";
import { productStore } from "@/store/products/products-store";
import { addDoc, collection, getDocs } from "firebase/firestore";

interface formState {
    Titulo: '',
    Descripcion: '',
    Valor: '',
}

export const UseProducts = () => {

    const { addProduct, addProducts } = productStore();

    const InitialLoadProduct = async (): Promise<ApiResponse> => {
        try {
            const collectionRef = collection(FireBaseDB, 'productos');
            const docs = await getDocs(collectionRef);
            const products: ProductsEntities[] = [];

            docs.forEach(doc => {
                products.push({ ...doc.data() as ProductsEntities, id: doc.id });
            })
            addProducts(products);
            return {
                ok: true
            }
        } catch (error) {
            console.log(error)
            return {
                ok: false
            }
        }
    }

    const startUploadProduct = async (formState: formState, Imagenes: File[]) => {

        const photoURL = await UploadingPhotos(Imagenes);

        const body = {
            Imagenes: photoURL,
            titulo: formState.Titulo,
            valor: +formState.Valor,
            descripcion: formState.Descripcion,
            disponible: true,
            slug: GenerateSlug(formState.Titulo),
        };
        const productosRef = collection(FireBaseDB, 'productos');
        const nuevoDocRef = await addDoc(productosRef, body);
        console.log("Documento creado con ID: ", nuevoDocRef.id);
        addProduct({ ...body, id: nuevoDocRef.id });
    }
    return {
        startUploadProduct,
        InitialLoadProduct
    }
}