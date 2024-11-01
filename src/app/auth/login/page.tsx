import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import 'animate.css';
export default function () {


    return (

        <div className="w-[90%] xxs:w-[80%] sm:w-[60%] min-h-full flex flex-col justify-center items-center transition-all animate__animated animate__fadeIn">
            <h3 className="absolute top-6 text-3xl">Iniciar</h3>
            <input
                type="text"
                placeholder="Email@google.com"
                className="text-xs sm:text-lg w-full bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300 pl-2"
                style={{ height: '50px' }}
            />
            <input
                type="password"
                placeholder="Contraseña"
                className="text-xs sm:text-lg w-full bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300 pl-2"
                style={{ height: '50px', marginTop: '20px' }}
            />
            <div className="flex w-full justify-center gap-2 sm:gap-5 mt-5">

                <button
                    className="btn bg-white rounded-xl w-52 items-center flex justify-center" style={{ height: ' 35px ' }}
                >
                    <FaGoogle className="mr-2 sm:mr-3 text-xs sm:text-lg" />
                    <span className="text-xs">Google</span>
                </button>
                <button
                    className="btn bg-white rounded-xl w-40 sm:w-52" style={{ height: ' 35px ' }}
                >
                    <span className="text-xs">Iniciar</span>
                </button>
            </div>
            <div className="absolute right-0 bottom-0"><span className="text-xs sm:text-md">¿Aún no tienes una cuenta? </span><Link href='/auth/register' className="text-xs sm:text-md">
                Registrate aquí.
            </Link>
            </div>
        </div>
    )
}