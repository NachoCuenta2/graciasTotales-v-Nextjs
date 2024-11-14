"use client"

import { UsePoints } from "@/hooks/use-points";
import { ToastMessageStore } from "@/store/toastMessage/toastMessageStore";
import { uiPriceModalStore } from "@/store/ui/modal/ClaimPriceModal"
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

interface Props {
    isOpen?: boolean,
    PrizesToClaim?: string
}

export const ClaimPriceModal = ({ isOpen, PrizesToClaim }: Props) => {
    const { isActivePriceModal, setIsActivePriceModal } = uiPriceModalStore()
    const { toogleToastMode } = ToastMessageStore();
    const { putPoints } = UsePoints();

    const [selectedOption, setSelectedOption] = useState("opcion1");
    const [code, setCode] = useState('')
    const [loading, setLoading] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };
    const [efecto, setEfecto] = useState(true)
    const cambiar = () => {
        setEfecto(false)
        setTimeout(() => {
            setIsActivePriceModal(false)
        }, 100);
    }

    useEffect(() => {
        if (isOpen) {
            setEfecto(true)
            setTimeout(() => {
                setIsActivePriceModal(true)
                setSelectedOption(PrizesToClaim!)
            }, 100);
        }
    }, [])
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const confirm = async () => {

        toogleToastMode(false, '')
        setLoading(true);
        await sleep(1500);
        const valueSelected = selectedOption.split('n');
        if (valueSelected[1] === '0') return;
        if (valueSelected[1] === '5') {
            console.log('Only sort');
            return;
        }
        const value: number = (100 - (+valueSelected[1] * 20)) + 20; //valueSelected[1] = 1|2|3|4

        const resp = await putPoints(value, 'suma', code, 'abc'); //FALTA EL UID DEL COOKIE
        if (resp.ok) {
            toogleToastMode(true, 'Puntos canjeados exitosamente!')
        } else {
            toogleToastMode(true, resp.msg ? resp.msg : 'Ocurrio un eror, por favor vuelve a intentarlo más tarde')
        }
        setLoading(false)
    }
    return (
        <div className={`${isActivePriceModal ? 'block' : 'hidden'} w-screen h-screen flex justify-center items-center fixed top-[50px] z-50 `}>

            <div
                className={`fixed top-0 left-0 w-screen h-screen z-10 bg-black ${efecto ? 'opacity-30' : 'opacity-0'}  transition-all`}
            />

            {/* Blur */}
            <div
                className={`fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter  ${efecto ? 'opacity-30 backdrop-blur-md' : 'opacity-0 backdrop-blur-none'}  transition-all`}
            />
            {loading ?
                <PropagateLoader className="z-50" />
                :
                <div
                    className='w-[400px] h-[350px] bg-white z-20  flex flex-row justify-center py-9 rounded-lg'
                >
                    <select value={selectedOption} onChange={handleChange} className="text-black h-[50px] rounded-sm border border-black absolute self-start">
                        <option value="opcion0">Selecciona premio a reclamar</option>
                        <option value="opcion1">100 puntos</option>
                        <option value="opcion2">80 puntos</option>
                        <option value="opcion3">60 puntos</option>
                        <option value="opcion4">40 puntos</option>
                        <option value="opcion5">Solo sorteo</option>
                    </select>
                    <div className="self-center absolute ">

                        <input
                            type="text"
                            placeholder="Codigo de verificación"
                            className="text-xs sm:text-lg border border-black rounded text-black placeholder-gray-300 pl-2 mt-5"
                            style={{ height: '50px' }}
                            name='code'
                            value={code}
                            onChange={(event) => setCode(event.target.value)}
                        />
                    </div>
                    <div className="flex self-end gap-2">
                        <button className="btn btn-primary text-black border border-black rounded-lg p-2" onClick={cambiar}>Cancelar</button>
                        <button className="btn btn-primary text-black border border-black rounded-lg p-2" onClick={confirm}>Confirmar</button>

                    </div>

                    {/* <ToastifyComponent method={() => { }} idToast="ClaimPriceModalToast" /> */}
                </div>

            }
        </div>
    )
}
