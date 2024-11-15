import type { Metadata } from "next";
import "./globals.css";
import { monserrat } from "../config/fonts";


export const metadata: Metadata = {
  title: "GraciasTotales - Sistema de Puntos, Premios y Sorteos Digitalizados",
  description: "GraciasTotales es una aplicación que ofrece un sistema de fidelización digital mediante puntos canjeables, premios y sorteos. Descubre cómo digitalizamos el proceso de sorteos y mejoramos la experiencia de tus clientes, disponible en web y Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monserrat.className} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
