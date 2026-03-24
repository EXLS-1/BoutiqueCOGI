import type { Metadata } from "next";
import { Playfair_Display, Lato, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { LeftSidebar } from "@/components/left-sidebar";
import { RightSidebar } from "@/components/right-sidebar";
import { RootProviders } from "@/components/root-providers";
import { UIWrapper } from "@/components/ui-wrapper";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"], variable: "--font-lato" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });

// Le SEO reste ici (Côté Serveur)
export const metadata: Metadata = {
  title: "Boutique COGI",
  description: "Boutique en ligne de mode élégante - Vêtements pour femmes, hommes et enfants",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable} ${cormorant.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body className="bg-black"> {/* Fond noir pour accentuer l'effet de profondeur lors du flou/décalage */}
        <RootProviders>
          
          {/* Les Sidebars sont FIXES, elles restent en dehors du conteneur qui bouge */}
          <LeftSidebar />
          <RightSidebar />
          
          {/* Le UIWrapper englobe uniquement ce qui doit réagir (Navbar + Contenu) */}
          <UIWrapper>
            <Navbar />
            <main className="main-wrapper min-h-screen bg-white">
              {children}
            </main>
          </UIWrapper>

        </RootProviders>
      </body>
    </html>
  );
}