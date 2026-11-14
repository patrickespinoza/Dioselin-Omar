
import React from "react";
import { motion } from "framer-motion";
import { Heart, Flower2 } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const padresNovia = {
  titulo: "Padres de la novia",
  nombres: [
    "Remedios Carrillo Castañeda",
    "Francisco Tezmol Flores",
  ],
};

const padresNovio = {
  titulo: "Padres del novio",
  nombres: [
    "Patricia Bautista Gonzalez",
    "Gregorio Najera Ramirez",
  ],
};

const padrinos = {
  titulo: "Nuestros padrinos",
  nombres: [
    "Juana Donjuan Hernandez",
    "J. Asuncion Cleto Ochoa",
  ],
};

const textos = {
  titulo: "Nuestros padres",
  descripcion:
    "Con la bendición y el amor de quienes nos han acompañado en cada paso de nuestra vida, queremos compartir contigo este día tan especial.",
};

// ==========================================
// PALETA CHATEAU ROSE
// ==========================================

const COLORES = {
  dustyRose: "#D9B5AD",
  vintageMauve: "#AD898D",
  englishRose: "#DAB9AD",
  champagne: "#E8DECE",
  roseGold: "#C4937E",
  marfil: "#F8F1EB",
  texto: "#654A48",
};

// ==========================================
// ANIMACIONES
// ==========================================

