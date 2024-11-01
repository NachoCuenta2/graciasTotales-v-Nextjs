import Link from "next/link";
import 'animate.css';
export default function () {


    return (
        <div className="w-[60%] min-h-full flex flex-col justify-center items-center transition-all animate__animated animate__fadeIn">
            <h3 className="absolute top-6 text-3xl">Crear cuenta</h3>
            <input
                type="text"
                placeholder="Nombre de usuario"
                className="text-lg w-full bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300 pl-2"
                style={{ height: '50px' }}
            />
            <input
                type="text"
                placeholder="Email@google.com"
                className="text-lg w-full  mt-3 bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300 pl-2"
                style={{ height: '50px' }}
            />
            <input
                type="password"
                placeholder="Contraseña"
                className="text-lg w-full mt-3 bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300 pl-2"
                style={{ height: '50px' }}
            />
            <div className="flex w-full justify-center gap-5 mt-5">


                <button
                    className="btn bg-white rounded-xl w-52" style={{ height: ' 35px ' }}
                >
                    Crear cuenta
                </button>
            </div>
            <div className="absolute right-0 bottom-0"><span>¿Ya tienes cuenta? </span><Link href='/auth/login'>
                Inicia aquí.
            </Link>
            </div>
        </div>
    )
}