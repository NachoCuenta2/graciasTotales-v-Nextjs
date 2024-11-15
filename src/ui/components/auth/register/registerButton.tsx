"use client"

import { UseSession } from "@/hooks/useSession"
import { useUiAuth } from "@/hooks/use-ui-auth";
import { redirect } from "next/navigation";
import { TranslateErrorMessage } from "@/helper/translateErrorMessage";


interface Props {
    email: string,
    displayName: string,
    password: string
}
export const RegisterButton = ({ email, displayName, password }: Props) => {

    const { startRegisterWithCredentials } = UseSession();
    const { setIsActiveMessage, setMessage } = useUiAuth();
    const OnRegister = async () => {
        if (displayName === '') {
            setIsActiveMessage(true);
            setMessage('Para continuar, por favor, ingrese un nombre de usuario');
            return;
        }
        const resp = await startRegisterWithCredentials(email, displayName, password);
        const msg = TranslateErrorMessage(resp.msg as string)
        if (resp.ok) {
            setIsActiveMessage(false);
            redirect('/')
        } else {
            setIsActiveMessage(true);

            setMessage(msg ? msg : 'Ocurrio un error, por favor, vuelva a intentarlo más tarde')
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
