"use client"

import Image from "next/image"
import { useState } from "react"
interface Props {
    image: string[]
}
export const ProductImageSelecter = ({ image }: Props) => {
    const [imageSelected, setimageSelected] = useState(image[0])
    return (
        <>
            <div className='h-[50%] sm:h-[70%]  flex justify-center'>
                <Image
                    src={imageSelected}
                    alt='Product image'
                    width={500}
                    className='min-w-[50px] sm:max-h-[100%] rounded relative'
                    height={500}
                />
            </div>
            <div className="h-[50%] mx-3 sm:mx-0">
                <div className="w-full flex flex-col sm:flex-row justify-center gap-1 sm:gap-5 sm:mt-10">
                    {image.map((i) =>
                        <Image
                            onMouseEnter={() => setimageSelected(i)}
                            src={i}
                            alt='Product image'
                            width={100}
                            className='object-fill rounded relative w-[80] h-auto sm:w-[80]'
                            height={100}
                            key={i}
                        />
                    )}
                </div>
            </div>
        </>
    )
}
