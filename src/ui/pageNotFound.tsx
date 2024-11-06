import { monserrat } from '@/app/config/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PageNotFound = () => {
    return (
        //TODO: No esta centrado
        <div
            className='flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle'
        >
            <div className="text-center px-5 mx-5">
                <h2 className={`${monserrat.className} antialiased text-9xl`}>404</h2>
                <p className='font-semibold text-xl'>Ups... Lo sentimos mucho </p>
                <p className='font-light'><span>Puedes regresar al <Link href='/' className='font-normal hover:underline transition-all'>Home</Link></span></p>

            </div>
            <div className='px-5 mx-5'>
                <Image src='/imgs/starman_750x750.png'
                    alt='startman'
                    className='p-5 sm:p-0'
                    width={550}
                    height={550}
                />
            </div>
        </div>
    )
}