"use client";

import { useUIStore } from "@/store/use-ui-store";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isLeftSidebarOpen, isRightSidebarOpen, closeAll } = useUIStore();

  return (
    <html lang="fr" className="..."> 
      <body>
        <RootProviders>
          <Navbar />
          
          {/* SIDEBAR GAUCHE (Menu/Paramètres) */}
          <LeftSidebar isOpen={isLeftSidebarOpen} />
          
          {/* SIDEBAR DROITE (Favoris/Panier) */}
          <RightSidebar isOpen={isRightSidebarOpen} />

          {/* OVERLAY UNIQUE */}
          {(isLeftSidebarOpen || isRightSidebarOpen) && (
            <div className="sidebar-overlay active" onClick={closeAll}></div>
          )}

          <div className={`main-wrapper ${(isLeftSidebarOpen || isRightSidebarOpen) ? 'shifted' : ''}`}>
            {children}
          </div>
        </RootProviders>
      </body>
    </html>
  );
}