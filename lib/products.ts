import rawData from "@/data/product-data.json";
import { Product } from "@/types/product";
import { cache } from "react";

export const getAllProducts = cache(async (): Promise<Product[]> => {
  const products = Object.values(rawData.products)
    .flat()
    .map((p: any) => ({
      ...p,
      price: Number(p.price),
      image: p.image.startsWith("/")
        ? p.image
        : `/${p.image}`,
    }));

  return products;
});