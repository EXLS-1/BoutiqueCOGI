"use client";

import { useEffect } from "react";

export const ClientScripts = () => {
  useEffect(() => {
    // Sidebar toggle functionality
    const sidebarToggle = document.getElementById("navbar-toggle");
    const desktopSidebarToggle = document.getElementById("desktop-sidebar-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    const toggleSidebar = () => {
      if (sidebar && overlay) {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("active");
      }
    };

    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", toggleSidebar);
    }

    if (desktopSidebarToggle) {
      desktopSidebarToggle.addEventListener("click", () => {
        if (sidebar) {
          sidebar.classList.toggle("collapsed");
        }
      });
    }

    // Close sidebar when clicking overlay
    if (overlay) {
      overlay.addEventListener("click", () => {
        if (sidebar) {
          sidebar.classList.remove("open");
          overlay.classList.remove("active");
        }
      });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      });
    });

    // Social media links
    const socialLinks = document.querySelectorAll('[data-social]');
    socialLinks.forEach(link => {
      link.addEventListener("click", async (e) => {
        e.preventDefault();
        const social = link.getAttribute("data-social");

        try {
          const response = await fetch('/data.json');
          const data = await response.json();
          const socialUrls = data.social;

          if (social && socialUrls[social]) {
            window.open(socialUrls[social], '_blank');
          }
        } catch (error) {
          console.error('Error loading social links:', error);
        }
      });
    });

    // Hero video autoplay handling
    const videos = document.querySelectorAll('.hero-video');
    videos.forEach(video => {
      video.addEventListener('loadeddata', () => {
        video.play().catch(() => {
          // Autoplay failed, user interaction required
        });
      });
    });

    // Marquee animation
    const marquee = document.querySelector('.marquee-content');
    if (marquee) {
      marquee.innerHTML += marquee.innerHTML; // Duplicate for seamless loop
    }

    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
        contactForm.reset();
      });
    }

    // Cleanup
    return () => {
      if (sidebarToggle) {
        sidebarToggle.removeEventListener("click", toggleSidebar);
      }
      if (desktopSidebarToggle) {
        desktopSidebarToggle.removeEventListener("click", toggleSidebar);
      }
      if (overlay) {
        overlay.removeEventListener("click", toggleSidebar);
      }
    };
  }, []);

  return null;
};