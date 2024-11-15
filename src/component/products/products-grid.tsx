import { ProductsEntities } from "@/core/entities/products-entites"
import { ClaimPriceModal } from "../modal/claim-price-modal";
import { FilterProductComponentByMode } from "../filterProductComponentByMode";


interface Props {
    products: ProductsEntities[]
    ClaimPrizes?: string;

}
export const ProductsGrid = ({ products, ClaimPrizes }: Props) => {
    let opcion = "opcion0";
    if (ClaimPrizes === "100") {
        opcion = "opcion1"
    }
    if (ClaimPrizes === "80") {
        opcion = "opcion2"
    }
    if (ClaimPrizes === "60") {
        opcion = "opcion3"
    }
    if (ClaimPrizes === "40") {
        opcion = "opcion4"
    }
    if (ClaimPrizes === "onlySort") {
        opcion = "opcion5"
    }
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10`}>
            <FilterProductComponentByMode products={products} />    {/* Grid de productos pero filtrada para-

                                                                        -que los clientes no vean los productos no disponibles */}
            {ClaimPrizes
                ?
                // aca lo unico que hacemos es mandar parametros o no al archivo segun los searchParams que mencione al principio, para ya tener por defecto seleccionada una opcion
                <ClaimPriceModal isOpen={true} PrizesToClaim={opcion} />
                :
                <ClaimPriceModal />
            }

        </div>
    )
}
