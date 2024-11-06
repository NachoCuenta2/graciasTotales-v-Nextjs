"use client"

import { useUiAuth } from "@/hooks/use-ui-auth";
import { UseSession } from "@/hooks/useSession";
import { FaGoogle } from "react-icons/fa"

export const GoogleButton = () => {

    const { startLogInWithGoogle } = UseSession();
    const { setIsActiveMessage, setMessage } = useUiAuth()
    const onStartLogInWithGoogle = async () => {
        const resp = await startLogInWithGoogle()
        if (resp.ok) {
            setIsActiveMessage(true)
            setMessage('Logeado con exito')
        } else {
            setIsActiveMessage(true)
            setMessage('Ha ocurrido un error, por favor vuelve a intentarlo más tarde.')
        }
    }

    return (
        <button
            className="btn bg-white rounded-xl w-52 items-center flex justify-center text-background" style={{ height: ' 35px ' }}
            onClick={onStartLogInWithGoogle}
        >
            <FaGoogle className="mr-2 sm:mr-3 text-xs sm:text-lg" />
            <span className="text-xs">Google</span>
        </button>
    )
}
