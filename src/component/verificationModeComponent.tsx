"use client"

import { UseSession } from "@/hooks/useSession";

interface Props {
    children: React.ReactNode,
    showAlert?: boolean
}
export const VerificationModeComponent = ({ children, showAlert = false }: Props) => {

    //Este componente esta solo dedicada a ver el modo (Cliente | Admin) de la sesión y en base a eso redireccionar.
    const { mode } = UseSession();


    return (
        <>
            {
                mode === 'Admin' ?
                    children : <div className={`w-full min-h-screen flex justify-center items-center bg-gray-200 ${showAlert ? 'block' : 'hidden'}`}>

                        <h1>No posee permisos para acceder a este areá</h1>
                    </div>
            }
        </>
    )
}
