import Link from "next/link";
import 'animate.css';
import { Message } from "@/ui/components/auth/login/message";
import { LoginForm } from "@/ui/components/auth/login/loginForm";
export default function () {

    return (
        <div className="w-[90%] xxs:w-[80%] sm:w-[60%] min-h-full flex flex-col justify-center items-center transition-all animate__animated animate__fadeIn">

            <h3 className="absolute top-6 text-3xl ">Iniciar</h3>
            <Message />
            <LoginForm />
            <div className="absolute right-0 bottom-0"><span className="text-xs sm:text-md">¿Aún no tienes una cuenta? </span><Link href='/auth/register' className="text-xs sm:text-md">
                Registrate aquí.
            </Link>
            </div>
        </div>
    )
}