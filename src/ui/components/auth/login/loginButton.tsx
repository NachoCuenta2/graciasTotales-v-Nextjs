"use client"

import { UseSession } from "@/hooks/useSession"
import { useUiAuth } from "@/hooks/use-ui-auth";
import { redirect } from "next/navigation";


interface Props {
    email: string,
    password: string
}
export const LoginButton = ({ email, password }: Props) => {

    const { startLogInWithCredentials } = UseSession();
    const { setIsActiveMessage, setMessage } = useUiAuth();

    const OnLogIn = async () => {
        const resp = await startLogInWithCredentials(email, password);
        if (resp.ok) {
            setIsActiveMessage(true);
            redirect('/')
        } else {
            setIsActiveMessage(true);
            setMessage('Ocurrio un error, por favor, vuelva a intentarlo más tarde')
        }
    }
    return (
        <button
            className="btn bg-white text-background rounded-xl w-52" style={{ height: ' 35px ' }}
            onClick={OnLogIn}
        >
            <span className="text-xs">Iniciar</span>
        </button>
    )
}
