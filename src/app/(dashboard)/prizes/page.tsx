import { GraciasTotalesFetcher } from "@/config/gracias-totales-fetcher";
import { PrizesEntities } from "@/core/entities/prizes-entities";
import { ProductsEntities } from "@/core/entities/products-entites";
import { GetCanjesByUid } from "@/core/uses-cases/canjes/get-canjes-by-uid";
import { getProductByTitle } from "@/core/uses-cases/products/loadByTitle";
import { PrizesSlider } from "@/ui/components/prizes/";
import { Metadata } from "next";
import { cookies } from "next/headers";



export const metadata: Metadata = {
    title: 'Client prices Title',
    description: ' Client pricesDescription'
};

export default async function PrizesSliderPage() {
    const cookieStore = cookies()
    const uid = (await cookieStore).get('uid')?.value.toString();
    if (!uid) return;
    const getCanjes = await GetCanjesByUid(uid, GraciasTotalesFetcher);
    console.log(getCanjes)
    // Utiliza Promise.all y extrae el valor de `data` dentro del `map`
    const productosReclamados: (ProductsEntities | null)[] = await Promise.all(
        getCanjes.data!.map(async (p) => {
            const response = await getProductByTitle(p.titulo);
            return response.data ?? null; // Devuelve `null` si `data` es `undefined`
        })
    );


    // Filtra productosReclamados para asegurarte de que no haya `null` en el array
    const productosValidos = productosReclamados.filter((d): d is ProductsEntities => d !== null);

    // Mapea para crear el array de `PrizesEntities` solo con los productos válidos
    const envd: PrizesEntities[] = productosValidos.map((d, index) => ({
        Imagenes: d.Imagenes,
        descripcion: d.descripcion,
        titulo: d.titulo,
        reclamado: getCanjes.data![index].reclamado,
        id: getCanjes.data![index].id
    }));

    // Aquí, `envd` ya es un array de PrizesEntities, listo para ser utilizado

    return (
        <div className="rounded-xl">

            <PrizesSlider product={envd} />
        </div>
    );
};