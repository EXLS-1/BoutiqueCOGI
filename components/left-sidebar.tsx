"use client";

import Link from "next/link";
import { useUIStore } from "@/store/use-ui-store";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "ACCUEIL", href: "/" },
  { label: "BOUTIQUE", href: "#boutique" },
  { label: "NOUVEAUTÉS", href: "#new" },
  { label: "CONTACT", href: "#contact" },
];

const categories = [
  { label: "Habit Femme", href: "/category/femme" },
  { label: "Habit Homme", href: "/category/homme" },
  { label: "Habit Enfant", href: "/category/enfant" },
  { label: "Chaussure Dame", href: "/category/Chaussure" },
  { label: "Sac Dame", href: "/category/Sac" },
  { label: "Accessoires", href: "/category/accessoire" },
];

export const LeftSidebar = () => {
  const { isLeftSidebarOpen, toggleLeftSidebar } = useUIStore();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-[100] h-full w-[300px] border-r bg-white shadow-2xl transition-transform duration-300",
        isLeftSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-full flex-col p-8">
        {/* Header de la Sidebar */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xl font-bold tracking-[0.2em] font-[family-name:var(--font-playfair)]">
            MENU
          </h2>
          <button onClick={toggleLeftSidebar} className="text-gray-500 hover:text-black">
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
        </div>

        {/* Navigation Principale */}
        <nav className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={toggleLeftSidebar}
              className="text-sm font-bold tracking-[0.3em] hover:text-gray-500 transition-colors font-[family-name:var(--font-lato)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <hr className="my-10 border-gray-100" />

        {/* Section Catégories */}
        <div className="space-y-6">
          <p className="text-xs text-gray-400 tracking-widest font-bold">COLLECTIONS</p>
          <div className="flex flex-col gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                onClick={toggleLeftSidebar}
                className="text-lg font-[family-name:var(--font-cormorant)] italic hover:pl-2 transition-all"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer de la Sidebar : Réseaux Sociaux */}
        <div className="mt-auto pt-10">
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-black"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#" className="hover:text-black"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="hover:text-black"><i className="fa-brands fa-telegram-plane"></i></a>
            <a href="#" className="hover:text-black"><i className="fa-brands fa-tiktok"></i></a>
            <a href="#" className="hover:text-black"><i className="fa-brands fa-instagram"></i></a> 
          </div>
        </div>
      </div>
    </aside>
  );
};