// app/page.tsx
"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import Boutique from "@/components/boutique";
import ProductCatalog from "@/components/product-catalog";
import Contact from "@/components/contact";
import SocialNetworks from "@/components/social-networks";
import Footer from "@/components/footer";
import { ProductList } from "@/components/product-list";
import { getAllProducts } from "@/lib/products.ts";

export default function Home() {
  const allProducts = getAllProducts();
  return (
    <div>
      <Hero />
      <Boutique />
      <ProductList products={allProducts} title="Nos dernières nouveautés" />
      {/* ... autres sections */}
    </div>
  );
}