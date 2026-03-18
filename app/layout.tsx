import type { Metadata } from "next";
import { Playfair_Display, Lato, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { ClientScripts } from "@/components/client-scripts";
import { RootProviders } from "@/components/root-providers";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"], variable: "--font-lato" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  title: "Boutique COGI",
  description: "Boutique en ligne de mode élégante - Vêtements pour femmes, hommes et enfants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable} ${cormorant.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body>
        <RootProviders>
          <Navbar />
          <Sidebar />
          <div className="sidebar-overlay" id="overlay"></div>
          <div className="main-wrapper" id="main-wrapper">
            {children}
          </div>
          <ClientScripts />
        </RootProviders>
      </body>
    </html>
  );
}
