import { QueryBox } from '@/component/query/queryBox';
import { VerificationModeComponent } from '@/component/verificationModeComponent';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Panel de Consultas - Administrador de Usuarios y Datos | GraciasTotales',
    description: 'Accede al panel de consultas para obtener información detallada sobre los usuarios, sus puntos y premios canjeados. Facilita la administración de los datos y toma decisiones informadas para mejorar la experiencia de tus clientes.'
};

export default async function template() {

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <VerificationModeComponent showAlert={true}>

                <QueryBox />
            </VerificationModeComponent>
        </div>
    );
};