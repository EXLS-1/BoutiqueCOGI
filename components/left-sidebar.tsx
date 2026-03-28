"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useUIStore } from "@/store/use-ui-store";
import { cn } from "@/lib/utils";

const MENU = [
  { label: "ACCUEIL", href: "/" },
  { label: "BOUTIQUE", href: "/#boutique" },
  { label: "NOUVEAUTÉS", href: "/#new" },
  { label: "CONTACT", href: "/#contact" },
];

const CATEGORIES = [
  { label: "Habit Femme", href: "/category/femme" },
  { label: "Habit Homme", href: "/category/homme" },
  { label: "Habit Enfant", href: "/category/enfant" },
  { label: "Chaussures", href: "/category/chaussure" },
  { label: "Sacs", href: "/category/sac" },
  { label: "Accessoires", href: "/category/accessoire" },
];

export const LeftSidebar = () => {
  const { isLeftSidebarOpen, toggleLeftSidebar } = useUIStore();

  /* 🔐 Fermeture clavier (desktop + mobile) */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isLeftSidebarOpen) {
        toggleLeftSidebar();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isLeftSidebarOpen, toggleLeftSidebar]);

  return (
    <>
      {/* Overlay : mobile uniquement */}
      <div
        onClick={toggleLeftSidebar}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity",
          "lg:hidden",
          isLeftSidebarOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      <aside
        role="navigation"
        aria-label="Menu principal"
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[280px] bg-white border-r shadow-xl",
          "transition-transform duration-300 ease-out",
          // ❗ Cachée par défaut (mobile + desktop)
          isLeftSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col p-6">
          {/* Header */}
          <header className="flex items-center justify-between mb-10">
            <h2 className="text-sm font-bold tracking-[0.3em]">
              MENU
            </h2>
            <button
              onClick={toggleLeftSidebar}
              aria-label="Fermer le menu"
            >
              ✕
            </button>
          </header>

          {/* Navigation principale */}
          <nav className="space-y-6">
            {MENU.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={toggleLeftSidebar}
                className="block text-xs font-bold tracking-[0.25em] hover:text-gray-500 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <hr className="my-8 border-gray-100" />

          {/* Catégories */}
          <section>
            <p className="mb-4 text-xs text-gray-400 tracking-widest font-bold">
              COLLECTIONS
            </p>
            <div className="space-y-3">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  onClick={toggleLeftSidebar}
                  className="block text-lg italic transition-all hover:pl-2"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-auto pt-10 flex gap-5 text-gray-400 text-sm">
            <a href="#" aria-label="WhatsApp">WhatsApp</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
          </footer>
        </div>
      </aside>
    </>
  );
};