"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Wine, Calendar, Images } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "/", icon: Wine },
    { label: "Mendoza 2026", href: "/mendoza", icon: Calendar, highlight: true },
    { label: "Nossas Viagens", href: "/viagens/rio-grande-do-sul", icon: Images },
    // ❌ removido: Contato
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-medium border-b border-wine/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src={
                  isScrolled
                    ? "/images/logo-emporio-liasch.png"
                    : "/images/logo-emporio-liasch-light.png"
                }
                alt="Empório Liasch"
                width={180}
                height={60}
                className="h-12 lg:h-16 w-auto transition-opacity duration-300"
                priority
              />
            </Link>

            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group ${
                    item.highlight
                      ? "px-6 py-2.5 bg-wine text-cream rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-wine-light transition-all duration-300 shadow-soft hover:shadow-medium"
                      : `font-medium text-sm uppercase tracking-wider transition-colors duration-300 ${
                          isScrolled
                            ? "text-wood hover:text-wine"
                            : "text-cream hover:text-gold"
                        }`
                  }`}
                >
                  {item.label}

                  {/* Underline hover (só para itens normais) */}
                  {!item.highlight && (
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                        isScrolled ? "bg-wine" : "bg-gold"
                      }`}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Hamburger Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? "text-wine hover:bg-wine/10"
                  : "text-cream hover:bg-white/10"
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-wine-dark/95 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-wine shadow-premium"
            >
              <div className="flex flex-col h-full p-8 pt-28">
                {/* Menu Items */}
                <nav className="flex-1 space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                          item.highlight
                            ? "bg-gold text-wine font-bold shadow-medium hover:shadow-strong hover:scale-[1.02]"
                            : "text-cream hover:bg-white/10"
                        }`}
                      >
                        <item.icon className="w-6 h-6" />
                        <span className="text-lg font-medium uppercase tracking-wide">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="border-t border-cream/20 pt-6 space-y-4"
                >
                  <div className="text-center">
                    <p className="text-cream/60 text-sm uppercase tracking-widest mb-2">
                      Americana • SP
                    </p>
                    <p className="text-cream text-sm">
                      Vinhos, Bistrô e Viagens Inesquecíveis
                    </p>
                  </div>

                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://instagram.com/emporioliasch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-cream transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
