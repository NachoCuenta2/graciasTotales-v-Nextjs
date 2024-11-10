import { Dispatch, SetStateAction, useEffect } from "react";


interface Props {
    setDebouncerValue: Dispatch<SetStateAction<string>>,
    text: string,
}
export const useDebouncer = ({ setDebouncerValue, text }: Props) => {
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebouncerValue(text)
        }, 1000);
        return () => {
            clearTimeout(timeOut)
        }
    }, [text])
}