"use client"
import { SideBarStore } from '@/store/ui/navbar/sideBar';
import styles from './sideBar.module.css';
import { useEffect, useRef } from 'react';
import { NavbarButton } from './TopBarButton';
import { IoCartOutline, IoExitOutline, IoHeartOutline, IoHomeOutline, IoMenuOutline, IoPersonOutline } from 'react-icons/io5';
import { authStore } from '@/store/auth/auth-store';
import { BsQrCode } from 'react-icons/bs';
export const ClienSidebar = () => {
    const { IsOpenSideBar, setSideBarMode } = SideBarStore()
    const { user, mode } = authStore()
    const navRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setSideBarMode(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setSideBarMode]);

    return (


        <nav
            ref={navRef}
            className={`fixed top-0 px-5 flex flex-col
         bg-customGray min-h-screen justify-start z-20 gap-y-5 transition-all ${styles.sideBar} ${IsOpenSideBar && styles.sideBarOpen}`}
        >

            <div className={`items-center self-center mb-[30px] mt-5 flex w-full justify-start`}>
                <div className='left-[20px]' onClick={() => setSideBarMode(false)}>
                    <NavbarButton icon={<IoMenuOutline />} colorDeFondo='#333' url='#' />
                </div>
                <h3>Gracias totales</h3>
            </div>
            <div className='w-full relative '>
                <NavbarButton text={`${mode === 'Admin' ? 'Admin' : `${user?.displayName}: 220 Puntos`}`} style='w-full mr-0' icon={<IoPersonOutline />} url='/' />
            </div>
            <div className='w-full relative '>
                <NavbarButton text='Inicio' style='w-full mr-0  ' icon={<IoHomeOutline />} url='/' />
            </div>
            {
                mode === 'Cliente' &&
                <div className='w-full relative '>
                    <NavbarButton text='Tus canjes' style='w-full mr-0' icon={<IoCartOutline />} url='/prizes' />
                </div>
            }
            {mode === 'Admin' &&
                <>
                    <div className='w-full relative '>
                        <NavbarButton text='Generar codigo' icon={<BsQrCode />} style='w-full mr-0' url='/generate-code' />
                    </div>
                    <div className='w-full relative '>
                        <NavbarButton text='Clientes' icon={<IoHeartOutline />} style='w-full mr-0' url='/queryPage' />
                    </div>

                </>

            }
            <div className='w-full relative '>
                <NavbarButton text='Salir' style='w-full mr-0' icon={<IoExitOutline />} isSessionOut={true} />
            </div>



        </nav >



    )
}
