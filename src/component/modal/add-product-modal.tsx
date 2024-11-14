"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import { uiAddProductModalStore } from "@/store/ui/modal/add-product-modal"
import { FormEvent, useEffect, useRef, useState } from "react"
import Image from "next/image";
import './styles.css';
import { IoCloseOutline } from 'react-icons/io5';
import { UseProducts } from '@/hooks/use-products';
import { ToastMessageStore } from '@/store/toastMessage/toastMessageStore';
import { useRouter } from 'next/navigation';


interface formState {
    Titulo: '',
    Descripcion: '',
    Valor: '',
}
interface Props {
    ProductsTitle: string[]
}

export const AddProductModal = ({ ProductsTitle }: Props) => {
    const isActiveAddProductModal = uiAddProductModalStore(state => state.isActiveAddProductModal)
    const setIsActiveAddProductModal = uiAddProductModalStore(state => state.setIsActiveAddProductModal)
    const router = useRouter();

    const [loading, setLoading] = useState(false)
    const { toogleToastMode } = ToastMessageStore();
    const { startUploadProduct } = UseProducts();
    const [efecto, setEfecto] = useState(true)
    const cambiar = () => {
        setEfecto(false)
        setTimeout(() => {
            setIsActiveAddProductModal(false)
        }, 100);
    }



    const [formState, setFormState] = useState<formState>({
        Titulo: '',
        Descripcion: '',
        Valor: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [Imagenes, setImagenes] = useState<File[]>([]);
    const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const nuevosArchivos = Array.from(files);
            setImagenes((prevImagenes) => [...prevImagenes, ...nuevosArchivos]);
        }
    };


    const submit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        const titleExist = ProductsTitle.filter((p) => p === formState.Titulo)
        console.log('titleExist', titleExist, 'formState.Titulo', formState.Titulo)
        if (titleExist.length > 0) {
            toogleToastMode(true, 'Ya existe un producto con este mismo titulo, por favor modifiquelo. ');
            return;
        }
        await startUploadProduct(formState, Imagenes);
        setLoading(false)
        toogleToastMode(true, 'Producto subido correctamente!');
        setFormState({
            Titulo: '',
            Descripcion: '',
            Valor: ''
        })
        setImagenes([])
        router.refresh();
    }
    const deleteImage = (image: File) => {
        const imageList = [...Imagenes].filter(i => i !== image);
        setImagenes(imageList)
    }
    useEffect(() => {
        if (isActiveAddProductModal) {
            setEfecto(true); // Cuando el modal se abre, se activa el efecto de desenfoque
        }
    }, [isActiveAddProductModal]);

    return (
        <div className={`${isActiveAddProductModal ? 'block' : 'hidden'} w-screen h-screen flex justify-center items-center fixed -top-[50px] z-50`}>

            <div
                className={`fixed top-0 left-0 w-screen h-screen z-10 bg-black ${efecto ? 'opacity-30' : 'opacity-0'}  transition-all`}
            />

            {/* Blur */}
            <div
                className={`fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter  ${efecto ? 'opacity-30 backdrop-blur-md' : 'opacity-0 backdrop-blur-none'}  transition-all`}
            />
            <div
                className='w-[400px] h-auto bg-white z-20  flex flex-col justify-start rounded-lg'
            >
                <div className='relative  text-black w-full'>
                    <button className='top-0 right-5 absolute text-lg' onClick={cambiar}>X</button>
                </div>


                <form onSubmit={(e) => submit(e)}>
                    <div className="w-full flex justify-center flex-col px-10 mt-10">

                        <h3 className="text-black">Agregar producto</h3>
                        <input
                            type="text"
                            name="Titulo"
                            placeholder="Titulo"
                            className="text-xs sm:text-lg border border-black rounded text-black placeholder-gray-300 pl-2 mt-5"
                            style={{ height: '50px' }}
                            value={formState.Titulo}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="Descripcion"
                            placeholder="Descripcion"
                            className="text-xs sm:text-lg border border-black rounded text-black placeholder-gray-300 pl-2 mt-5"
                            style={{ height: '50px' }}
                            value={formState.Descripcion}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="Valor"
                            placeholder="Valor en puntos"
                            className="text-xs sm:text-lg border border-black rounded text-black placeholder-gray-300 pl-2 mt-5"
                            style={{ height: '50px' }}
                            value={formState.Valor}
                            onChange={handleInputChange}
                        />
                        <button onClick={() => fileInputRef.current?.click()}
                            type="button"
                            className='disabled disabled:bg-gray-100 disabled:cursor-not-allowed'
                            disabled={loading}
                        >
                            <p className="underline italic text-black pb-5">Adjuntar....</p>
                        </button>

                        <input
                            type="file"
                            ref={fileInputRef}
                            multiple
                            onChange={onFileInputChange}
                            style={{ display: 'none' }}
                        />
                        <div className={`${Imagenes.length > 0 ? 'flex' : 'hidden'}`} style={{ width: '100%', alignSelf: 'start', justifyContent: 'center', flexDirection: 'column' }}>
                            <div className="justify-center w-full h-[100px] flex">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    centeredSlides={true}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    modules={[Pagination, FreeMode]}
                                    scrollbar={{ draggable: true }}
                                    className="mySwiper"
                                    navigation={true}
                                    pagination
                                >
                                    {Imagenes.map((i, index) => (
                                        <SwiperSlide key={index} className="flex justify-center items-center relative group">
                                            <div className="relative w-[250px] h-[500px] overflow-hidden cursor-pointer">
                                                {/* Imagen con efecto de blur al hacer hover */}
                                                <Image
                                                    src={URL.createObjectURL(i)}
                                                    alt="Image product"
                                                    width={250}
                                                    height={500}
                                                    className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm group-hover:brightness-50"
                                                    onClick={() => deleteImage(i)}
                                                />
                                                {/* Ícono de eliminar que aparece al hacer hover */}
                                                <div
                                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    onClick={() => deleteImage(i)}
                                                >
                                                    <IoCloseOutline className='text-white text-4xl' />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <button
                                className="mt-10 mb-5 text-black disabled rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
                                type='submit'
                                disabled={loading}
                            >Confirmar</button>
                        </div>
                    </div>
                </form>



            </div>
        </div >
    )
}
