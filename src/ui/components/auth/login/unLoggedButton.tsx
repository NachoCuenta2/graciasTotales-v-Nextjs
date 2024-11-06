"use client"

import { UseSession } from "@/hooks/useSession"
import { redirect } from "next/navigation"

export const UnLoggedButton = () => {
    const { startlogOut, user } = UseSession()
    const logOut = async () => {
        const resp = await startlogOut();
        if (resp.ok) {
            redirect('/auth/login')
        } else {
            console.log(resp.msg)
        }
    }
    return (

        <button
            className="btn bg-white rounded-xl w-40 sm:w-52" style={{ height: ' 35px ' }}
            onClick={logOut}
        >
            <span className="text-xs">Cerrar sesion+ {user?.displayName}</span>
        </button>)
}
