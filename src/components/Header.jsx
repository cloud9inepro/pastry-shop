import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-[#fbe9e2] relative z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="" className="w-8 h-8" />
          <span className="text-sm font-bold leading-tight text-[#3d2b1f]">
            Crumb & Crust<br />Bakery
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-[#3d2b1f]">
            <li>
              <a href="#home" className="border-b-2 border-[#3d2b1f] pb-1">
                Home
              </a>
            </li>
            <li><a href="#menu">Today's Menu</a></li>
            <li><a href="#custom-orders">Custom Orders</a></li>
            <li><a href="#find-us">Find Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger toggle */}
        <button
          className="md:hidden text-[#3d2b1f] z-[60] relative"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-[#fbe9e2] shadow-lg md:hidden
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col gap-6 px-8 pt-24 text-sm font-medium text-[#3d2b1f]">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#menu" onClick={() => setIsOpen(false)}>Today's Menu</a></li>
          <li><a href="#custom-orders" onClick={() => setIsOpen(false)}>Custom Orders</a></li>
          <li><a href="#find-us" onClick={() => setIsOpen(false)}>Find Us</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}