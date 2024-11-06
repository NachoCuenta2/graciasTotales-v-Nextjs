"use client";
import 'animate.css';

import { ProductsEntities } from '@/core/entities/products-entites'
import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link';
interface Props {
    product: ProductsEntities
}
export const ProductItem = ({ product }: Props) => {

    const [displayInfo, setDisplayInfo] = useState(false)
    return (
        <div className="rounded-md overflow-hidden fade-in flex justify-center items-center" onMouseEnter={() => setDisplayInfo(true)} onMouseLeave={() => setDisplayInfo(false)}>
            <div className='relative flex justify-center items-center transform transition-transform duration-300 hover:scale-110'>

                <div className={`${displayInfo && 'bg-black opacity-30'} `}>

                    <Image
                        src={`/products/${product.Imagenes[0]}`}
                        alt={product.titulo}
                        className={`object-cover rounded ${displayInfo && 'backdrop-filter backdrop-blur-sm  '}`}
                        width={500}
                        height={500}

                    />
                </div>
                {displayInfo &&
                    <div className={`p-4 flex flex-col justify-center items-center absolute transition-all animate__animated animate__fadeIn`}>
                        <span className='font-bold text-xs w-[90%]'>{product.descripcion.slice(0, 100)}</span>
                        <Link href={`/product/${product.slug}`} className='btn-btn primary mt-10'>Ver más</Link>
                    </div>}
            </div>
        </div >
    )
}
