import { ProductsEntities } from "@/core/entities/products-entites";
import { FireBaseDB } from "@/firebase/config";
import { ApiResponse } from "@/infraestructure/interfaces/api-response";
import { collection, getDocs } from "firebase/firestore";


export const InitialLoadProduct = async (): Promise<ApiResponse<ProductsEntities[]>> => {
    try {
        const collectionRef = collection(FireBaseDB, 'productos');
        const docs = await getDocs(collectionRef);
        const products: ProductsEntities[] = [];

        docs.forEach(doc => {
            products.push({ ...doc.data() as ProductsEntities, id: doc.id });
        })
        return {
            ok: true,
            data: products
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false
        }
    }
}

