// components/ui/product-catalog.tsx
import { ProductList } from "@/components/product-list";

interface ProductCatalogProps {
  products: any[];
  title: string;
}

export default function ProductCatalog({ products, title }: ProductCatalogProps) {
  return <ProductList products={products} title={title} />;
}