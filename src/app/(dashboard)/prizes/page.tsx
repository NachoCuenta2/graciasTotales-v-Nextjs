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
// const env: PrizesEntities[] = [
//     {
//         Imagenes: [
//             '1740176-00-A_0_2000.jpg',
//             '1740176-00-A_1.jpg',
//         ],
//         descripcion: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
//         titulo: " Men’s Chill Crew Neck Sweatshirt",
//         reclamado: true,
//         id: 'abc123'
//     },
//     {
//         Imagenes: [
//             '1740250-00-A_0_2000.jpg',
//             '1740250-00-A_1.jpg'
//         ],
//         descripcion: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
//         titulo: "Men's Raven Lightweight Zip Up Bomber Jacket",
//         reclamado: false,
//         id: 'abc1234'
//     },

// ]

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
    console.log(productosReclamados)

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