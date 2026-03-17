"use client";

import Link from "next/link";
import useCart from "@/store/use-cart";
import { AuthButton } from "@/components/auth-button";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const { items } = useCart();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    if (sidebar && overlay) {
      if (!sidebarOpen) {
        sidebar.classList.add("open");
        overlay.classList.add("active");
      } else {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
      }
    }
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            <img src="/logo.png" alt="Boutique COGI" className="navbar-logo-img" />
          </Link>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-section="home">ACCUEIL</a>
            </li>
            <li className="navbar-item">
              <a href="#boutique" className="navbar-link" data-section="boutique">BOUTIQUE</a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link" data-section="contact">CONTACT</a>
            </li>
            <li className="navbar-item">
              <a href="#reseaux" className="navbar-link" data-section="reseaux">RÉSEAUX SOCIAUX</a>
            </li>
          </ul>
        </div>
        <div className="navbar-actions">
          <AuthButton />
          <Link href="/checkout" className="navbar-cart">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>
          <button
            className="navbar-toggle"
            id="navbar-toggle"
            aria-label="Ouvrir le menu"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};
