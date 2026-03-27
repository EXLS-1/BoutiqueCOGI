"use client";

import { Product } from "@prisma/client";
import Image from "next/image";
import useCart from "@/store/use-cart";
import Link from "next/link";
import useWishlist from "@/store/use-wishlist";
import toast from "react-hot-toast";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const { toggleItem, items: wishlistItems } = useWishlist();
  const isFavorite = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ ...product, image: product.images[0], quantity: 1 });
    toast.success(`${product.name} ajouté !`);
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
      {/* Image & Overlay */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Favoris Button */}
        <button 
          onClick={() => toggleItem(product)}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full shadow-md transition-all duration-300 ${
            isFavorite ? "bg-red-500 text-white" : "bg-white/80 text-gray-400 hover:text-red-500"
          }`}
        >
          <i className={`fa-heart ${isFavorite ? "fas" : "far"}`}></i>
        </button>

        {/* Hover Actions Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
          <button
            onClick={handleAddToCart}
            className="w-full bg-white text-black py-3 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors shadow-lg"
          >
            Ajouter au panier
          </button>
          <Link 
            href={`/products/${product.id}`}
            className="w-full bg-black text-white py-3 rounded-sm text-xs font-bold tracking-widest uppercase text-center hover:bg-gray-800 transition-colors shadow-lg"
          >
            Détails
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">{product.category}</p>
        <h3 className="font-playfair font-bold text-gray-900 group-hover:text-gray-600 transition-colors truncate">{product.name}</h3>
        <p className="mt-2 font-bold text-black">{product.price.toLocaleString()} XOF</p>
      </div>
    </div>
  );
};
