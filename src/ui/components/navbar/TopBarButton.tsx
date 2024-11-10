"use client"
import { UseSession } from "@/hooks/useSession";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface Props {
    text?: string,
    icon?: ReactNode,
    style?: string
    colorDeFondo?: string,
    url: string,
    isSessionOut?: boolean;
}

import React from 'react'

export const NavbarButton = ({ text, icon, style, colorDeFondo, url, isSessionOut }: Props) => {
    const { startlogOut } = UseSession()
    const sessionOut = async () => {
        if (isSessionOut) {
            await startlogOut();
            redirect('auth/login')
        }
    }
    return (
        <button onClick={sessionOut} className="w-full">
            <Link href={url}
                className={`btn hover:bg-black rounded-xl text-xs items-center flex justify-center
                hover:text-white  transition-all
                ${style && style}`}
                style={{ height: ' 35px ' }}
            >
                <div className="flex self-start w-full h-full items-center ml-5">

                    <span className="">{icon && icon}</span>
                    <span className="ml-5">{text && text}</span>
                </div>
            </Link>
        </button>
    )
}
