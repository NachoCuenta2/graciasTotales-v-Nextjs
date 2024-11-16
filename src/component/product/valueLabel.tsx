'use client'

import { GetProductValueBySlug } from "@/core/uses-cases/products/get-product-value";
import { useEffect, useState } from "react";

interface Props {
    slug: string;
}
export const ValueLabel = ({ slug }: Props) => {
    const [valor, setValor] = useState(0);
    useEffect(() => {
        getValue()
    }, [])
    const getValue = async () => {

        const resp = await GetProductValueBySlug(slug);
        if (resp.ok && resp.data) {
            setValor(resp.data);
        }
    }
    return (
        <p>Valor {valor} puntos </p>
    )
}
