"use client";

import { useUIStore } from "@/store/use-ui-store";
import { cn } from "@/lib/utils";

export const UIWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isLeftSidebarOpen, isRightSidebarOpen, closeAll } = useUIStore();
  
  const isAnyOpen = isLeftSidebarOpen || isRightSidebarOpen;

  return (
    <>
      {/* L'overlay global géré par Zustand */}
      <div 
        className={cn("sidebar-overlay", isAnyOpen && "active")} 
        onClick={closeAll}
      ></div>
      
      {/* On injecte le reste de l'app (Navbar, Sidebars, Content) */}
      <div className={cn("app-container", isAnyOpen && "overflow-hidden")}>
        {children}
      </div>
    </>
  );
};