
import { ProductsEntities } from "@/core/entities/products-entites";
import { FireBaseDB } from "@/firebase/config";
import { ApiResponse } from "@/infraestructure/interfaces/api-response";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getProductByTitle = async (title: string): Promise<ApiResponse<ProductsEntities | null>> => {
    try {
        const collectionRef = collection(FireBaseDB, 'productos');
        const q = query(collectionRef, where("titulo", "==", title));
        const docs = await getDocs(q);

        if (!docs.empty) {
            const doc = docs.docs[0];
            const product = { ...doc.data() as ProductsEntities, id: doc.id };

            return {
                ok: true,
                data: product
            };
        }

        return {
            ok: false,
            data: null
        };
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            data: null
        };
    }
};