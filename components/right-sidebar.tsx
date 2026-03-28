"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUIStore } from "@/store/use-ui-store";
import useCart from "@/store/use-cart";
import useWishlist from "@/store/use-wishlist";
import { cn, formatPrice } from "@/lib/utils";

type Tab = "cart" | "wishlist";

export const RightSidebar = () => {
  const { isRightSidebarOpen, toggleRightSidebar } = useUIStore();
  const { items: cartItems, removeItem } = useCart();
  const { items: wishlistItems, toggleItem } = useWishlist();

  const [activeTab, setActiveTab] = useState<Tab>("cart");

  const cartTotal = useMemo(
    () => cartItems.reduce((t, i) => t + i.price * i.quantity, 0),
    [cartItems]
  );

  const close = useCallback(() => {
    if (isRightSidebarOpen) toggleRightSidebar();
  }, [isRightSidebarOpen, toggleRightSidebar]);

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label="Panier et favoris"
      className={cn(
        "fixed inset-y-0 right-0 z-100 w-full sm:w-105 bg-white border-l shadow-xl transition-transform duration-300",
        isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b p-4">
          <div className="flex gap-6">
            {(["cart", "wishlist"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-selected={activeTab === tab}
                className={cn(
                  "text-xs font-bold tracking-widest pb-1 transition",
                  activeTab === tab
                    ? "border-b-2 border-black text-black"
                    : "text-gray-400"
                )}
              >
                {tab === "cart"
                  ? `PANIER (${cartItems.length})`
                  : `FAVORIS (${wishlistItems.length})`}
              </button>
            ))}
          </div>

          <button onClick={close} aria-label="Fermer">
            ✕
          </button>
        </header>

        {/* Content */}
        <section className="flex-1 overflow-y-auto p-4">
          {activeTab === "cart" && (
            <>
              {cartItems.length === 0 ? (
                <Empty text="Votre panier est vide." />
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-cover bg-gray-50"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-bold">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Qté : {item.quantity}
                      </p>
                      <p>{formatPrice(item.price)}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label="Supprimer"
                      className="text-gray-400 hover:text-red-500"
                    >
                      🗑
                    </button>
                  </div>
                ))
              )}
            </>
          )}

          {activeTab === "wishlist" && (
            <>
              {wishlistItems.length === 0 ? (
                <Empty text="Aucun favori pour le moment." />
              ) : (
                wishlistItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      width={80}
                      height={80}
                    />
                    <div className="flex-1">
                      <p className="font-bold">{item.name}</p>
                      <p>{formatPrice(item.price)}</p>
                    </div>
                    <button
                      onClick={() => toggleItem(item)}
                      aria-label="Retirer des favoris"
                    >
                      ❤️
                    </button>
                  </div>
                ))
              )}
            </>
          )}
        </section>

        {/* Footer */}
        {activeTab === "cart" && cartItems.length > 0 && (
          <footer className="border-t p-4 bg-gray-50 space-y-4">
            <div className="flex justify-between font-bold">
              <span>TOTAL</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={close}
              className="block text-center bg-black text-white py-4 text-xs tracking-widest"
            >
              PASSER À LA CAISSE
            </Link>
          </footer>
        )}
      </div>
    </aside>
  );
};

const Empty = ({ text }: { text: string }) => (
  <p className="py-16 text-center text-gray-400 italic">{text}</p>
);