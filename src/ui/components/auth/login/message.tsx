"use client"
import { useUiAuth } from '@/hooks/use-ui-auth'
import { useEffect } from 'react';


export const Message = () => {
    const { message, isActiveMessage, setIsActiveMessage } = useUiAuth();



    useEffect(() => {
        if (isActiveMessage) {
            setTimeout(() => {
                setIsActiveMessage(false)
            }, 2500);
        }
    }, [isActiveMessage])

    return (
        <div style={{ display: `${isActiveMessage ? 'flex' : 'none'}` }}>
            <p>{message}</p>
        </div>
    )
}
