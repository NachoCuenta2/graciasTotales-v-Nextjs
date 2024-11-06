"use client"
import { uiPriceModalStore } from '@/store/ui/ClaimPriceModal';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Prueba = () => {
    const { isActivePriceModal, setIsActivePriceModal } = uiPriceModalStore()

    useEffect(() => {
        toast("Tienes puntos por reclamar? Presiona aqui");
    }, [])

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                onClick={() => setIsActivePriceModal(true)}
            />
        </>
    )
}
