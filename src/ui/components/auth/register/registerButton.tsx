"use client"

import { UseSession } from "@/hooks/useSession"
import { useUiAuth } from "@/hooks/use-ui-auth";
import { redirect } from "next/navigation";


interface Props {
    email: string,
    displayName: string,
    password: string
}
export const RegisterButton = ({ email, displayName, password }: Props) => {

    const { startRegisterWithCredentials } = UseSession();
    const { setIsActiveMessage, setMessage } = useUiAuth();
    const OnRegister = async () => {
        const resp = await startRegisterWithCredentials(email, displayName, password);
        if (resp.ok) {
            setIsActiveMessage(true);
            redirect('/dashboard/home')
        } else {
            setIsActiveMessage(true);
            setMessage('Ocurrio un error, por favor, vuelva a intentarlo más tarde')
        }
    }
    return (
        <button
            className="btn bg-white rounded-xl w-52" style={{ height: ' 35px ' }}
            onClick={OnRegister}
        >
            <span className="text-xs">Crear cuenta</span>
        </button>
    )
}
