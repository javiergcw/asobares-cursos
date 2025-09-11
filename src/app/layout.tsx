import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Headear";
import Footer from "@/components/footer/Footer";
import ContainerLayaout from "@/components/ContainerLayaout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASOBARES CURSOS",
  description: "Capacítate en el arte de la gastronomía y bartending. Cursos profesionales de mixología, coctelería y gestión de restaurantes. Certificaciones internacionales y formación de calidad.",
  keywords: [
    "bartending",
    "cursos de bartender",
    "mixología",
    "gastronomía",
    "restaurantes",
    "coctelería",
    "gestión de bar",
    "certificaciones gastronómicas",
    "formación profesional",
    "ASOBARES",
    "CAPACITU"
  ],
  authors: [{ name: "ASOBARES CURSOS" }],
  creator: "ASOBARES CURSOS",
  publisher: "ASOBARES CURSOS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://asobares-cursos.com",
    title: "ASOBARES CURSOS - Formación Profesional en Bartending",
    description: "Capacítate en el arte de la gastronomía y bartending. Cursos profesionales de mixología, coctelería y gestión de restaurantes.",
    siteName: "ASOBARES CURSOS",
    images: [
      {
        url: "/img/restaurantes.webp",
        width: 1200,
        height: 630,
        alt: "ASOBARES CURSOS - Formación Profesional en Gastronomía",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOBARES CURSOS - Formación Profesional en Bartending",
    description: "Cursos profesionales de bartending, mixología y coctelería. Certificaciones internacionales.",
    images: ["/img/restaurantes.webp"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#FF6B35",
  colorScheme: "light",
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
