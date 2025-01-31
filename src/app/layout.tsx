import type { Metadata } from "next";
import { Heebo, Montserrat, Kalam, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const heebo = Heebo({
  subsets: ["latin"],
  variable: '--font-heebo',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

const kalam = Kalam({
  subsets: ["latin"],
  variable: '--font-kalam',
  weight: "400",
  display: 'swap',
});

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Igor Moreira Gonçalves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${heebo.variable} ${montserrat.variable} ${kalam.variable} ${roboto.variable}`}>
        <Header />

        <div className={'children'}>
          {children}
        </div>
      </body>
    </html>
  );
}
