


import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".logo", {
        y: -40,
        opacity: 0,
        duration: 1.8,
      })
        .from(
          ".nav-link",
          {
            y: -20,
            opacity: 0,
            stagger: 0.08,
            duration: 1.5,
          },
          "-=0.4"
        )
        .from(
          ".menu-btn",
          {
            scale: 0,
            rotation: 180,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );
    },
    { scope: headerRef }
  );


 const handleMove = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();

  const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
  const y = (e.clientY - rect.top - rect.height / 2) * 0.25;

  gsap.to(el, {
    x,
    y,
    duration: 0.2,
    ease: "power2.out",
    overwrite: "auto",
  });
};

  return (
    <header
      ref={headerRef}
      className="w-full bg-[#fbe9e2] relative z-50"
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <a href="/" className="logo flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />

          <span className="text-sm font-bold leading-tight text-[#3d2b1f]">
            Crumb & Crust
            <br />
            Bakery
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-[#3d2b1f]">
            <li className="nav-link">
              <a
                href="#home"
                className="border-b-2 border-[#3d2b1f] pb-1"
                onMouseMove={handleMove}
              >
                Home
              </a>
            </li>

            <li className="nav-link inline-block will-change-transform" >
              <a href="#menu" onMouseMove={handleMove}>
                Today's Menu</a>
            </li>

            <li className="nav-link">
              <a href="#custom-orders">Custom Orders</a>
            </li>

            <li className="nav-link">
              <a href="#find-us">Find Us</a>
            </li>

            <li className="nav-link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="menu-btn md:hidden text-[#3d2b1f] z-[60] relative"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-[#fbe9e2] shadow-xl md:hidden
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-6 px-8 pt-24 text-sm font-medium text-[#3d2b1f]">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#menu" onClick={() => setIsOpen(false)}>
              Today's Menu
            </a>
          </li>

          <li>
            <a href="#custom-orders" onClick={() => setIsOpen(false)}>
              Custom Orders
            </a>
          </li>

          <li>
            <a href="#find-us" onClick={() => setIsOpen(false)}>
              Find Us
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};