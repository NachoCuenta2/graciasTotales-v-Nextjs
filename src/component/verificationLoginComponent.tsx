"use client"

import { UseSession } from "@/hooks/useSession";
import { redirect } from "next/navigation";
import { useEffect } from "react"

interface Props {
    children: React.ReactNode
}
export const VerificationLoginComponent = ({ children }: Props) => {

    //Este componente esta solo dedicada a ver el status de la sesión y en base a eso redireccionar.

    const { checkStatus, status } = UseSession();
    useEffect(() => {
        verStatus()
    }, [status])

    const verStatus = () => {
        checkStatus();
    }
    if (status === 'Loading') {
        return <p>Cargando...</p>
    }
    if (status === 'Logged') {
        redirect('/')
    }

    return (
        <>
            {status === 'Unlogged' &&
                children
            }
        </>
    )
}
