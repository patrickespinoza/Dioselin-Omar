
import React from "react";
import { motion } from "framer-motion";
import { Heart, Flower2 } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const CONFIG = {
  subtitulo: "Nuestro gran día",
  titulo: "Código de Vestimenta",
  codigo: "Formal",

  descripcion:
    "Nos encantará verte elegante para celebrar este día tan especial junto a nosotros.",

  tituloDamas: "Para las damas",

  mensajeDamas:
    "Agradecemos reservar los siguientes colores para la novia.",

  // COLORES RESERVADOS PARA LA NOVIA
  coloresReservados: [
    {
      nombre: "Ivory",
      color: "#FFFFF0",
    },
    {
      nombre: "Champagne",
      color: "#E8D4B0",
    },
    {
      nombre: "Gold",
      color: "#D4AF37",
    },
  ],
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
// ORNAMENTO CLÁSICO
// ==========================================

const Ornamento = ({ ancho = "w-16" }) => (
  <div
    className="
      flex
      items-center
      justify-center
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
// COMPONENTE PRINCIPAL
// ==========================================

export default function Vestimenta() {
  return (
    <section
      id="vestimenta"
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
        backgroundColor: COLORES.englishRose,
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
          opacity: 0.8,
        }}
      />

      {/* ======================================
          MARCO INTERIOR DECORATIVO
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          sm:inset-9
          rounded-tl-[28px]
          rounded-br-[28px]
          border
        "
        style={{
          borderColor: COLORES.marfil,
          opacity: 0.4,
        }}
      />

      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-3xl
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* ======================================
            DECORACIÓN SUPERIOR
        ====================================== */}

        <Flower2
          size={32}
          strokeWidth={1}
          className="mb-7"
          style={{
            color: COLORES.texto,
          }}
        />

        {/* SUBTÍTULO */}

        <p
          className="
            font-playfair
            uppercase
            tracking-[0.25em]
            sm:tracking-[0.35em]
            text-xs
            sm:text-sm
          "
          style={{
            color: COLORES.texto,
          }}
        >
          {CONFIG.subtitulo}
        </p>

        {/* ======================================
            TÍTULO PRINCIPAL
        ====================================== */}

        <h2
          className="
            mt-6
            font-playfair
            text-3xl
            sm:text-4xl
            lg:text-5xl
            uppercase
            tracking-[0.08em]
            sm:tracking-[0.15em]
            leading-relaxed
          "
          style={{
            color: COLORES.texto,
          }}
        >
          {CONFIG.titulo}
        </h2>

        {/* SEPARADOR */}

        <div className="my-8">
          <Ornamento ancho="w-16" />
        </div>

        {/* ======================================
            CÓDIGO FORMAL
        ====================================== */}

        <motion.h3
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            font-cursiveDancing
            text-6xl
            sm:text-7xl
            lg:text-8xl
            leading-tight
          "
          style={{
            color: COLORES.texto,
          }}
        >
          {CONFIG.codigo}
        </motion.h3>

        {/* DESCRIPCIÓN */}

        <p
          className="
            mt-7
            max-w-xl
            font-playfair
            text-base
            sm:text-xl
            leading-relaxed
          "
          style={{
            color: COLORES.texto,
          }}
        >
          {CONFIG.descripcion}
        </p>

        {/* ======================================
            SEPARADOR PARA DAMAS
        ====================================== */}

        <div
          className="
            mt-12
            mb-10
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span
            className="w-14 sm:w-24 h-px"
            style={{
              backgroundColor: COLORES.roseGold,
            }}
          />

          <Heart
            size={19}
            strokeWidth={1.2}
            style={{
              color: COLORES.texto,
            }}
          />

          <span
            className="w-14 sm:w-24 h-px"
            style={{
              backgroundColor: COLORES.roseGold,
            }}
          />
        </div>

        {/* ======================================
            MENSAJE PARA LAS DAMAS
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="
            flex
            flex-col
            items-center
            text-center
            w-full
          "
        >
          <h3
            className="
              font-cursiveDancing
              text-4xl
              sm:text-5xl
              lg:text-6xl
            "
            style={{
              color: COLORES.texto,
            }}
          >
            {CONFIG.tituloDamas}
          </h3>

          <p
            className="
              mt-6
              max-w-lg
              font-playfair
              text-lg
              sm:text-2xl
              italic
              leading-relaxed
            "
            style={{
              color: COLORES.texto,
            }}
          >
            {CONFIG.mensajeDamas}
          </p>

          {/* ==================================
              COLORES RESERVADOS
          ================================== */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              items-start
              justify-center
              gap-5
              sm:gap-10
              w-full
            "
          >
            {CONFIG.coloresReservados.map(
              (item, index) => (
                <motion.div
                  key={item.nombre}
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="
                    flex
                    flex-col
                    items-center
                    gap-4
                  "
                >
                  {/* CÍRCULO DEL COLOR */}

                  <div
                    className="
                      w-20
                      h-20
                      sm:w-24
                      sm:h-24
                      rounded-full
                      border-2
                      shadow-[0_5px_15px_rgba(101,74,72,0.12)]
                    "
                    style={{
                      backgroundColor:
                        item.color,
                      borderColor:
                        COLORES.roseGold,
                    }}
                    role="img"
                    aria-label={`Color reservado: ${item.nombre}`}
                  />

                  {/* NOMBRE DEL COLOR */}

                  <p
                    className="
                      font-playfair
                      text-sm
                      sm:text-base
                      tracking-[0.04em]
                    "
                    style={{
                      color: COLORES.texto,
                    }}
                  >
                    {item.nombre}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* ======================================
            ORNAMENTO INFERIOR
        ====================================== */}

        <div className="mt-14">
          <Ornamento ancho="w-20" />
        </div>

        <Flower2
          size={27}
          strokeWidth={1}
          className="mt-6"
          style={{
            color: COLORES.texto,
          }}
        />
      </motion.div>
    </section>
  );
}
