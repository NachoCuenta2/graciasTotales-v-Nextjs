"use client"
import { authStore } from '@/store/auth/auth-store';
import { ToastMessageStore } from '@/store/toastMessage/toastMessageStore';
import { uiPriceModalStore } from '@/store/ui/modal/ClaimPriceModal';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastify.css';

interface Props {
    method?: () => void;

}
export const ToastifyComponent = ({ method, }: Props) => {
    const { setIsActivePriceModal } = uiPriceModalStore();
    const { VisibleToast, message, toogleToastMode } = ToastMessageStore();
    const mode = authStore(state => state.mode)
    const toastId = "error-toast";


    useEffect(() => {
        //esto esta hecho con el fin de que al admin no se le muestre el mensaje '¿Tienes puntos por reclamar? ¡Presiona aqui!'
        if (VisibleToast && message) {

            if (mode === 'Admin' && message === '¿Tienes puntos por reclamar? ¡Presiona aqui!') return;
            if (toast.isActive(toastId)) {
                toast.update(toastId, { render: message });
            } else {
                toast(message, { toastId });
            }


            toogleToastMode(false, '');
        }
    }, [toogleToastMode, message, mode])

    return (
        <>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                className={'z-200'}
                onClick={!method ? () => setIsActivePriceModal(true) : method}

            />


        </>
    )
}