const animacion = {
  oculto: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// ORNAMENTO CLÁSICO
// ==========================================

const Ornamento = ({ ancho = "w-16" }) => (
  <div
    className="
      flex items-center justify-center
      gap-3
    "
    aria-hidden="true"
  >
    <span
      className={`${ancho} h-px`}
      style={{
        backgroundColor: COLORES.roseGold,
      }}
    />

    <span
      className="text-xl leading-none"
      style={{
        color: COLORES.roseGold,
      }}
    >
      ❧
    </span>

    <span
      className={`${ancho} h-px`}
      style={{
        backgroundColor: COLORES.roseGold,
      }}
    />
  </div>
);

// ==========================================
// BLOQUE DE NOMBRES
// ==========================================

const BloqueFamilia = ({
  titulo,
  nombres,
  destacado = false,
}) => {
  return (
    <motion.div
      variants={animacion}
      className="
        relative
        flex flex-col
        items-center
        text-center
        w-full
        px-2
        sm:px-5
      "
    >
      {/* DECORACIÓN */}

      {destacado && (
        <Flower2
          size={28}
          strokeWidth={1}
          className="mb-5"
          style={{
            color: COLORES.roseGold,
          }}
        />
      )}

      {/* TÍTULO */}

      <h3
        className={`
          font-playfair
          ${destacado
            ? "text-2xl sm:text-3xl"
            : "text-xl sm:text-2xl"}
          italic
          leading-relaxed
        `}
        style={{
          color: COLORES.texto,
        }}
      >
        {titulo}
      </h3>

      {/* SEPARADOR */}

      <div className="my-5">
        <Ornamento ancho="w-10" />
      </div>

      {/* PRIMER NOMBRE */}

      <p
        className="
          font-playfair
          text-lg
          sm:text-xl
          lg:text-[1.4rem]
          leading-relaxed
          break-words
        "
        style={{
          color: COLORES.texto,
        }}
      >
        {nombres[0]}
      </p>

      {/* UNIÓN */}

      <span
        className="
          my-3
          font-cursiveDancing
          text-3xl
          sm:text-4xl
        "
        style={{
          color: COLORES.roseGold,
        }}
      >
        &
      </span>

      {/* SEGUNDO NOMBRE */}

      <p
        className="
          font-playfair
          text-lg
          sm:text-xl
          lg:text-[1.4rem]
          leading-relaxed
          break-words
        "
        style={{
          color: COLORES.texto,
        }}
      >
        {nombres[1]}
      </p>
    </motion.div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Padres() {
  return (
    <section
      id="padres"
      className="
        relative
        w-full
        overflow-hidden
        px-4
        py-20
        sm:px-8
        sm:py-28
        lg:py-32
      "
      style={{
        backgroundColor: COLORES.marfil,
      }}
    >
      {/* ======================================
          MARCO EXTERIOR CLÁSICO
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-3
          sm:inset-6
          rounded-tl-[35px]
          rounded-br-[35px]
          border
        "
        style={{
          borderColor: COLORES.roseGold,
          opacity: 0.65,
        }}
      />

      {/* ======================================
          DECORACIONES DE FONDO
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-20
          -left-20
          h-64
          w-64
          rounded-full
        "
        style={{
          backgroundColor: COLORES.dustyRose,
          opacity: 0.12,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -right-20
          h-64
          w-64
          rounded-full
        "
        style={{
          backgroundColor: COLORES.englishRose,
          opacity: 0.14,
        }}
      />

      {/* ======================================
          CONTENIDO
      ====================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
        "
      >
        {/* ======================================
            ENCABEZADO
        ====================================== */}

        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={animacion}
          className="
            text-center
            mb-14
            sm:mb-20
          "
        >
          {/* ORNAMENTO SUPERIOR */}

          <div className="mb-7">
            <Ornamento ancho="w-16" />
          </div>

          {/* SUBTÍTULO */}

          <p
            className="
              uppercase
              tracking-[0.25em]
              sm:tracking-[0.35em]
              text-[11px]
              sm:text-sm
              font-playfair
            "
            style={{
              color: COLORES.vintageMauve,
            }}
          >
            {textos.subtitulo}
          </p>

          {/* TÍTULO */}

          <h2
            className="
              mt-5
              font-playfair
              uppercase
              tracking-[0.12em]
              sm:tracking-[0.2em]
              text-2xl
              sm:text-4xl
              lg:text-5xl
              leading-relaxed
            "
            style={{
              color: COLORES.texto,
            }}
          >
            {textos.titulo}
          </h2>

          {/* LÍNEA DECORATIVA */}

          <div className="mt-5">
            <Ornamento ancho="w-12" />
          </div>

          {/* DESCRIPCIÓN */}

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              font-playfair
              text-base
              sm:text-lg
              leading-relaxed
            "
            style={{
              color: COLORES.texto,
            }}
          >
            {textos.descripcion}
          </p>
        </motion.div>

        {/* ======================================
            PADRES DE LOS NOVIOS
        ====================================== */}

        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            staggerChildren: 0.2,
          }}
          className="
            relative
            grid
            grid-cols-1
            md:grid-cols-2
            gap-14
            md:gap-10
            lg:gap-16
            items-start
          "
        >
          {/* DIVISIÓN VERTICAL EN LAPTOP */}

          <div
            className="
              hidden
              md:block
              absolute
              left-1/2
              top-4
              bottom-4
              w-px
              -translate-x-1/2
            "
            style={{
              backgroundColor:
                COLORES.roseGold,
              opacity: 0.55,
            }}
          />

          <BloqueFamilia {...padresNovia} />

          <BloqueFamilia {...padresNovio} />
        </motion.div>

        {/* ======================================
            SEPARADOR DE PADRINOS
        ====================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            my-16
            sm:my-20
          "
        >
          <Ornamento ancho="w-24" />
        </motion.div>

        {/* ======================================
            PADRINOS
        ====================================== */}

        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            mx-auto
            max-w-xl
            text-center
          "
        >
          <BloqueFamilia
            {...padrinos}
            destacado
          />
        </motion.div>

        {/* ======================================
            FRASE FINAL
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
          }}
          className="
            mt-16
            sm:mt-20
            text-center
          "
        >
          <div
            className="
              flex
              justify-center
              items-center
              gap-4
              mb-7
            "
          >
            <span
              className="w-14 h-px"
              style={{
                backgroundColor:
                  COLORES.roseGold,
              }}
            />

            <Heart
              size={19}
              strokeWidth={1.2}
              style={{
                color: COLORES.roseGold,
              }}
            />

            <span
              className="w-14 h-px"
              style={{
                backgroundColor:
                  COLORES.roseGold,
              }}
            />
          </div>

          <p
            className="
              mx-auto
              max-w-xl
              font-playfair
              italic
              text-base
              sm:text-xl
              leading-relaxed
            "
            style={{
              color: COLORES.texto,
            }}
          >
            {textos.fraseFinal}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
