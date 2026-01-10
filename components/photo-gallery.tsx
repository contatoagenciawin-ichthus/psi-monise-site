"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["Todas", "Vinícolas", "Gastronomia", "Momentos"];

// Fotos reais do Rio Grande do Sul
const photos = [
  { id: 1, src: "/galeria/rs/rs1.jpg", category: "Vinícolas", alt: "Vinícola no Rio Grande do Sul" },
  { id: 2, src: "/galeria/rs/rs2.jpg", category: "Gastronomia", alt: "Gastronomia harmonizada" },
  { id: 3, src: "/galeria/rs/rs3.jpg", category: "Momentos", alt: "Grupo de viajantes" },
  { id: 4, src: "/galeria/rs/rs4.jpg", category: "Vinícolas", alt: "Degustação de vinhos" },
  { id: 5, src: "/galeria/rs/rs5.jpg", category: "Momentos", alt: "Brinde entre amigos" },
  { id: 6, src: "/galeria/rs/rs6.jpg", category: "Gastronomia", alt: "Prato harmonizado" },
  { id: 7, src: "/galeria/rs/rs7.jpg", category: "Vinícolas", alt: "Barris de vinho" },
  { id: 8, src: "/galeria/rs/rs8.jpg", category: "Momentos", alt: "Pôr do sol nos vinhedos" },
  { id: 9, src: "/galeria/rs/rs9.jpg", category: "Vinícolas", alt: "Vista dos vinhedos" },
];

export function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState("Todas");

  const filteredPhotos =
    activeFilter === "Todas"
      ? photos
      : photos.filter((photo) => photo.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
              activeFilter === category
                ? "bg-wine text-cream shadow-medium"
                : "bg-white border border-wine/20 text-wine hover:border-wine/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de Fotos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay no Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-wine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-cream font-medium text-sm uppercase tracking-wider">
                {photo.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Ver Mais */}
      <div className="text-center">
        <Link
          href="/viagens/rio-grande-do-sul"
          className="inline-flex items-center gap-2 px-8 py-4 bg-wine text-cream rounded-xl font-bold uppercase tracking-wider hover:bg-wine-light hover:scale-105 transition-all duration-300 shadow-medium"
        >
          Ver Galeria Completa
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}