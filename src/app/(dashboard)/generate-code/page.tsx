
import { BoxPoints } from "@/component/points/boxPoints";
import { VerificationModeComponent } from "@/component/verificationModeComponent";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Generador de Códigos - Crea Códigos para Usuarios | GraciasTotales',
    description: 'Genera códigos únicos para tus usuarios en GraciasTotales y facilita su acceso a premios y sorteos. Personaliza los códigos para ofrecer promociones exclusivas y fomentar la lealtad de tus clientes.'
};

export default function GenerateCodePage() {

    return (
        <VerificationModeComponent showAlert={true}>

            <BoxPoints />
        </VerificationModeComponent>
    );
};