"use client";

// app/page.tsx
import { Hero } from "@/components/ui/hero";
import { Boutique } from "@/components/ui/boutique";
import { ProductCatalog } from "@/components/ui/product-catalog";
import { Contact } from "@/components/ui/contact";
import { SocialNetworks } from "@/components/ui/social-networks";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Boutique />
      <ProductCatalog />
      <Contact />
      <SocialNetworks />
      <Footer />
    </div>
  );
}