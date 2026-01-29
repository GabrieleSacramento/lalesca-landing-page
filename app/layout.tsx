import type { Metadata } from "next";
import { Archivo, Abel, Marcellus } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const abel = Abel({
  variable: "--font-abel",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lalesca Moreira - Advogada Especialista em Direito Penal",
  description: "Advogada especialista em direito penal com atendimento humanizado e transparente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${archivo.variable} ${abel.variable} ${marcellus.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
