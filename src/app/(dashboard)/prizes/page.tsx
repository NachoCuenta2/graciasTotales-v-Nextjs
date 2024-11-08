import { PrizesEntities } from "@/core/entities/prizes-entities";
import { initialData } from "@/seed/seed";
import { PrizesSlider } from "@/ui/components/prizes/prizes-slider";
import { Metadata } from "next";



export const metadata: Metadata = {
    title: 'Client prices Title',
    description: ' Client pricesDescription'
};
const data = initialData.products;
const env: PrizesEntities[] = [
    {
        Imagenes: [
            '1740176-00-A_0_2000.jpg',
            '1740176-00-A_1.jpg',
        ],
        descripcion: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
        titulo: " Men’s Chill Crew Neck Sweatshirt",
        reclamado: true,
        id: 'abc123'
    },
    {
        Imagenes: [
            '1740250-00-A_0_2000.jpg',
            '1740250-00-A_1.jpg'
        ],
        descripcion: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
        titulo: "Men's Raven Lightweight Zip Up Bomber Jacket",
        reclamado: false,
        id: 'abc1234'
    },

]
export default function () {
    return (
        <PrizesSlider product={env} />
    );
};