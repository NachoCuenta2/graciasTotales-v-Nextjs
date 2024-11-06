
import { BoxPoints } from "@/component/points/boxPoints";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Codes generation',
    description: 'Pagina de generacion de codigos canjeables por puntos'
};

export default function () {

    return (
        <BoxPoints />
    );
};