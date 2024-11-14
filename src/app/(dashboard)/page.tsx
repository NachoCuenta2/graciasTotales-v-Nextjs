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

    const products: ProductsEntities[] | undefined = (await InitialLoadProduct()).data;
    const resolvedSearchParams = await searchParams;
    const { ClaimPrizes } = resolvedSearchParams;
    if (!products) return;
    const titulos = products.map((p) => p.titulo);
    return (
        <>

            <div className="mt-[80px]"
            // style={{ backgroundColor: '#C19A6B' }}
            >
                <ToastifyComponent />
                {
                    products &&
                    <>
                        <ProductsGrid products={products} ClaimPrizes={ClaimPrizes} />
                        <AddProductModal ProductsTitle={titulos!} />
                    </>
                }
                <AddProductButton />
            </div>

        </>
    );
};