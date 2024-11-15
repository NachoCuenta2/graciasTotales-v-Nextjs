import Link from "next/link";
import 'animate.css';
import { RegisterForm } from "@/ui/components/auth/register/registerForm";
export default function RegisterPage() {


    return (
        <div className="w-[60%] min-h-full flex flex-col justify-center items-center transition-all animate__animated animate__fadeIn">
            <h3 className="absolute top-6 text-3xl">Crear cuenta</h3>
            <RegisterForm />


            <div className="absolute right-0 bottom-0"><span>¿Ya tienes cuenta? </span><Link href='/auth/login'>
                Inicia aquí.
            </Link>
            </div>
        </div>
    )
}