
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const CONFIG = {
  titulo: "¡Estás invitado!",
  texto:
    "Nos encantaría que nos acompañaras a celebrar el comienzo de nuestra historia juntos.",

  frase: "Falta para nuestro gran día",

  // 13 de febrero de 2027, 2:00 PM
  // Zona horaria de México (UTC-6)
  fecha: "2027-02-13T14:00:00-06:00",
};

// ==========================================
// COLORES CHATEAU ROSE
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
// CALCULAR TIEMPO RESTANTE
// ==========================================

const calcularTiempo = (fecha) => {
  const diferencia =
    new Date(fecha).getTime() - Date.now();

  if (diferencia <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };
  }

  return {
    dias: Math.floor(
      diferencia / (1000 * 60 * 60 * 24)
    ),

    horas: Math.floor(
      (diferencia / (1000 * 60 * 60)) % 24
    ),

    minutos: Math.floor(
      (diferencia / (1000 * 60)) % 60
    ),

    segundos: Math.floor(
      (diferencia / 1000) % 60
    ),
  };
};

// ==========================================
// COMPONENTE CONTADOR
// ==========================================

export default function Contador({
  titulo = CONFIG.titulo,
  texto = CONFIG.texto,
  frase = CONFIG.frase,
  fecha = CONFIG.fecha,
}) {
  const [tiempo, setTiempo] = useState(() =>
    calcularTiempo(fecha)
  );

  useEffect(() => {
    setTiempo(calcularTiempo(fecha));

    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo(fecha));
    }, 1000);

    return () => clearInterval(intervalo);
  }, [fecha]);

  const unidades = [
    {
      nombre: "DÍAS",
      valor: tiempo.dias,
    },
    {
      nombre: "HORAS",
      valor: tiempo.horas,
    },
    {
      nombre: "MINUTOS",
      valor: tiempo.minutos,
    },
    {
      nombre: "SEGUNDOS",
      valor: tiempo.segundos,
    },
  ];

  return (
    <section
      id="contador"
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
          MARCO CLÁSICO EXTERIOR
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-3
          sm:inset-6
          border
          rounded-tl-[35px]
          rounded-br-[35px]
        "
        style={{
          borderColor: "rgba(248,241,235,0.55)",
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
          max-w-5xl
          mx-auto
          text-center
        "
      >
        {/* TÍTULO */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            font-cursiveDancing
            text-5xl
            sm:text-6xl
            lg:text-7xl
            leading-tight
          "
          style={{
            color: COLORES.marfil,
          }}
        >
          {titulo}
        </motion.h2>

        {/* DESCRIPCIÓN */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="
            mt-7
            mx-auto
            max-w-2xl
            font-playfair
            text-base
            sm:text-xl
            lg:text-2xl
            leading-relaxed
          "
          style={{
            color: COLORES.marfil,
          }}
        >
          {texto}
        </motion.p>

        {/* SEPARADOR */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-4
            my-10
          "
        >
          <div
            className="h-px w-16 sm:w-28"
            style={{
              backgroundColor:
                COLORES.champagne,
            }}
          />

          <span
            className="text-lg"
            style={{
              color: COLORES.champagne,
            }}
          >
            ❧
          </span>

          <div
            className="h-px w-16 sm:w-28"
            style={{
              backgroundColor:
                COLORES.champagne,
            }}
          />
        </div>

        {/* FRASE */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.25,
          }}
          className="
            font-playfair
            uppercase
            tracking-[0.18em]
            text-sm
            sm:text-lg
            lg:text-xl
          "
          style={{
            color: COLORES.marfil,
          }}
        >
          {frase}
        </motion.p>

        {/* ======================================
            CUENTA REGRESIVA
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            mt-12
            sm:mt-16
            grid
            grid-cols-4
            gap-2
            sm:gap-4
            lg:gap-6
            max-w-3xl
            mx-auto
          "
        >
          {unidades.map((unidad) => (
            <div
              key={unidad.nombre}
              className="
                flex
                flex-col
                items-center
                justify-center
                min-w-0
                py-5
                px-1
                sm:py-8
                sm:px-4
                rounded-xl
                sm:rounded-2xl
                border
              "
              style={{
                borderColor:
                  "rgba(248,241,235,0.8)",
                backgroundColor:
                  "rgba(248,241,235,0.04)",
              }}
            >
              {/* NÚMERO */}

              <span
                className="
                  font-playfair
                  text-3xl
                  sm:text-5xl
                  lg:text-6xl
                  font-normal
                  leading-none
                  tabular-nums
                "
                style={{
                  color: COLORES.marfil,
                }}
              >
                {String(unidad.valor).padStart(
                  2,
                  "0"
                )}
              </span>

              {/* ETIQUETA */}

              <span
                className="
                  mt-4
                  text-[9px]
                  sm:text-xs
                  font-playfair
                  uppercase
                  tracking-[0.06em]
                  sm:tracking-[0.18em]
                "
                style={{
                  color: COLORES.champagne,
                }}
              >
                {unidad.nombre}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ======================================
            FECHA DE LA BODA
        ====================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.35,
          }}
          className="mt-12"
        >
          <p
            className="
              font-playfair
              uppercase
              tracking-[0.15em]
              text-sm
              sm:text-lg
            "
            style={{
              color: COLORES.marfil,
            }}
          >
            13 de febrero de 2027
          </p>

          <p
            className="
              mt-3
              font-playfair
              italic
              text-base
              sm:text-xl
            "
            style={{
              color: COLORES.champagne,
            }}
          >
            2:00 de la tarde
          </p>
        </motion.div>

        {/* ======================================
            ORNAMENTO INFERIOR
        ====================================== */}

        <div
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span
            className="w-16 sm:w-24 h-px"
            style={{
              backgroundColor:
                COLORES.champagne,
            }}
          />

          <span
            className="text-2xl"
            style={{
              color: COLORES.champagne,
            }}
          >
            ❦
          </span>

          <span
            className="w-16 sm:w-24 h-px"
            style={{
              backgroundColor:
                COLORES.champagne,
            }}
          />
        </div>
      </div>
    </section>
  );
}
