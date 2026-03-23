"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUIStore } from "@/store/use-ui-store";
import useCart from "@/store/use-cart";
import useWishlist from "@/store/use-wishlist";
import { formatPrice, cn } from "@/lib/utils";

export const RightSidebar = () => {
  const { isRightSidebarOpen, toggleRightSidebar } = useUIStore();
  const { items: cartItems, removeItem: removeFromCart } = useCart();
  const { items: wishlistItems, toggleItem: toggleWishlist } = useWishlist();
  
  // État local pour basculer entre Panier (cart) et Favoris (wishlist)
  const [activeTab, setActiveTab] = useState<"cart" | "wishlist">("cart");

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <aside
      className={cn(
        "fixed right-0 top-0 z-[100] h-full w-full border-l bg-white shadow-2xl transition-transform duration-300 sm:w-[400px]",
        isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header avec onglets */}
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("cart")}
              className={cn(
                "pb-1 text-sm font-bold tracking-widest transition-all font-[family-name:var(--font-lato)]",
                activeTab === "cart" ? "border-b-2 border-black text-black" : "text-gray-400"
              )}
            >
              PANIER ({cartItems.length})
            </button>
            <button
              onClick={() => setActiveTab("wishlist")}
              className={cn(
                "pb-1 text-sm font-bold tracking-widest transition-all font-[family-name:var(--font-lato)]",
                activeTab === "wishlist" ? "border-b-2 border-black text-black" : "text-gray-400"
              )}
            >
              FAVORIS ({wishlistItems.length})
            </button>
          </div>
          <button onClick={toggleRightSidebar} className="text-gray-500 hover:text-black">
            <i className="fa-solid fa-xmark fa-lg"></i>
          </button>
        </div>

        {/* Contenu défilant */}
        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === "cart" ? (
            <div className="space-y-4">
              {cartItems.length === 0 ? (
                <p className="py-10 text-center text-gray-500 font-[family-name:var(--font-cormorant)] text-lg italic">
                  Votre panier est vide.
                </p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <div className="relative h-20 w-20 flex-shrink-0 bg-gray-50">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h4 className="text-sm font-bold font-[family-name:var(--font-playfair)]">{item.name}</h4>
                      <p className="text-xs text-gray-500">Qté: {item.quantity}</p>
                      <p className="mt-1 text-sm font-medium">{formatPrice(item.price)}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {wishlistItems.length === 0 ? (
                <p className="py-10 text-center text-gray-500 font-[family-name:var(--font-cormorant)] text-lg italic">
                  Aucun coup de cœur pour le moment.
                </p>
              ) : (
                wishlistItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <div className="relative h-20 w-20 flex-shrink-0 bg-gray-50">
                      <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <h4 className="text-sm font-bold font-[family-name:var(--font-playfair)]">{item.name}</h4>
                      <p className="text-sm">{formatPrice(item.price)}</p>
                    </div>
                    <button onClick={() => toggleWishlist(item)} className="text-red-500">
                      <i className="fa-solid fa-heart text-red-500"></i>
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Pied de page de la Sidebar (uniquement pour le panier) */}
        {activeTab === "cart" && cartItems.length > 0 && (
          <div className="border-t p-4 space-y-4 bg-gray-50">
            <div className="flex justify-between items-center font-bold">
              <span className="font-[family-name:var(--font-lato)] tracking-widest text-sm">TOTAL</span>
              <span className="text-xl">{formatPrice(cartTotal)}</span>
            </div>
            <Link 
              href="/checkout" 
              onClick={toggleRightSidebar}
              className="block w-full bg-black py-4 text-center text-xs font-bold tracking-[0.2em] text-white transition-colors hover:bg-gray-800"
            >
              PASSER À LA CAISSE
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
};