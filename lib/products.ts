// lib/products.ts
import rawData from "@/data/product-data.json";

export const getAllProducts = () => {
  const all = [];
  for (const cat of Object.keys(rawData.products)) {
    all.push(...rawData.products[cat]);
  }
  return all;
};