"use client"
import { UseSession } from "@/hooks/useSession";
import { SideBarStore } from "@/store/ui/navbar/sideBar";
import { redirect } from "next/navigation";
import { ReactNode } from "react";


interface Props {
    text?: string,
    icon?: ReactNode,
    style?: string
    colorDeFondo?: string,
    url?: string,
    isSessionOut?: boolean;
}

import React from 'react'

export const NavbarButton = ({ text, icon, style, url, isSessionOut }: Props) => {
    const { startlogOut } = UseSession()
    const { setSideBarMode } = SideBarStore()
    const sessionOut = async () => {
        setSideBarMode(false);


        if (isSessionOut) {
            await startlogOut();
            redirect('/auth/login')
        }
    }
    const click = (link: string) => {
        setSideBarMode(false);

        if (!link) return;
        redirect(link)
    }
    return (
        <button onClick={url ? () => click(url) : () => sessionOut()}
            className={`btn rounded-xl text-xs items-center flex justify-center
                hover:text-white  transition-all
                ${style && style}`}
            style={{ height: ' 35px ' }}
        >
            <div className="flex self-start w-full h-full items-center ml-5">

                <span className="">{icon && icon}</span>
                <span className="ml-2">{text && text}</span>
            </div>
        </button>
    )
}
