"use client"
import { PrizesEntities } from '@/core/entities/prizes-entities';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
interface Props {
    product: PrizesEntities[]
}
export const PrizesSlider = ({ product }: Props) => {
    return (
        <div className="flex flex-col md:mt-[0] justify-start items-center overflow-hidden rounded-lg ">
            <div className="flex mt-[70px] w-full sm:w-[45%]  justify-start rounded-lg">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}

                >
                    {product.map((p) => (
                        <SwiperSlide key={p.id}>
                            <div className="flex flex-col w-full h-[650px] relative rounded-lg">
                                <Image
                                    src={`${p.Imagenes[0]}`}
                                    alt='Product image'
                                    width={4096}
                                    height={2160}
                                    className='rounded-lg max-h-[504px] object-fit'
                                />
                                <div className='flex flex-col self-center w-full lg:w-[600px] mt-4'>
                                    <p><span className='font-bold text-black'>Producto</span>: {p.titulo}</p>
                                    <p><span className='font-bold text-black'>Reclamado</span>: {p.reclamado ? 'Si' : 'No'}</p>
                                </div>
                                <div className="w-full flex justify-center mt-4">
                                    <button className='p-2 border rounded-lg mb-4'>Ver comprobante</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    )
}
