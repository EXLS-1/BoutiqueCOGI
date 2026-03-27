"use client";

import Image from "next/image";
import useCart from "@/store/use-cart";
import Link from "next/link";
import toast from "react-hot-toast";

export const ProductDetail = ({ product }: any) => {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Galerie Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
          <Image src={product.image} alt={product.name} fill className="object-cover" priority />
        </div>

        {/* Info & Actions */}
        <div className="flex flex-col space-y-8">
          <div>
            <span className="text-sm uppercase tracking-widest text-gray-400 font-bold">{product.category}</span>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mt-2">{product.name}</h1>
            <p className="text-3xl font-light text-black mt-4">{product.price.toLocaleString()} XOF</p>
          </div>

          <p className="text-gray-600 leading-relaxed font-lato text-lg">{product.description}</p>

          <div className="pt-8 border-t border-gray-100 space-y-6">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Quantité Selector */}
              <div className="flex items-center border-2 border-black rounded-sm overflow-hidden h-14">
                <button 
                   onClick={() => updateQuantity(product.id, 'decrease')}
                   className="px-4 hover:bg-gray-100 transition-colors font-bold text-xl"
                >-</button>
                <span className="w-12 text-center font-bold text-lg">{quantity || 1}</span>
                <button 
                   onClick={() => updateQuantity(product.id, 'increase')}
                   className="px-4 hover:bg-gray-100 transition-colors font-bold text-xl"
                >+</button>
              </div>

              <button
                onClick={() => {
                  addItem({ ...product, quantity: 1 });
                  toast.success("Panier mis à jour");
                }}
                className="flex-1 bg-black text-white h-14 font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-all shadow-xl active:scale-95"
              >
                Ajouter au panier
              </button>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-50">
              {[
                { icon: "fa-shield-alt", text: "Garantie" },
                { icon: "fa-truck", text: "Livraison" },
                { icon: "fa-undo", text: "Retours" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <i className={`fas ${item.icon} text-gray-300 text-xl`}></i>
                  <span className="text-[10px] uppercase font-bold text-gray-500">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};