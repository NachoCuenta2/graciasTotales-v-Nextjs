"use client"

import { UseForm } from "@/hooks/use-form"
import { RegisterButton } from "./registerButton"
import { UseSession } from "@/hooks/useSession";


const formdata = {
    Email: '',
    Contraseña: '',
    displayName: '',
};
export const RegisterForm = () => {

    const { OnInputchange, Email, Contraseña, displayName } = UseForm(formdata);

    return (
        <>
            <input
                type="text"
                placeholder="Nombre de usuario"
                className="text-lg w-full bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300 pl-2"
                style={{ height: '50px' }}
                name="displayName"
                value={displayName}
                onChange={OnInputchange}
            />
            <input
                type="text"
                placeholder="Email@google.com"
                className="text-lg w-full  mt-3 bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300 pl-2"
                style={{ height: '50px' }}
                name="Email"
                value={Email}
                onChange={OnInputchange}
            />
            <input
                type="password"
                placeholder="Contraseña"
                className="text-lg w-full mt-3 bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300 pl-2"
                style={{ height: '50px' }}
                name="Contraseña"
                value={Contraseña}
                onChange={OnInputchange}
            />
            <div className="flex w-full justify-center gap-5 mt-5">
                <RegisterButton email={Email} displayName={displayName} password={Contraseña} />
            </div>
        </>
    )
}