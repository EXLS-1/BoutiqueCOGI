import rawData from "@/data/product-data.json";
import { Product } from "@/types/product";

export const getAllProducts = (): Product[] => {
  return Object.values(rawData.products)
    .flat()
    .map((product: any) => ({
      ...product,
      price: Number(product.price),
      image: product.image.startsWith("/")
        ? product.image
        : `/${product.image}`,
    }));
};