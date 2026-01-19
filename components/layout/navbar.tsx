"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart, User, Sparkles, MessageCircle } from "lucide-react";
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
    { label: "Início", href: "/", icon: Heart },
    { label: "Quem Sou", href: "#sobre", icon: User },
    { label: "Atendimento", href: "#como-funciona", icon: Sparkles },
    { label: "Agendar", href: "https://wa.me/5519982129344", icon: MessageCircle, highlight: true },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F5F3EF]/95 backdrop-blur-md shadow-sm border-b border-[#A8B8A3]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* Logo - Sem filtros de brilho para preservar o cinza original */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="Monise Ribeiro Psicanalista"
                width={200}
                height={60}
                className="h-10 lg:h-12 w-auto object-contain transition-opacity duration-300 hover:opacity-80"
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
                      ? "px-6 py-2.5 bg-[#8C6A5D] text-white rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-[#6E6E6E] transition-all duration-300 shadow-sm"
                      : `font-medium text-[11px] uppercase tracking-widest transition-colors duration-300 text-[#6E6E6E] hover:text-[#8C6A5D]`
                  }`}
                >
                  {item.label}
                  {!item.highlight && (
                    <span
                      className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#A8B8A3] group-hover:w-full transition-all duration-300"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Hamburger Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#6E6E6E] hover:bg-[#A8B8A3]/10 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-[#6E6E6E]/90 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#F5F3EF] shadow-2xl"
            >
              <div className="flex flex-col h-full p-8 pt-20">
                {/* Logo Mobile */}
                <div className="mb-12 flex justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Monise Ribeiro"
                    width={160}
                    height={48}
                    className="h-9 w-auto object-contain"
                  />
                </div>

                <nav className="flex-1 space-y-4">
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
                        className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
                          item.highlight
                            ? "bg-[#8C6A5D] text-white font-bold"
                            : "text-[#6E6E6E] hover:bg-[#A8B8A3]/10"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="text-[11px] font-medium uppercase tracking-widest">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}