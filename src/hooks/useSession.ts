import { GraciasTotalesFetcher } from "@/config/gracias-totales-fetcher";
import { GetPointsUserByuid } from "@/core/uses-cases/points/get-points-by-uid";
import { FireBaseAuth } from "@/firebase/config";
import { LogInWithEmailPassword, RegisterWithEmailPassword, signWithGoogle } from "@/firebase/providers";
import { ApiResponse } from "@/infraestructure/interfaces/api-response"
import { authStore } from "@/store/auth/auth-store";
import { onAuthStateChanged } from "firebase/auth";
import { redirect } from "next/navigation";
import { useState } from "react";
import { UseUser } from "./useUser";
import { AddUserToFirebase } from "@/core/uses-cases/user/add-user-to-firebase";

export const UseSession = () => {



    const { setLogged, status, user,
        ErrorMessage, points, mode, canjes, unlogue } = authStore()
    const { GetUserPoints } = UseUser()


    //Estados propios del hook

    const [loading] = useState(false)

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

    const checkStatus = async () => {
        onAuthStateChanged(FireBaseAuth, async (user) => {
            if (!user) {
                unlogue();
                redirect('/auth/login');
            }
            GetUserPoints(user.uid)
            let modo: 'Cliente' | 'Admin' = 'Cliente';
            if (user.email === 'nachotizii988@gmail.com') {
                modo = 'Admin';
            }
            setLogged({
                uid: user.uid,
                displayName: user.displayName ?? 'No displayName',
                email: user.email!,
            }, modo)
            AddUserToFirebase(user.uid, user.displayName ?? 'No displayName');
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

    const getUserPoints = async (uid: string): Promise<ApiResponse> => {
        const resp = await GetPointsUserByuid(uid, GraciasTotalesFetcher);
        return resp;
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
        startlogOut,
        getUserPoints

    }
}