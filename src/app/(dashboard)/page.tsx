import { AddProductButton } from '@/component/addButton/add-product-button';
import { AddProductModal } from '@/component/modal/add-product-modal';
import { ProductsGrid } from '@/component/products/products-grid';
import { ToastifyComponent } from '@/component/tostify/prueba';
import { ProductsEntities } from '@/core/entities/products-entites';
import { InitialLoadProduct } from '@/core/uses-cases/products/initialLoadProducts';
import type { Metadata } from 'next'




export const metadata: Metadata = {
    title: 'GraciasTotales -- Pagina',
    description: 'Pagina principal del negocio Gracias Totales'
};
interface Props {
    searchParams: Promise<{ ClaimPrizes?: string }>;
}


export default async function PrincipalPage({ searchParams }: Props) {
    //Los searchParams son parametros que sirven para abrir el modal que mas adelante te voy a mostrar


    const productsResponse = await InitialLoadProduct();
    const products: ProductsEntities[] | undefined = productsResponse.data;
    //Se traen los datos de los productos, ya que en la pagina principal se muestran
    const resolvedSearchParams = await searchParams;
    //Se resuelve los SearchParams (en v15 de next ahora los searchparams se deben resolver, pero vos no tenes documentacion de esto, confia en lo que te digo)
    const { ClaimPrizes } = resolvedSearchParams;
    if (!products) return;
    const titulos = products.map((p) => p.titulo);
    //esto es para mandar los titulos a el modal que mencione al prinicipio, ya vas a entender por que
    return (
        <>

            <div className="mt-[80px]"
            // style={{ backgroundColor: '#C19A6B' }}
            >
                {/* Este tostify es un paquete para mostrar mensajes, ¿Es pesado? */}
                <ToastifyComponent />
                {
                    products &&
                    <>
                        <ProductsGrid products={products} ClaimPrizes={ClaimPrizes} />
                        {/* aca mandamos los productos y tambien los params para el modal que mencione al principio */}

                        <AddProductModal ProductsTitle={titulos!} />
                        {/* modal de agregar productos */}
                    </>
                }
                <AddProductButton />
            </div>

        </>
    );
};