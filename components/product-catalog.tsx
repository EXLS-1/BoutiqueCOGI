// components/ui/product-catalog.tsx
"use client";

import { useState } from "react";

export function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="py-20 bg-white" id="catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-3xl font-bold mb-8 uppercase">Tous nos produits</h2>
        {/* Intégrez ici votre logique de liste de produits, vos filtres de recherche, etc. */}
        <p className="text-gray-500">Le catalogue des produits s'affichera ici.</p>
      </div>
    </section>
  );
}