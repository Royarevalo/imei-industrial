"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/proyectos/imagen_18.jpeg",
  "/images/proyectos/imagen_19.jpeg",
  "/images/proyectos/imagen_20.jpeg",
  "/images/proyectos/imagen_21.jpeg",
  "/images/proyectos/imagen_22.jpeg",
];

export default function HeroCarousel() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === images.length - 1
          ? 0
          : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section
      className="
      relative
      h-screen
      overflow-hidden
      "
    >

      {/* Imágenes */}

      {images.map((image, index) => (

        <div
          key={index}
          className={`
          absolute
          inset-0
          transition-opacity
          duration-[2000ms]

          ${
            current === index
              ? "opacity-100"
              : "opacity-0"
          }
          `}
        >

          <Image
            src={image}
            alt="Proyecto IMEI"
            fill
            priority={index === 0}
            quality={100}
            sizes="100vw"
            className="
            object-cover
            "
          />

        </div>

      ))}

      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/90
        via-black/60
        to-transparent
        z-10
        "
      />

      {/* Contenido */}

      <div
        className="
        relative
        z-20
        h-full
        flex
        items-center
        max-w-7xl
        mx-auto
        px-8
        "
      >

        <div className="max-w-4xl">

          <p
            className="
            text-blue-500
            uppercase
            tracking-[5px]
            mb-5
            "
          >
            IMEI
          </p>

          <h1
            className="
            text-5xl
            md:text-8xl
            font-bold
            leading-tight
            mb-8
            "
          >

            Soluciones Industriales
            y Obra Civil

          </h1>

          <p
            className="
            text-gray-300
            text-lg
            md:text-2xl
            mb-12
            max-w-3xl
            "
          >

            Especialistas en estructuras
            metálicas, instalaciones industriales,
            mantenimiento y desarrollo
            de proyectos.

          </p>

          <div
            className="
            flex
            flex-wrap
            gap-4
            "
          >

            <div className="bg-black/30 px-6 py-4 rounded-xl backdrop-blur-sm">
              🏗️ Obra Civil
            </div>

            <div className="bg-black/30 px-6 py-4 rounded-xl backdrop-blur-sm">
              🏭 Estructuras Metálicas
            </div>

            <div className="bg-black/30 px-6 py-4 rounded-xl backdrop-blur-sm">
              ⚡ Instalaciones Industriales
            </div>

          </div>

        </div>

      </div>

    </section>

  );

}