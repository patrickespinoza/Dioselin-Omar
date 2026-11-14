
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Gift,
  Landmark,
  Copy,
  Check,
  X,
  Heart,
  Flower2,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const CONFIG = {
  subtitulo: "Con mucho cariño",
  titulo: "Mesa de regalos",

  descripcion:
    "Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, te compartimos estas opciones.",

  regalo: {
    titulo: "Regalo o sobre",
    descripcion:
      "Si deseas obsequiarnos un regalo físico o un sobre, podrás entregarlo el día de nuestra celebración.",
  },

  transferencia: {
    titulo: "Transferencia bancaria",
    descripcion:
      "Si lo prefieres, puedes realizar una transferencia bancaria como muestra de cariño.",

    banco: "BBVA",

    // CLABE de 18 dígitos
    clabe: "012839015044371981",

    // NOMBRE PROVISIONAL - CAMBIAR
    titular: "María González López",
  },

  fraseFinal:
    "¡Gracias por ser parte de nuestra historia!",
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

export default function Regalos() {
  const [mostrarModal, setMostrarModal] =
    useState(false);

  const [copiado, setCopiado] =
    useState(false);

  // ========================================
  // COPIAR CLABE
  // ========================================

  const copiarClabe = async () => {
    try {
      await navigator.clipboard.writeText(
        CONFIG.transferencia.clabe
      );

      setCopiado(true);

      setTimeout(() => {
        setCopiado(false);
      }, 2500);
    } catch (error) {
      console.error(
        "No se pudo copiar la CLABE:",
        error
      );

      setCopiado(false);
    }
  };

  // ========================================
  // BLOQUEAR SCROLL AL ABRIR MODAL
  // ========================================

  useEffect(() => {
    if (!mostrarModal) return;

    const scrollAnterior =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setMostrarModal(false);
      }
    };

    window.addEventListener(
      "keydown",
      cerrarConEscape
    );

    return () => {
      document.body.style.overflow =
        scrollAnterior;

      window.removeEventListener(
        "keydown",
        cerrarConEscape
      );
    };
  }, [mostrarModal]);

  return (
    <>
      {/* ======================================
          SECCIÓN MESA DE REGALOS
      ====================================== */}

      <section
        id="regalos"
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
        {/* MARCO EXTERIOR */}

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
            opacity: 0.7,
          }}
        />

        {/* CONTENIDO */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-5xl
          "
        >
          {/* ==================================
              ENCABEZADO
          ================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              flex
              flex-col
              items-center
              text-center
            "
          >
            <Gift
              size={35}
              strokeWidth={1.1}
              style={{
                color: COLORES.roseGold,
              }}
            />

            <p
              className="
                mt-7
                font-playfair
                uppercase
                tracking-[0.25em]
                sm:tracking-[0.35em]
                text-xs
                sm:text-sm
              "
              style={{
                color: COLORES.vintageMauve,
              }}
            >
              {CONFIG.subtitulo}
            </p>

            <h2
              className="
                mt-5
                font-playfair
                uppercase
                tracking-[0.1em]
                sm:tracking-[0.18em]
                text-3xl
                sm:text-4xl
                lg:text-5xl
                leading-relaxed
              "
              style={{
                color: COLORES.texto,
              }}
            >
              {CONFIG.titulo}
            </h2>

            <div className="my-8">
              <Ornamento ancho="w-16" />
            </div>

            <p
              className="
                max-w-2xl
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
          </motion.div>

          {/* ==================================
              OPCIONES DE REGALO
          ================================== */}

          <div
            className="
              mt-14
              grid
              grid-cols-1
              md:grid-cols-2
              gap-7
              lg:gap-10
              items-stretch
            "
          >
            {/* ================================
                REGALO FÍSICO O SOBRE
            ================================ */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              className="
                relative
                flex
                flex-col
                items-center
                text-center
                border
                rounded-tl-[35px]
                rounded-br-[35px]
                px-6
                py-12
                sm:px-10
              "
              style={{
                borderColor: COLORES.roseGold,
                backgroundColor:
                  "rgba(232,222,206,0.25)",
              }}
            >
              <Gift
                size={36}
                strokeWidth={1.1}
                style={{
                  color: COLORES.vintageMauve,
                }}
              />

              <h3
                className="
                  mt-7
                  font-playfair
                  text-2xl
                  sm:text-3xl
                "
                style={{
                  color: COLORES.texto,
                }}
              >
                {CONFIG.regalo.titulo}
              </h3>

              <div className="my-6">
                <Ornamento ancho="w-10" />
              </div>

              <p
                className="
                  font-playfair
                  text-base
                  sm:text-lg
                  leading-relaxed
                "
                style={{
                  color: COLORES.texto,
                }}
              >
                {CONFIG.regalo.descripcion}
              </p>

              <Heart
                size={22}
                strokeWidth={1.2}
                className="mt-9"
                style={{
                  color: COLORES.roseGold,
                }}
              />
            </motion.div>

            {/* ================================
                TRANSFERENCIA BANCARIA
            ================================ */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="
                relative
                flex
                flex-col
                items-center
                text-center
                border
                rounded-tl-[35px]
                rounded-br-[35px]
                px-6
                py-12
                sm:px-10
              "
              style={{
                borderColor: COLORES.roseGold,
                backgroundColor:
                  "rgba(232,222,206,0.25)",
              }}
            >
              <Landmark
                size={36}
                strokeWidth={1.1}
                style={{
                  color: COLORES.vintageMauve,
                }}
              />

              <h3
                className="
                  mt-7
                  font-playfair
                  text-2xl
                  sm:text-3xl
                "
                style={{
                  color: COLORES.texto,
                }}
              >
                {CONFIG.transferencia.titulo}
              </h3>

              <div className="my-6">
                <Ornamento ancho="w-10" />
              </div>

              <p
                className="
                  font-playfair
                  text-base
                  sm:text-lg
                  leading-relaxed
                "
                style={{
                  color: COLORES.texto,
                }}
              >
                {CONFIG.transferencia.descripcion}
              </p>

              {/* BOTÓN */}

              <motion.button
                type="button"
                onClick={() =>
                  setMostrarModal(true)
                }
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  mt-auto
                  pt-0
                  relative
                  top-0
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
                  tracking-[0.1em]
                  shadow-sm
                "
                style={{
                  marginTop: "36px",
                  backgroundColor:
                    COLORES.vintageMauve,
                  color: COLORES.marfil,
                }}
              >
                <Landmark size={17} />

                Ver datos bancarios
              </motion.button>
            </motion.div>
          </div>

          {/* ==================================
              FRASE FINAL
          ================================== */}

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
              text-center
            "
          >
            <Ornamento ancho="w-20" />

            <p
              className="
                mt-7
                font-cursiveDancing
                text-3xl
                sm:text-5xl
              "
              style={{
                color: COLORES.vintageMauve,
              }}
            >
              {CONFIG.fraseFinal}
            </p>

            <Flower2
              size={27}
              strokeWidth={1}
              className="mx-auto mt-6"
              style={{
                color: COLORES.roseGold,
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ======================================
          MODAL DE DATOS BANCARIOS
      ====================================== */}

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setMostrarModal(false)
            }
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/65
              px-4
              py-6
            "
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="titulo-banco"
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="
                relative
                w-full
                max-w-md
                max-h-[90vh]
                overflow-y-auto
                rounded-tl-[35px]
                rounded-br-[35px]
                border
                px-6
                py-12
                sm:px-10
                text-center
                shadow-2xl
              "
              style={{
                backgroundColor:
                  COLORES.marfil,
                borderColor:
                  COLORES.roseGold,
              }}
            >
              {/* BOTÓN CERRAR */}

              <button
                type="button"
                onClick={() =>
                  setMostrarModal(false)
                }
                aria-label="Cerrar"
                className="
                  absolute
                  top-5
                  right-5
                  p-2
                  rounded-full
                  transition
                  hover:bg-black/5
                "
              >
                <X
                  size={23}
                  style={{
                    color: COLORES.texto,
                  }}
                />
              </button>

              {/* ICONO */}

              <Landmark
                size={35}
                strokeWidth={1.1}
                className="mx-auto"
                style={{
                  color: COLORES.roseGold,
                }}
              />

              {/* BANCO */}

              <h3
                id="titulo-banco"
                className="
                  mt-5
                  font-playfair
                  text-3xl
                  sm:text-4xl
                "
                style={{
                  color: COLORES.texto,
                }}
              >
                {CONFIG.transferencia.banco}
              </h3>

              <div className="my-7">
                <Ornamento ancho="w-12" />
              </div>

              {/* CLABE */}

              <p
                className="
                  font-playfair
                  uppercase
                  tracking-[0.15em]
                  text-xs
                  sm:text-sm
                "
                style={{
                  color:
                    COLORES.vintageMauve,
                }}
              >
                Cuenta CLABE
              </p>

              <p
                className="
                  mt-4
                  font-playfair
                  text-lg
                  sm:text-xl
                  font-semibold
                  tracking-[0.05em]
                  break-all
                "
                style={{
                  color: COLORES.texto,
                }}
              >
                {CONFIG.transferencia.clabe}
              </p>

              {/* TITULAR */}

              <p
                className="
                  mt-8
                  font-playfair
                  uppercase
                  tracking-[0.15em]
                  text-xs
                "
                style={{
                  color:
                    COLORES.vintageMauve,
                }}
              >
                Titular de la cuenta
              </p>

              <p
                className="
                  mt-3
                  font-playfair
                  text-xl
                  leading-relaxed
                "
                style={{
                  color: COLORES.texto,
                }}
              >
                {CONFIG.transferencia.titular}
              </p>

              {/* COPIAR CLABE */}

              <motion.button
                type="button"
                onClick={copiarClabe}
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  mt-9
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  px-6
                  py-4
                  font-playfair
                  text-sm
                  uppercase
                  tracking-[0.1em]
                "
                style={{
                  backgroundColor:
                    COLORES.vintageMauve,
                  color: COLORES.marfil,
                }}
              >
                {copiado ? (
                  <>
                    <Check size={18} />
                    CLABE copiada
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copiar CLABE
                  </>
                )}
              </motion.button>

              {/* MENSAJE */}

              <p
                className="
                  mt-7
                  font-cursiveDancing
                  text-3xl
                "
                style={{
                  color:
                    COLORES.vintageMauve,
                }}
              >
                ¡Muchas gracias!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
