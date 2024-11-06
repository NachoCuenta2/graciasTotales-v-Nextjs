"use client"

import { UseSession } from "@/hooks/useSession";
import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react"

interface Props {
    children: React.ReactNode
}
export const VerificationComponent = ({ children }: Props) => {

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

    return (
        <>
            {status === 'Logged' &&
                children
            }
        </>
    )
}
