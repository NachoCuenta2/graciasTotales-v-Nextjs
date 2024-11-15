
import { VerificationComponent } from "@/component/verificationComponent";
import { ClienSidebar } from "@/ui/components/navbar/ClientSidebar";
import { ClientTopNavbar } from "@/ui/components/navbar/ClientTopNavbar";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Dashboard - Administración de Puntos, Premios y Sorteos | GraciasTotales",
    description: "Accede al panel de administración de GraciasTotales y gestiona los puntos, premios canjeados y sorteos de manera eficiente. Genera códigos para usuarios, visualiza premios y consulta información detallada sobre cada transacción.",
};

export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <div className="w-full">
            <VerificationComponent>
                <ClienSidebar />
                <ClientTopNavbar />
                {children}
            </VerificationComponent>

        </div>


    );
}
