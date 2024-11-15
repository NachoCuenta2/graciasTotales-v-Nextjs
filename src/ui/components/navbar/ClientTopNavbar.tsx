"use client"
import { NavbarButton } from './TopBarButton';
import { IoCartOutline, IoExitOutline, IoHeartOutline, IoHomeOutline, IoMenuOutline, IoPersonOutline } from 'react-icons/io5';
import styles from './topBar.module.css'
import { SideBarStore } from '@/store/ui/navbar/sideBar';
import { authStore } from '@/store/auth/auth-store';
import { BsQrCode } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { getCookie } from "cookies-next";

export const ClientTopNavbar = () => {
    const { IsOpenSideBar, setSideBarMode } = SideBarStore();
    const { user, mode, points } = authStore()
    const [pointsUser, setPointsUser] = useState(0);
    useEffect(() => {
        getCookiePoints()
    }, [user])

    const getCookiePoints = async () => {
        const pointsCookie = await getCookie('points');
        if (!pointsCookie) return;
        setPointsUser(+pointsCookie);
    }
    useEffect(() => {
        setPointsUser(points)
    }, [points])

    return (
        <nav className={`fixed top-0 left-0 right-0 px-5 flex flex-col  w-full bg-customGray h-[60px] justify-center z-10 ${styles.navbar}`}>

            <div className={`md:hidden self-start absolute ${IsOpenSideBar ? 'hidden' : 'block'}`} onClick={() => setSideBarMode(!IsOpenSideBar)}>
                <NavbarButton icon={<IoMenuOutline />} colorDeFondo='#333' url='#' />
            </div>
            <div className='hidden md:flex self-start absolute'>
                <NavbarButton text={`${mode === 'Admin' ? 'Admin' : `${user?.displayName}: ${pointsUser} Puntos`}`} style='w-[250px] mr-0 sm:mr-10' icon={<IoPersonOutline />} url='/' />
            </div>
            {
                mode === 'Cliente' &&
                <div className={`items-center absolute self-center ${styles.subtitle} hidden lg:block`}>
                    <h3>Gracias totales </h3>
                </div>
            }
            <div className={`hidden md:flex self-end h-[60px] justify-start items-center ${styles.GapDeBotonesDeDerecha}`}>
                <NavbarButton text='Inicio' icon={<IoHomeOutline />} style='w-[80px] md:w-[130px]' url='/' />
                {mode === 'Admin' &&
                    <>
                        <div className={`hidden md:flex self-end h-[60px] justify-start items-center ${styles.GapDeBotonesDeDerecha}`}>

                            <NavbarButton text='Generar codigo' icon={<BsQrCode />} style='w-[180px] md:w-[180px]' url='/generate-code' />
                        </div>
                        <div className={`hidden md:flex self-end h-[60px] justify-start items-center ${styles.GapDeBotonesDeDerecha}`}>

                            <NavbarButton text='Clientes' icon={<IoHeartOutline />} style='w-[80px] md:w-[130px]' url='/queryPage' />
                        </div>

                    </>

                }
                {mode === 'Cliente' &&
                    <NavbarButton text='Tus canjes' icon={<IoCartOutline />} style='w-[80px] md:w-[130px]' url='/prizes' />
                }
                <NavbarButton text='Salir' icon={<IoExitOutline />} style='w-[80px] md:w-[130px]' isSessionOut={true} />
            </div>
        </nav >

    )
}
