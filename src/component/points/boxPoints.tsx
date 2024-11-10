"use client"
import { GraciasTotalesFetcher } from '@/config/gracias-totales-fetcher';
import { RedeemablePoints } from '@/core/uses-cases/points/redeemable-points';
import { Punto } from '@/infraestructure/interfaces/points-response';
import styles from '@/styles/generateCodes.module.css'

import { useEffect, useState } from "react";

export const BoxPoints = () => {
    const [qrMode, setqrMode] = useState(true)
    const [isAnimating, setIsAnimating] = useState(false);
    const [startAnimation, setstartAnimation] = useState(false)
    const [RedeemablePointsList, setRedeemablePointsList] = useState<Punto[]>([])
    useEffect(() => {
        const actionAsync = async () => {
            const resp = await RedeemablePoints(GraciasTotalesFetcher);
            //TODO: AGREGAR UN SPINNER DE CARGA.
            if (resp.ok) {
                setRedeemablePointsList(resp.data as Punto[]);
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


    return (
        <div className={`${styles.boxAdmin} animate__animated animate__fadeIn`}>
            <div className={`${styles.containerBoxAdmin} ${startAnimation && styles.collapsed}`} >
                {qrMode ? (
                    < >
                        <h1 style={{ marginBottom: '40px', marginTop: '20px', fontFamily: 'Rock Salt, cursive' }} className={`${styles.title}`}>Generar QR</h1>
                        <button className={`btn btn-outline-info ${styles.generateQRDos}`} onClick={() => { }}>
                            <i className='fas fa-qrcode'></i>
                            &nbsp;
                            <span>100 puntos</span>
                        </button>
                        <button className={`btn btn-outline-info ${styles.generateQRDos}`} onClick={() => { }}>
                            <i className='fas fa-qrcode'></i>
                            &nbsp;
                            <span>80 puntos</span>
                        </button>
                        <button className={`btn btn-outline-info ${styles.generateQRDos}`} onClick={() => { }}>
                            <i className='fas fa-qrcode'></i>
                            &nbsp;
                            <span>60 puntos</span>
                        </button>
                        <button className={`btn btn-outline-info ${styles.generateQRDos}`} onClick={() => { }}>
                            <i className='fas fa-qrcode'></i>
                            &nbsp;
                            <span>40 puntos</span>
                        </button>
                        <p style={{ textDecoration: 'underline', cursor: 'pointer', position: 'relative', bottom: '10px', marginTop: '20px' }} onClick={handleToggle}>Ver puntos disponibles</p>
                    </>
                ) : (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
                        <h1 style={{ marginBottom: '40px', position: 'absolute', top: '0px', marginTop: '20px', fontFamily: 'Rock Salt, cursive' }}>Ver puntos disponibles</h1>
                        {RedeemablePointsList.map((d, index) => (
                            <div className='w-full mt-5' key={index}>
                                <li className='text-start'>Cantidad: {d.cantidad},  Código:<span className='font-bold underline'> {d.codigo} </span></li>
                            </div>
                        ))}
                        <p style={{ textDecoration: 'underline', cursor: 'pointer', position: 'absolute', bottom: '0px' }} onClick={handleToggle}>Generar Qr</p>
                    </div>
                )}
            </div>
        </div>
    )
}
