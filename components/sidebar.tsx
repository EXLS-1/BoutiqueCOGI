"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.pageYOffset + 150;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (menu: string) => {
    setSubmenuOpen(submenuOpen === menu ? null : menu);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="sidebar-logo-text">Menu</span>
        </div>
        <button className="desktop-sidebar-toggle" id="desktop-sidebar-toggle" aria-label="Réduire le menu">
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="11 17 6 12 11 7"></polyline>
            <polyline points="18 17 13 12 18 7"></polyline>
          </svg>
        </button>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <a
            href="#home"
            className={`sidebar-link ${activeSection === "home" ? "active" : ""}`}
            data-section="home"
            data-tooltip="ACCUEIL"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <i className="fas fa-home"></i>
            <span>ACCUEIL</span>
          </a>
        </li>
        <li className={`sidebar-item has-submenu ${submenuOpen === "boutique" ? "open" : ""}`}>
          <a
            href="#boutique"
            className={`sidebar-link ${activeSection === "boutique" ? "active" : ""}`}
            data-section="boutique"
            data-tooltip="BOUTIQUE"
            onClick={(e) => {
              e.preventDefault();
              toggleSubmenu("boutique");
              scrollToSection("boutique");
            }}
          >
            <i className="fas fa-store"></i>
            <span>BOUTIQUE</span>
            <i className="fas fa-chevron-down submenu-arrow"></i>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="#habit-femme" onClick={(e) => { e.preventDefault(); scrollToSection("catalogue-femme"); }}>
                <i className="fas fa-female"></i> Habit Femme
              </a>
            </li>
            <li>
              <a href="#habit-homme" onClick={(e) => { e.preventDefault(); scrollToSection("catalogue-homme"); }}>
                <i className="fas fa-male"></i> Habit Homme
              </a>
            </li>
            <li>
              <a href="#habit-enfant" onClick={(e) => { e.preventDefault(); scrollToSection("catalogue-enfant"); }}>
                <i className="fas fa-child"></i> Habit Enfant
              </a>
            </li>
            <li>
              <a href="#chaussure-dame" onClick={(e) => { e.preventDefault(); scrollToSection("catalogue-chaussure"); }}>
                <i className="fas fa-shoe-prints"></i> Chaussure Dame
              </a>
            </li>
            <li>
              <a href="#sac-dame" onClick={(e) => { e.preventDefault(); scrollToSection("catalogue-sac"); }}>
                <i className="fas fa-shopping-bag"></i> Sac Dame
              </a>
            </li>
            <li>
              <a href="#accessoire" onClick={(e) => { e.preventDefault(); scrollToSection("catalogue-accessoire"); }}>
                <i className="fas fa-ring"></i> Accessoire
              </a>
            </li>
          </ul>
        </li>
        <li className={`sidebar-item has-submenu ${submenuOpen === "contact" ? "open" : ""}`}>
          <a
            href="#contact"
            className={`sidebar-link ${activeSection === "contact" ? "active" : ""}`}
            data-section="contact"
            data-tooltip="CONTACT"
            onClick={(e) => {
              e.preventDefault();
              toggleSubmenu("contact");
              scrollToSection("contact");
            }}
          >
            <i className="fas fa-envelope"></i>
            <span>CONTACT</span>
            <i className="fas fa-chevron-down submenu-arrow"></i>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="#contact-email">
                <i className="fas fa-at"></i> E-mail
              </a>
            </li>
            <li>
              <a href="#contact-phone">
                <i className="fab fa-whatsapp"></i> Whatsapp
              </a>
            </li>
          </ul>
        </li>
        <li className={`sidebar-item has-submenu ${submenuOpen === "reseaux" ? "open" : ""}`}>
          <a
            href="#reseaux"
            className={`sidebar-link ${activeSection === "reseaux" ? "active" : ""}`}
            data-section="reseaux"
            data-tooltip="RÉSEAUX SOCIAUX"
            onClick={(e) => {
              e.preventDefault();
              toggleSubmenu("reseaux");
              scrollToSection("reseaux");
            }}
          >
            <i className="fas fa-share-alt"></i>
            <span>RÉSEAUX SOCIAUX</span>
            <i className="fas fa-chevron-down submenu-arrow"></i>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="#" data-social="whatsapp">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </li>
            <li>
              <a href="#" data-social="facebook">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" data-social="telegram">
                <i className="fab fa-telegram"></i> Telegram
              </a>
            </li>
            <li>
              <a href="#" data-social="tiktok">
                <i className="fab fa-tiktok"></i> TikTok
              </a>
            </li>
            <li>
              <a href="#" data-social="instagram">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="sidebar-footer">
        <p>&copy; 2026 Boutique COGI</p>
      </div>
    </aside>
  );
};