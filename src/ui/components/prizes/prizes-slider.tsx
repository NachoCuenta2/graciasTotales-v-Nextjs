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
        <div className='flex flex-col mt-[35px] md:mt-[70] justify-center items-center min-h-screen'>


            <div className="flex h-[500px] md:h-[620px] w-[80%] justify-center">
                <Swiper
                    spaceBetween={30}
                    breakpoints={{

                        640: {
                            slidesPerView: 1,
                        }


                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}

                >
                    {product.map((p) =>

                        <SwiperSlide key={p.id}>
                            <div className="flex flex-col w-[100%] h-[450] md:h-[700px] items-center">
                                <Image
                                    src={`/products/${p.Imagenes[0]}`}
                                    alt='Product image'
                                    width={500}
                                    height={500}
                                    className='h-[350px] md:h-[500px] w-full lg:w-[600px]'
                                />
                                <div className='flex flex-col self-center w-full lg:w-[600px]'>

                                    <p><span className='font-bold'>Producto</span>: {p.titulo}</p>
                                    <p><span className='font-bold'>Reclamado</span>: {p.reclamado ? 'Si' : 'No'}</p>
                                </div>
                                <div className="f-width flex justify-center">
                                    <button className='absolute -sm:bottom-0  p-2 border rounded-lg mb-[45px]'>Ver comprobante</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}

                </Swiper>
            </div>
        </div>

    )
}
