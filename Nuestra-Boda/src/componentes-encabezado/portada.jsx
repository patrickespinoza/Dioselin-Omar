
import React from "react";
import { motion } from "framer-motion";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

// Imagen para celulares
const PORTADA_CELULAR = "/portadaC.png";

// Imagen para laptops y computadoras
const PORTADA_LAPTOP = "/portadaL.png";

// ==========================================
// COMPONENTE PORTADA
// ==========================================

export default function Portada() {
  return (
    <section
      id="portada"
      className="
        relative
        w-full
        h-[100svh]
        overflow-hidden
        bg-[#F8F1EB]
      "
    >
      {/* ======================================
          PORTADA PARA CELULAR
      ====================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 1.04,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          absolute
          inset-0
          block
          md:hidden
        "
      >
        <img
          src={PORTADA_CELULAR}
          alt="Boda de Dioselin y Omar - 13 de febrero de 2027"
          className="
            w-full
            h-full
            object-cover
            object-center
          "
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* ======================================
          PORTADA PARA LAPTOP
      ====================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 1.04,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          absolute
          inset-0
          hidden
          md:block
        "
      >
        <img
          src={PORTADA_LAPTOP}
          alt="Boda de Dioselin y Omar - 13 de febrero de 2027"
          className="
            w-full
            h-full
            object-cover
            object-center
          "
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
    </section>
  );
}
