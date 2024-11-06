"use client"

import { uiPriceModalStore } from "@/store/ui/ClaimPriceModal"
import { useState } from "react";

export const ClaimPriceModal = () => {
    const { isActivePriceModal, setIsActivePriceModal } = uiPriceModalStore()
    const [selectedOption, setSelectedOption] = useState('');
    const [code, setCode] = useState('')
    const handleChange = (event: any) => {
        setSelectedOption(event.target.value);
    };
    const [efecto, setEfecto] = useState(true)
    const cambiar = () => {
        setEfecto(false)
        setTimeout(() => {
            setIsActivePriceModal(false)
        }, 100);
    }
    return (
        <div className={`${isActivePriceModal ? 'block' : 'hidden'} w-screen h-screen flex justify-center items-center fixed -top-[50px] `}>

            <div
                className={`fixed top-0 left-0 w-screen h-screen z-10 bg-black ${efecto ? 'opacity-30' : 'opacity-0'}  transition-all`}
            />

            {/* Blur */}
            <div
                className={`fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter  ${efecto ? 'opacity-30 backdrop-blur-md' : 'opacity-0 backdrop-blur-none'}  transition-all`}
            />
            <div
                className='w-[400px] h-[350px] bg-white z-20  flex flex-row justify-center py-9 rounded-lg'
            >
                <select value={selectedOption} onChange={handleChange} className="text-black h-[50px] rounded-sm border border-black absolute self-start">
                    <option value="">Selecciona premio a reclamar</option>
                    <option value="opcion1">100 puntos</option>
                    <option value="opcion2">80 puntos</option>
                    <option value="opcion3">60 puntos</option>
                    <option value="opcion3">40 puntos</option>
                    <option value="opcion4">Solo sorteo</option>
                </select>
                <div className="self-center absolute ">

                    <input
                        type="text"
                        placeholder="Codigo de verificación"
                        className="text-xs sm:text-lg border border-black rounded text-black placeholder-gray-300 pl-2 mt-5"
                        style={{ height: '50px' }}
                        name='code'
                        value={code}
                        onChange={() => setCode(prev => prev)}
                    />
                </div>
                <div className="flex self-end gap-2">
                    <button className="btn btn-primary text-black border border-black rounded-lg p-2" onClick={cambiar}>Cancelar</button>
                    <button className="btn btn-primary text-black border border-black rounded-lg p-2" onClick={cambiar}>Confirmar</button>

                </div>

            </div>

        </div>
    )
}
