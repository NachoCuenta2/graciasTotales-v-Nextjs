"use client"

import { UseSession } from "@/hooks/useSession";
import { setCookie } from "cookies-next";
import { useEffect } from "react"

interface Props {
    children: React.ReactNode
}
export const VerificationComponent = ({ children }: Props) => {
    //Este componente esta solo dedicada a ver el status de la sesión y en base a eso redireccionar.
    //Tambien le agregue la insercion de la cookie 'uid' y 'puntos'
    const { checkStatus, status, user, points } = UseSession();

    useEffect(() => {
        verStatus()

    }, [status])

    const verStatus = () => {
        checkStatus();
    }
    if (status === 'Loading') {
        return <p>Cargando...</p>
    } else {
        if (status === 'Logged') {
            setCookie('uid', user?.uid) // cookie 'uid'
            if (points) {
                setCookie('points', points.toString(), { path: '/' });
            }
        }
    }


    return (
        <>
            {status === 'Logged' &&
                children
            }
        </>
    )
}
