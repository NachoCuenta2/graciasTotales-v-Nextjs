
import { BoxPoints } from "@/component/points/boxPoints";
import { VerificationModeComponent } from "@/component/verificationModeComponent";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Codes generation',
    description: 'Pagina de generacion de codigos canjeables por puntos'
};

export default function GenerateCodePage() {

    return (
        <VerificationModeComponent showAlert={true}>

            <BoxPoints />
        </VerificationModeComponent>
    );
};