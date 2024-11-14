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
        <div
            className={`overflow-hidden fade-in flex justify-center items-center h-full w-full rounded-lg`}
            onMouseEnter={() => setDisplayInfo(true)}
            onMouseLeave={() => setDisplayInfo(false)}
        >
            <div className="relative w-[80vw] rounded-lg h-[80vw] sm:w-[25vw] sm:h-[35vw] flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
                <Image
                    src={product.Imagenes[0]}
                    alt={product.titulo}
                    className={`object-fit w-full h-full ${displayInfo && 'backdrop-filter backdrop-blur-sm rounded-lg'} ${!product.disponible ? 'grayscale opacity-50' : ''}`}
                    width={500}
                    height={500}
                />
                {displayInfo && (
                    <div className="p-4 flex flex-col justify-center items-center absolute transition-all animate__animated animate__fadeIn bg-black bg-opacity-50 w-full h-full">
                        <span className="font-bold text-xs w-[90%] text-white text-center">{product.disponible ? product.descripcion.slice(0, 100) : 'Este producto no esta visible para los clientes. '}</span>
                        <Link href={`/product/${product.slug}`} className="btn-btn primary mt-10 text-white">Ver más</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
