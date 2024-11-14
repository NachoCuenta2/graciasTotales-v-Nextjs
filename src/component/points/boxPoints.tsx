"use client"
import { GraciasTotalesFetcher } from '@/config/gracias-totales-fetcher';
import { RedeemablePoints } from '@/core/uses-cases/points/redeemable-points';
import { Puntos } from '@/infraestructure/interfaces/points-response';
import styles from '@/styles/generateCodes.module.css'

import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { GenerarRedeemabledPoints } from '../swal/swalComponents';

export const BoxPoints = () => {
    const [qrMode, setqrMode] = useState(true)
    const [isAnimating, setIsAnimating] = useState(false);
    const [startAnimation, setstartAnimation] = useState(false)
    const [RedeemablePointsList, setRedeemablePointsList] = useState<Puntos[]>([])
    useEffect(() => {
        const actionAsync = async () => {
            const resp = await RedeemablePoints(GraciasTotalesFetcher);
            //TODO: AGREGAR UN SPINNER DE CARGA.
            if (resp.ok) {
                setRedeemablePointsList(resp.data as Puntos[]);
            }
        }
        actionAsync();
    }, [isAnimating])


    const handleToggle = () => {
        if (isAnimating) return;
        setstartAnimation(true);
        setIsAnimating(true);
        setTimeout(() => {
            setqrMode(!qrMode);
            setstartAnimation(false)
            setTimeout(() => {
                setIsAnimating(false);
            }, 100);
        }, 700);
    };

    const Confirm = async (quantity: number) => {
        const resp = await GenerarRedeemabledPoints({ title: 'Generar codigo', points: quantity });
        console.log(resp)
        if (resp.ok === true) {
            Swal.fire({
                title: "¡Genial!",
                text: `Los ${quantity} puntos ya están disponibles para agregarse, el código es: '${resp.msg}'`,
                icon: "success"
            });
        }
    };
    const PointsAvailable = [
        100, 80, 60, 40
    ]
    return (
        <div className={`${styles.boxAdmin} animate__animated animate__fadeIn`}>
            <div className={`${styles.containerBoxAdmin} ${startAnimation && styles.collapsed}`} >
                {qrMode ? (
                    < >
                        <h3 style={{ marginBottom: '40px', marginTop: '20px', fontFamily: 'Rock Salt, cursive' }} className={`${styles.title} text-black`}>Generar QR</h3>
                        {PointsAvailable.map((p) =>

                            <button key={p} className={`btn btn-outline-info ${styles.generateQRDos}`}
                                onClick={() => Confirm(p)}>
                                <i className='fas fa-qrcode'></i>
                                &nbsp;
                                <span >{p} puntos</span>
                            </button>
                        )}

                        <p style={{ textDecoration: 'underline', cursor: 'pointer', position: 'relative', bottom: '10px', marginTop: '20px' }} className='text-black' onClick={handleToggle}>Ver puntos disponibles</p>
                    </>
                ) : (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
                        <h1 style={{ marginBottom: '40px', position: 'absolute', top: '0px', marginTop: '20px', fontFamily: 'Rock Salt, cursive' }} className='text-black'>Ver puntos disponibles</h1>
                        {RedeemablePointsList.map((d, index) => (
                            <div className='w-full mt-5 ' key={index}>
                                <li className='text-start text-black'>Cantidad: {d.cantidad},  Código:<span className='font-bold underline'> {d.codigo} </span></li>
                            </div>
                        ))}
                        <p style={{ textDecoration: 'underline', cursor: 'pointer', position: 'absolute', bottom: '0px' }} className='text-black' onClick={handleToggle}>Generar Qr</p>
                    </div>
                )}
            </div>
        </div>
    )
}
