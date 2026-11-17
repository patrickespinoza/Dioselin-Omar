
import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  UtensilsCrossed,
  Heart,
  Music2,
  Flower2,
  Cake,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const CONFIG = {
  subtitulo: "Momentos especiales",
  titulo: "Itinerario",
  descripcion:
    "Cada instante será parte de una historia inolvidable. Acompáñanos a celebrar cada momento.",
  fraseFinal: "¡Celebremos juntos!",
};

// ==========================================
// EVENTOS DEL ITINERARIO
// ==========================================

const eventos = [
  {
    titulo: "Ceremonia Religiosa",
    hora: "2:00 p. m.",
    icono: Church,
  },
  {
    titulo: "Comida",
    hora: "3:30 p. m. – 6:30 p. m.",
    icono: UtensilsCrossed,
  },
  {
    titulo: "Nuestro Baile",
    hora: "6:30 p. m. – 7:30 p. m.",
    icono: Heart,
  },
  {
    titulo: "Pastel",
    hora: "7:30 p. m. – 8:00 p. m.",
    icono: Cake,
  },
  {
    titulo: "Fiesta Baile",
    hora: "8:00 p. m.",
    icono: Music2,
  },
];

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

const animacionEntrada = {
  oculto: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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
        backgroundColor: COLORES.champagne,
      }}
    />

    <span
      className="text-xl leading-none"
      style={{
        color: COLORES.champagne,
      }}
    >
      ❧
    </span>

    <span
      className={`${ancho} h-px`}
      style={{
        backgroundColor: COLORES.champagne,
      }}
    />
  </div>
);

// ==========================================
// COMPONENTE DE CADA EVENTO
// ==========================================

const EventoItinerario = ({
  titulo,
  hora,
  icono: Icono,
  ultimo,
}) => {
  return (
    <motion.div
      variants={animacionEntrada}
      className="
        relative
        flex
        items-stretch
        gap-4
        sm:gap-8
      "
    >
      {/* ======================================
          ICONO Y LÍNEA VERTICAL
      ====================================== */}

      <div
        className="
          relative
          flex
          flex-col
          items-center
          shrink-0
          w-14
          sm:w-20
        "
      >
        {/* CÍRCULO DEL ICONO */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-center
            w-14
            h-14
            sm:w-20
            sm:h-20
            rounded-full
            border
          "
          style={{
            borderColor: COLORES.champagne,
            backgroundColor: COLORES.vintageMauve,
          }}
        >
          <Icono
            size={26}
            strokeWidth={1.25}
            className="sm:w-8 sm:h-8"
            style={{
              color: COLORES.marfil,
            }}
          />
        </div>

        {/* LÍNEA DE TIEMPO */}

        {!ultimo && (
          <div
            className="
              w-px
              flex-1
              min-h-10
            "
            style={{
              backgroundColor: COLORES.champagne,
              opacity: 0.75,
            }}
          />
        )}
      </div>

      {/* ======================================
          INFORMACIÓN DEL EVENTO
      ====================================== */}

      <div
        className={`
          flex-1
          min-w-0
          pt-1
          ${ultimo ? "pb-0" : "pb-12 sm:pb-16"}
        `}
      >
        {/* HORA */}

        <p
          className="
            font-playfair
            text-sm
            sm:text-lg
            uppercase
            tracking-[0.06em]
            sm:tracking-[0.12em]
            leading-relaxed
          "
          style={{
            color: COLORES.champagne,
          }}
        >
          {hora}
        </p>

        {/* TÍTULO */}

        <h3
          className="
            mt-3
            font-playfair
            text-xl
            sm:text-2xl
            lg:text-3xl
            leading-relaxed
          "
          style={{
            color: COLORES.marfil,
          }}
        >
          {titulo}
        </h3>

        {/* DETALLE DECORATIVO */}

        <div
          className="
            mt-4
            w-12
            h-px
          "
          style={{
            backgroundColor: COLORES.champagne,
            opacity: 0.65,
          }}
        />
      </div>
    </motion.div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Itinerario() {
  return (
    <section
      id="itinerario"
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
        backgroundColor: COLORES.vintageMauve,
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
          borderColor: COLORES.champagne,
          opacity: 0.75,
        }}
      />

      {/* ======================================
          DECORACIÓN SUPERIOR
      ====================================== */}

      <div
        className="
          absolute
          top-8
          left-1/2
          -translate-x-1/2
          flex
          items-center
          gap-3
        "
        aria-hidden="true"
      >
        <span
          className="w-12 sm:w-20 h-px"
          style={{
            backgroundColor: COLORES.champagne,
          }}
        />

        <span
          className="text-xl"
          style={{
            color: COLORES.champagne,
          }}
        >
          ◇
        </span>

        <span
          className="w-12 sm:w-20 h-px"
          style={{
            backgroundColor: COLORES.champagne,
          }}
        />
      </div>

      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
        "
      >
        {/* ======================================
            ENCABEZADO
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          }}
          className="
            text-center
            mb-14
            sm:mb-20
          "
        >
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
              color: COLORES.champagne,
            }}
          >
            {CONFIG.subtitulo}
          </p>

          {/* TÍTULO */}

          <h2
            className="
              mt-6
              font-playfair
              uppercase
              tracking-[0.14em]
              sm:tracking-[0.22em]
              text-3xl
              sm:text-4xl
              lg:text-5xl
            "
            style={{
              color: COLORES.marfil,
            }}
          >
            {CONFIG.titulo}
          </h2>

          {/* ORNAMENTO */}

          <div className="my-8">
            <Ornamento ancho="w-16" />
          </div>

          {/* DESCRIPCIÓN */}

          <p
            className="
              mx-auto
              max-w-xl
              font-playfair
              text-base
              sm:text-lg
              leading-relaxed
            "
            style={{
              color: COLORES.marfil,
            }}
          >
            {CONFIG.descripcion}
          </p>
        </motion.div>

        {/* ======================================
            LÍNEA DE TIEMPO
        ====================================== */}

        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            staggerChildren: 0.18,
          }}
          className="
            mx-auto
            max-w-2xl
            px-2
            sm:px-6
          "
        >
          {eventos.map((evento, index) => (
            <EventoItinerario
              key={`${evento.titulo}-${index}`}
              {...evento}
              ultimo={
                index === eventos.length - 1
              }
            />
          ))}
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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="
            mt-16
            sm:mt-20
            text-center
          "
        >
          <Ornamento ancho="w-20" />

          <p
            className="
              mt-8
              font-cursiveDancing
              text-4xl
              sm:text-5xl
            "
            style={{
              color: COLORES.marfil,
            }}
          >
            {CONFIG.fraseFinal}
          </p>

          <Flower2
            size={28}
            strokeWidth={1}
            className="mx-auto mt-7"
            style={{
              color: COLORES.champagne,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
