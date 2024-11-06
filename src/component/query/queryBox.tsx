"use client"
import styles from '@/styles/queryPage.module.css'
import { useEffect, useState } from 'react'

export const QueryBox = () => {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState<string>('');
    const usuarios = [
        'Usuario 1',
        'Usuario 2',
        'Usuario 3',
        'Usuario 4',
        'Usuario 5',
        'Cliente 1',
        'Cliente 2',
        'Cliente 3',
        'Cliente 4',
        'Cliente 5',
        'Comprador 1',
        'Comprador 2',
        'Comprador 3',
        'Comprador 4',
        'Comprador 5',
    ]
    const [debouncerValue, setDebouncerValue] = useState(text)
    const [resultados, setResultados] = useState<string[]>([]);
    useEffect(() => {
        const res = usuarios.filter((u) =>
            u.toLowerCase().includes(debouncerValue.toLowerCase())
        );
        setResultados(res);
    }, [debouncerValue])


    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebouncerValue(text)
        }, 1000);
        return () => {
            clearTimeout(timeOut)
        }
    }, [text])
    return (
        <div className='flex flex-col'>
            <div className={`${styles.queryBox} ${open && styles.selected} rounded-md flex justify-center flex-row`}>
                <input
                    type="text"
                    placeholder="Busqueda de usuario"
                    className="text-xs sm:text-lg w-full bg-customGray border border-white rounded text-white placeholder-gray-300 pl-2"
                    style={{ height: '50px' }}
                    name='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='flex flex-col'>
                <p>{debouncerValue}</p>
                <button onClick={() => setOpen(!open)}>Abrir</button>
                {resultados && resultados.map((r) => <p>{r}</p>)}
            </div>
        </div>
    )
}
