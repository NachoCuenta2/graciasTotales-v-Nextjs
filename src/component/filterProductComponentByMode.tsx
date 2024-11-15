"use client"

import { ProductsEntities } from "@/core/entities/products-entites"
import { authStore } from "@/store/auth/auth-store"
import { useEffect, useState } from "react"
import { ProductItem } from "./product/product-item"


interface Props {
    products: ProductsEntities[]
}
export const FilterProductComponentByMode = ({ products }: Props) => {
    const [productos, setProductos] = useState<ProductsEntities[]>(products)

    const { mode } = authStore();
    useEffect(() => {
        if (mode === 'Cliente') {
            const listaFiltrada = products.filter((p) => { return p.disponible === true })
            setProductos(listaFiltrada);
        } else {
            const listaOrdenada = products.slice().sort((a, b) => {
                return a.disponible === b.disponible ? 0 : a.disponible ? -1 : 1;
            });
            setProductos(listaOrdenada);
        }
    }, [products, mode])


    return (
        <>
            {productos.map((p) => (
                <div key={p.Imagenes[0]}>
                    <ProductItem product={p} />
                </div>

            ))
            }
        </>
    )
}
