export const revalidate = 15;
import { ProductImageSelecter } from '@/component/product/product-image-selecter';

import { notFound } from 'next/navigation';
import 'animate.css';
import { GetAllSlug } from '@/core/uses-cases/products/get-all-slug';
import { cache } from 'react';
import { DeleteOrClaimButton } from '@/component/buttons/deleteOrClaimButton';
import { getProductBySlug } from '@/core/uses-cases/products/loadBySlug';
import { ValueLabel } from '@/component/product/valueLabel';



interface Props {
    params: Promise<{
        slug: string
    }>
}


const getProductBySlugCached = cache(getProductBySlug);

export async function generateStaticParams() {
    const response = await GetAllSlug();
    if (!response.ok || !response.data) {
        return [];
    }

    // Devuelves directamente un arreglo de objetos con el campo slug
    return response.data.map(product => ({
        slug: product.slug
    }));
}
export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const product = (await getProductBySlugCached(slug));
    return {
        title: `${product.data?.titulo} - GraciasTotales`,
        description: `${product.data?.descripcion} - Obtén más detalles sobre este premio canjeable en GraciasTotales.`
    };
}




export default async function ProductPage({ params }: Props) {
    const slugResolved = (await params).slug;
    const product = (await getProductBySlugCached(slugResolved)).data;
    if (!product) {
        notFound()
    }

    return (
        <div className="flex flex-col sm:flex-row w-full justify-between sm:mt-[0px] mt-[70px] animate__animated animate__fadeIn">
            <div className="sm:w-[50%] w-full h-auto flex flex-row sm:flex-col sm:min-w-[40%]  justify-center sm:pt-[70px] sm:min-h-screen relative">
                <ProductImageSelecter image={product.Imagenes} />
            </div>
            <div className=" w-full sm:pt-[70px]  relative flex flex-col sm:mx-2 ">
                <div>
                    <h1>{product.titulo}</h1>
                    <div className="pt-10" />
                    <p>{product.descripcion}</p>
                    <div className="pt-10" />
                    <ValueLabel slug={slugResolved} />
                </div>
                <div className='flex w-full justify-center pt-4 mb-5 sm:mt-[140px]'>
                    <DeleteOrClaimButton id={product.id} valorDeProducto={product.valor} tituloProducto={product.titulo} disponible={product.disponible} />
                </div>

            </div>

        </div>
    );
};