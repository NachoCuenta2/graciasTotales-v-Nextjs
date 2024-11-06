import { ProductImageSelecter } from '@/component/product/product-image-selecter';
import { initialData } from '@/seed/seed';

import { notFound } from 'next/navigation';
import 'animate.css';


interface Props {
    params: {
        slug: string
    }
}

export default function ({ params }: Props) {
    const product = initialData.products.find((p) => p.slug === params.slug);
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
                    <p>Precio ${product.valor} </p>
                </div>
                <div className='flex w-full justify-center pt-4 mb-5 sm:mt-[140px]'>

                    <button className='btn bg-black rounded-xl px-5 py-1'>Canjear</button>
                </div>

            </div>
        </div>
    );
};