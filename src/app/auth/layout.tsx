import { VerificationLoginComponent } from "@/component/verificationLoginComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar",
  description: "Pagina de inicio de sesión.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div className="width-full flex flex-col justify-center items-center min-h-screen"
    >

      <h1
        style={{ fontFamily: "Rock Salt, cursive", color: "#333" }}
        id="titulo"
      >
        Gracias Totales
      </h1>
      <div className="relative w-[90%] xxs:[80%] sm:[60%] sm:w-[500px] h-[400px] rounded-md flex justify-center"
        style={{ background: 'rgba(51,51,51,0.4)', backdropFilter: 'blur(5px) ' }}

      >
        <VerificationLoginComponent>

          {children}
        </VerificationLoginComponent>

      </div>
    </div>
  );
}
