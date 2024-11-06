import { FireBaseAuth } from "@/firebase/config";
import { LogInWithEmailPassword, RegisterWithEmailPassword, signWithGoogle } from "@/firebase/providers";
import { ApiResponse } from "@/infraestructure/interfaces/api-response"
import { authStore } from "@/store/auth/auth-store";
import { onAuthStateChanged } from "firebase/auth";
import { redirect } from "next/navigation";
import { useState } from "react";

export const UseSession = () => {

    //Esta es toda la informacion del authStore.
    //La traigo acá para devolverla y que no se tenga que estar haciendo el llamado al store en todos lados.

    const status = authStore(state => state.status)
    const user = authStore(state => state.user)
    const ErrorMessage = authStore(state => state.ErrorMessage)
    const points = authStore(state => state.points)
    const mode = authStore(state => state.mode)
    const canjes = authStore(state => state.canjes)
    const setStatus = authStore(state => state.setStatus)
    //Estos son los metodos del authStore, tambien los traigo acá para no llamarlo en todos lados.

    const unlogue = authStore(state => state.unlogue)
    const setLogged = authStore(state => state.setLogged)

    //Estados propios del hook

    const [loading, setLoading] = useState(false)

    //Metodos propios del hook.

    const startLogInWithGoogle = async (): Promise<ApiResponse> => {
        try {
            const data = await signWithGoogle();
            if (data.ok) {
                let modo: 'Cliente' | 'Admin' = 'Cliente';
                if (data.data?.email === 'nachotizii988@gmail.com') {
                    modo = 'Admin';
                }
                setLogged(data.data!, modo)
                return {
                    ok: true
                }
            } else {
                unlogue('Ocurrio un error al intentar logearse, por favor intentelo denuevo más tarde. ')
            }
            unlogue('Ocurrio un error al intentar logearse, por favor intentelo denuevo más tarde. ')
            return {
                ok: false,

            }
        } catch (error) {
            console.log(error)
            unlogue('Ocurrio un error al intentar logearse, por favor intentelo denuevo más tarde. ')
            return {
                ok: false,
            }
        }
    }
    const startRegisterWithCredentials = async (email: string, displayName: string, password: string): Promise<ApiResponse> => {
        try {
            const resp = await RegisterWithEmailPassword(email, password, displayName);
            if (resp.ok) {
                let modo: 'Cliente' | 'Admin' = 'Cliente';
                if (resp.data?.email === 'nachotizii988@gmail.com') {
                    modo = 'Admin';
                }
                setLogged(resp.data!, modo)
                return {
                    ok: true
                }
            } else {
                return {
                    ok: false,
                    msg: 'Ha ocurrido un error intentando registrarse, por favor vuelva a intentarlo más tarde.'
                }
            }
        } catch (error) {
            console.log(error);
            return {
                ok: false,
                msg: 'Ha ocurrido un error intentando registrarse, por favor vuelva a intentarlo más tarde.'
            }
        }
    }

    const startLogInWithCredentials = async (email: string, password: string): Promise<ApiResponse> => {
        try {
            const data = await LogInWithEmailPassword(email, password);
            console.log(data)
            if (data.ok) {
                let modo: 'Cliente' | 'Admin' = 'Cliente';
                if (data.data?.email === 'nachotizii988@gmail.com') {
                    modo = 'Admin';
                }
                setLogged(data.data!, modo)
                return {
                    ok: true
                }
            } else {
                unlogue('Ocurrio un error al intentar logearse, por favor intentelo denuevo más tarde. ')
            }
            unlogue('Ocurrio un error al intentar logearse, por favor intentelo denuevo más tarde. ')
            return {
                ok: false,

            }
        } catch (error) {
            console.log(error)
            unlogue('Ocurrio un error al intentar logearse, por favor intentelo denuevo más tarde. ')
            return {
                ok: false,
            }
        }
    }

    const checkStatus = () => {

        onAuthStateChanged(FireBaseAuth, async (user) => {
            if (!user) {
                unlogue();
                redirect('/auth/login');
            }
            let modo: 'Cliente' | 'Admin' = 'Cliente';
            if (user.email === 'nachotizii988@gmail.com') {
                modo = 'Admin';
            }
            setLogged({
                uid: user.uid,
                displayName: user.displayName ?? 'No displayName',
                email: user.email!,
            }, modo)

        })

        return { status };

    }

    const startlogOut = async (): Promise<ApiResponse> => {
        try {
            await FireBaseAuth.signOut();
            unlogue();
            return {
                ok: true
            }
        } catch (error) {
            console.log(error);
            return {
                ok: false,
                msg: 'No se ha podido cerrar sesion, por favor, vuelva a intentarlo más tarde.'
            }
        }

    }

    return {
        status,
        user,
        ErrorMessage,
        points,
        mode,
        canjes,
        loading,
        //methods

        startRegisterWithCredentials,
        startLogInWithGoogle,
        startLogInWithCredentials,
        checkStatus,
        startlogOut
    }
}