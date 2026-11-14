
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Church,
  Wine,
  CalendarDays,
  Clock3,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const CONFIG = {
  titulo: "Celebración",
  subtitulo: "El día de nuestra boda",
  fecha: "13 de febrero de 2027",


  ceremonia: {
    titulo: "Ceremonia Religiosa",
    hora: "2:00 p. m.",
    lugar: "Parroquia de Santa Inés",
    direccion: "",
    ubicacion:
      "https://maps.app.goo.gl/wNqSqHzrS4Xrbyq36",
  },

  recepcion: {
    titulo: "Recepción",
    hora: "3:30 p. m.",
    lugar: "Los 4 Señoríos",
    direccion:
      "Calle Topizco No. 40, Barrio Exquitla, Zacatelco",
    ubicacion:
      "https://maps.app.goo.gl/baoCVT2N82NYMqyb9",
  },
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
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// ORNAMENTO CLÁSICO
// ==========================================

const Ornamento = ({ ancho = "w-16" }) => {
  return (
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
};

// ==========================================
// BLOQUE DE UBICACIÓN
// ==========================================

const BloqueUbicacion = ({
  datos,
  tipo = "ceremonia",
}) => {
  const esCeremonia = tipo === "ceremonia";

  const Icono = esCeremonia ? Church : Wine;

  return (
    <motion.div
      variants={animacion}
      className="
        relative
        flex
        flex-col
        items-center
        text-center
        w-full
        h-full
        px-3
        sm:px-6
      "
    >
      {/* ICONO PRINCIPAL */}

      <div
        className="
          mb-6
          flex
          items-center
          justify-center
          h-16
          w-16
          rounded-full
          border
        "
        style={{
          borderColor: COLORES.roseGold,
          backgroundColor: "rgba(217,181,173,0.12)",
        }}
      >
        <Icono
          size={29}
          strokeWidth={1.2}
          style={{
            color: COLORES.texto,
          }}
        />
      </div>

      {/* TÍTULO */}

      <h3
        className="
          font-playfair
          text-2xl
          sm:text-3xl
          leading-relaxed
        "
        style={{
          color: COLORES.texto,
        }}
      >
        {datos.titulo}
      </h3>

      {/* SEPARADOR */}

      <div className="my-5">
        <Ornamento ancho="w-10" />
      </div>

      {/* HORA */}

      <div
        className="
          flex
          items-center
          justify-center
          gap-3
          mb-6
        "
      >
        <Clock3
          size={19}
          strokeWidth={1.3}
          style={{
            color: COLORES.roseGold,
          }}
        />

        <span
          className="
            font-playfair
            text-2xl
            sm:text-3xl
          "
          style={{
            color: COLORES.texto,
          }}
        >
          {datos.hora}
        </span>
      </div>

      {/* LUGAR */}

      <h4
        className="
          font-playfair
          text-xl
          sm:text-2xl
          font-medium
          leading-relaxed
        "
        style={{
          color: COLORES.texto,
        }}
      >
        {datos.lugar}
      </h4>

      {/* DIRECCIÓN */}

      {datos.direccion && (
        <p
          className="
            mt-4
            max-w-sm
            font-playfair
            text-sm
            sm:text-base
            leading-relaxed
          "
          style={{
            color: COLORES.texto,
            opacity: 0.85,
          }}
        >
          {datos.direccion}
        </p>
      )}

      {/* BOTÓN GOOGLE MAPS */}

      <div className="mt-auto pt-9">
        <motion.a
          href={datos.ubicacion}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            px-7
            py-3.5
            font-playfair
            text-xs
            sm:text-sm
            uppercase
            tracking-[0.12em]
            shadow-sm
            transition-colors
            duration-300
            hover:brightness-95
          "
          style={{
            backgroundColor: COLORES.vintageMauve,
            color: COLORES.marfil,
          }}
        >
          <MapPin
            size={17}
            strokeWidth={1.7}
          />

          Ver ubicación
        </motion.a>
      </div>
    </motion.div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Celebracion() {
  return (
    <section
      id="celebracion"
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
        backgroundColor: COLORES.champagne,
      }}
    >
      {/* ======================================
          MARCO CLÁSICO EXTERIOR
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
          -top-28
          -left-28
          h-72
          w-72
          rounded-full
        "
        style={{
          backgroundColor: COLORES.englishRose,
          opacity: 0.15,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-28
          -right-28
          h-72
          w-72
          rounded-full
        "
        style={{
          backgroundColor: COLORES.dustyRose,
          opacity: 0.18,
        }}
      />

      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
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
          {/* ORNAMENTO */}

          <Ornamento ancho="w-16" />

          {/* SUBTÍTULO */}

          <p
            className="
              mt-7
              font-playfair
              uppercase
              tracking-[0.25em]
              sm:tracking-[0.35em]
              text-[11px]
              sm:text-sm
            "
            style={{
              color: COLORES.vintageMauve,
            }}
          >
            {CONFIG.subtitulo}
          </p>

          {/* TÍTULO */}

          <h2
            className="
              mt-5
              font-playfair
              uppercase
              tracking-[0.14em]
              sm:tracking-[0.22em]
              text-3xl
              sm:text-4xl
              lg:text-5xl
            "
            style={{
              color: COLORES.texto,
            }}
          >
            {CONFIG.titulo}
          </h2>

          {/* SEPARADOR */}

          <div className="mt-6">
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
            {CONFIG.descripcion}
          </p>

          {/* FECHA */}

          <div
            className="
              mt-9
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <CalendarDays
              size={22}
              strokeWidth={1.3}
              style={{
                color: COLORES.roseGold,
              }}
            />

            <p
              className="
                font-playfair
                text-lg
                sm:text-2xl
                uppercase
                tracking-[0.08em]
              "
              style={{
                color: COLORES.texto,
              }}
            >
              {CONFIG.fecha}
            </p>
          </div>
        </motion.div>

        {/* ======================================
            CEREMONIA Y RECEPCIÓN
        ====================================== */}

        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            staggerChildren: 0.2,
          }}
          className="
            relative
            grid
            grid-cols-1
            md:grid-cols-2
            gap-16
            md:gap-10
            lg:gap-16
            items-stretch
          "
        >
          {/* DIVISIÓN VERTICAL LAPTOP */}

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
              backgroundColor: COLORES.roseGold,
              opacity: 0.6,
            }}
          />

          {/* CEREMONIA */}

          <BloqueUbicacion
            datos={CONFIG.ceremonia}
            tipo="ceremonia"
          />

          {/* SEPARADOR CELULAR */}

          <div
            className="
              md:hidden
              flex
              justify-center
            "
          >
            <Ornamento ancho="w-16" />
          </div>

          {/* RECEPCIÓN */}

          <BloqueUbicacion
            datos={CONFIG.recepcion}
            tipo="recepcion"
          />
        </motion.div>

        {/* ======================================
            ORNAMENTO INFERIOR
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
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
              mt-6
              font-cursiveDancing
              text-3xl
              sm:text-4xl
            "
            style={{
              color: COLORES.vintageMauve,
            }}
          >
            ¡Te esperamos!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
