
import { create } from "zustand";

export interface ToastState {
    message: string,
    VisibleToast: boolean
    toogleToastMode: (mode: boolean, message: string) => void;

}

export const ToastMessageStore = create<ToastState>()((set) => ({

    message: '¿Tienes puntos por reclamar? ¡Presiona aqui!',
    VisibleToast: true,
    toogleToastMode: (mode: boolean, message: string,) => {
        set(() => ({
            message: message, VisibleToast: mode,

        }));
    },
}));