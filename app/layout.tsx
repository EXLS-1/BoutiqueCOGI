import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { ClientScripts } from "@/components/client-scripts";
import { RootProviders } from "@/components/root-providers";

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
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Lato:wght@300;400;700;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
