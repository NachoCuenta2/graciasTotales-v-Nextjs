"use client"
import { useDebouncer } from '@/helper/debouncer'
import styles from '@/styles/queryPage.module.css'
import { useEffect, useState } from 'react';
import 'animate.css';
import { UseCanjes } from '@/hooks/useCanjes';
import { UseUser } from '@/hooks/useUser';
import { CanjeProductInQueryBox } from './canjeProductInQueryBox';




export const QueryBox = () => {
    const { GetUserPoints, getUserList, userList, points } = UseUser();
    useEffect(() => {
        const init = async () => {
            await getUserList()
        }
        init()
    }, [])

    const { onGetCanjesByUid, userCanjes } = UseCanjes();

    //Controla la apertura/cierre de la caja negra
    const [open, setOpen] = useState(false)
    //Controla el texto de busqueda
    const [text, setText] = useState<string>('');
    //Texto debouncer, este se aplica al esperar un segundo sin escribir
    const [debouncerValue, setDebouncerValue] = useState(text)
    //mantiene el usuario seleccionado
    const [isUserSelected, setIsUserSelected] = useState(false)
    //los resultados de la busqueda de debouncer
    const [resultados, setResultados] = useState<{ displayName: string, uid: string }[]>([]);

    const [user, setUser] = useState({
        displayName: '',
        uid: '',
        Points: '',
        Sort: false,
        awards: []
    })

    useEffect(() => {
        const res = userList.map((u) => u).filter((u) =>
            u.displayName.toLowerCase().includes(debouncerValue.toLowerCase())
        );
        setResultados(res.slice(0, 5));
    }, [debouncerValue])

    useDebouncer({ setDebouncerValue, text })

    const selectedUser = async (displayName: string, uid: string) => {
        setUser((prev) => ({ ...prev, displayName: displayName, uid: uid }));
        let resp = await onGetCanjesByUid(uid);
        if (!resp.ok) {
            console.log(resp.msg)
        } //TODO: agregar algun mensaje de error. 
        resp = await GetUserPoints(uid);
        if (!resp.ok) {
            console.log(resp.msg)
        } //TODO: agregar algun mensaje de error.

        setOpen(true);
        setIsUserSelected(true);
    }

    //Restaura la pagina a su estado original.
    const newSearch = () => {
        setOpen(false);
        setText('')
        setIsUserSelected(false);
    }
    // const resp = await startAlterCanjeWithId(id);

    return (
        <div className={`flex flex-col text-black `}>
            <div className={`${styles.queryBox} ${open && styles.selected} overflow-y-auto rounded-md flex justify-start flex-col items-start transition-all animate__animated animate__fadeIn`}
            >
                {!isUserSelected && <input
                    type="text"
                    placeholder="Busqueda de usuario"
                    className={`text-xs  ${!isUserSelected ? 'absolute' : 'relative'} ${styles.stylesForWidth} sm:text-lg bg-customGray border border-white rounded text-white placeholder-gray-300 pl-2 transition-all animate__animated animate__fadeIn animate__delay-1s`}
                    style={{ height: '50px' }}
                    name='text'
                    value={text}
                    autoComplete='off'
                    onChange={(e) => setText(e.target.value)}
                />}

                {
                    isUserSelected &&
                    <div className="w-full h-full flex items-center flex-col transition-all animate__animated animate__fadeIn animate__delay-1s">
                        <button className='text-xs self-start' onClick={newSearch}>Realizar otra busqueda</button>
                        <h3 className='mt-3'>{user.displayName}</h3>
                        <div className='flex flex-col w-full'>
                            <div className={`${styles.infoContainer} mt-5 break-words`}>
                                <p>Identificador</p>
                                <p>{user.uid}</p>
                            </div>
                            <div className={`${styles.infoContainer} `}>

                                <p>Puntos del usuario:</p>
                                <p>{points}</p>

                            </div>
                            <div className={`${styles.infoContainer}`}>

                                <p>Participa en el sorteo: </p>
                                <p>No</p>
                            </div>
                            <div className={`${styles.infoContainer} flex-col overflow-auto`}>

                                <p>Canjes: </p>
                                <ol className='pl-1 flex flex-col'>
                                    {userCanjes.map((q) =>
                                        <CanjeProductInQueryBox producto={q} key={q.id} />
                                    )}

                                </ol>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {
                (!isUserSelected && text.length > 0) &&
                <div className='flex flex-col absolute mt-[50px]'>
                    {resultados && resultados.map((r) => <button key={r.uid} onClick={() => selectedUser(r.displayName, r.uid)}>{r.displayName}</button>)}
                </div>
            }
        </div>
    )
}
