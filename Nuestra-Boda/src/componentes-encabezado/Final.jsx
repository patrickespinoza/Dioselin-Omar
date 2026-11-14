
import React from "react";
import { motion } from "framer-motion";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const CONFIG = {
  imagenLaptop: "/finallaptop.png",
  imagenCelular: "/finalcelular.png",

  descripcion:
    "Dioselin y Omar - ¡Te esperamos!",

  // ========================================
  // AJUSTES DE IMAGEN PARA LAPTOP
  // ========================================

  laptop: {
    // POSICIÓN HORIZONTAL Y VERTICAL
    // 50% 50% = centrada
    // 50% 30% = hacia arriba
    // 50% 70% = hacia abajo
    // 30% 50% = hacia la derecha
    // 70% 50% = hacia la izquierda

    positionX: "50%",
    positionY: "20%",

    // ZOOM DE LA IMAGEN
    // 1 = tamaño normal
    // 1.1 = 10% más grande
    // 0.9 = 10% más pequeña

    escala: 1,

    // cover = llena toda la pantalla
    // contain = muestra toda la imagen
    ajuste: "cover",
  },

  // ========================================
  // AJUSTES DE IMAGEN PARA CELULAR
  // ========================================

  celular: {
    positionX: "50%",
    positionY: "50%",
    escala: 1,
    ajuste: "cover",
  },
};

// ==========================================
// ANIMACIÓN DE ENTRADA
// ==========================================

const animacion = {
  initial: {
    opacity: 0,
    y: 20,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.15,
  },

  transition: {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  },
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const FinalBoda = () => {
  return (
    <section
      id="final-boda"
      className="
        relative
        w-full
        h-[100svh]
        overflow-hidden
        bg-[#F8F1EB]
      "
      aria-label={CONFIG.descripcion}
    >
      {/* ======================================
          IMAGEN PARA CELULAR
      ====================================== */}

      <motion.div
        {...animacion}
        className="
          absolute
          inset-0
          block
          md:hidden
          overflow-hidden
        "
      >
        <img
          src={CONFIG.imagenCelular}
          alt={CONFIG.descripcion}
          className="
            w-full
            h-full
          "
          style={{
            objectFit: CONFIG.celular.ajuste,

            objectPosition: `
              ${CONFIG.celular.positionX}
              ${CONFIG.celular.positionY}
            `,

            transform: `scale(${CONFIG.celular.escala})`,
          }}
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* ======================================
          IMAGEN PARA LAPTOP Y COMPUTADORA
      ====================================== */}

      <motion.div
        {...animacion}
        className="
          absolute
          inset-0
          hidden
          md:block
          overflow-hidden
        "
      >
        <img
          src={CONFIG.imagenLaptop}
          alt={CONFIG.descripcion}
          className="
            w-full
            h-full
          "
          style={{
            objectFit: CONFIG.laptop.ajuste,

            objectPosition: `
              ${CONFIG.laptop.positionX}
              ${CONFIG.laptop.positionY}
            `,

            transform: `scale(${CONFIG.laptop.escala})`,
          }}
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </section>
  );
};

export default FinalBoda;
