// app/page.tsx

import Hero from "@/components/hero";
import Boutique from "@/components/boutique";
import { ProductList } from "@/components/product-list";
import { getAllProducts } from "@/lib/products";

export default function Home() {
  const products = getAllProducts();

  return (
    <main>
      <Hero />
      <Boutique />
      <ProductList
        title="Nos dernières nouveautés"
        products={products}
      />
      {/* autres sections */}
    </main>
  );
}