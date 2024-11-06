"use client"

import { UseForm } from "@/hooks/use-form"
import { GoogleButton } from "./googleButton"
import { LoginButton } from "./loginButton"

const formdata = {
    Email: '',
    Contraseña: '',
    displayName: ''
}
export const LoginForm = () => {

    const { OnInputchange, Email, Contraseña } = UseForm(formdata)


    return (
        <>
            <input
                type="text"
                placeholder="Email@google.com"
                className="text-xs sm:text-lg w-full bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300 pl-2"
                style={{ height: '50px' }}
                name='Email'
                value={Email}
                onChange={OnInputchange}
            />
            <input
                type="password"
                placeholder="Contraseña"
                className="text-xs sm:text-lg w-full bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300 pl-2"
                style={{ height: '50px', marginTop: '20px' }}
                name='Contraseña'
                value={Contraseña}
                onChange={OnInputchange}
            />
            <div className="flex w-full justify-center gap-5 mt-5">

                <GoogleButton />
                <LoginButton email={Email} password={Contraseña} />
            </div>
        </>
    )
}
