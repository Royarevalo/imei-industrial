import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

title:"IMEI | Instalaciones y Montaje de Estructuras Industriales",

description:
"Servicios de obra civil, estructuras metálicas, instalaciones industriales y mantenimiento.",

keywords:[
"obra civil",
"estructuras metálicas",
"instalaciones industriales",
"mantenimiento industrial",
"IMEI"
],

authors:[
{
name:"IMEI"
}
]

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
