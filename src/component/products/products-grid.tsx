import { ProductsEntities } from "@/core/entities/products-entites"
import { ProductItem } from "../product/product-item"
import { Prueba } from '../tostify/prueba';
import { ClaimPriceModal } from "../modal/claim-price-modal";


interface Props {
    products: ProductsEntities[]
}
export const ProductsGrid = ({ products }: Props) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10 '>
            {products.map((p) => (
                <div key={p.Imagenes[1]}>


                    <ProductItem product={p} />
                </div>

            ))}
            <ClaimPriceModal />
            <Prueba />
        </div>
    )
}
