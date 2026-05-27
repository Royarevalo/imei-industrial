"use client";

import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/70
      backdrop-blur-md
      border-b
      border-white/10
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-3
        flex
        items-center
        justify-between
        "
      >

        {/* LOGO */}

        <a
          href="/"
          className="flex items-center"
        >

          <img
            src="/images/logo/logo_imei.jpeg"
            alt="IMEI"
            className="
            h-16
            md:h-20
            w-auto
            object-contain
            hover:scale-105
            transition
            duration-300
            "
          />

        </a>

        {/* MENU DESKTOP */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-10
          text-sm
          uppercase
          tracking-widest
          text-white
          "
        >

          <a
            href="/"
            className="hover:text-blue-400 transition"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="hover:text-blue-400 transition"
          >
            Servicios
          </a>

          <a
            href="#proyectos"
            className="hover:text-blue-400 transition"
          >
            Proyectos
          </a>

          <a
            href="#contacto"
            className="hover:text-blue-400 transition"
          >
            Contacto
          </a>

        </nav>

        {/* BOTON CONTACTO */}

        <a
          href="#contacto"
          className="
          hidden
          md:flex
          bg-blue-600
          hover:bg-blue-700
          transition
          px-6
          py-3
          rounded-xl
          text-white
          font-semibold
          shadow-lg
          "
        >

          Cotizar

        </a>

        {/* MOBILE BUTTON */}

        <button
          className="
          md:hidden
          text-white
          text-3xl
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >

          ☰

        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div
          className="
          md:hidden
          bg-black
          border-t
          border-white/10
          "
        >

          <div
            className="
            flex
            flex-col
            gap-6
            p-6
            text-white
            text-lg
            "
          >

            <a href="/">
              Inicio
            </a>

            <a href="#servicios">
              Servicios
            </a>

            <a href="#proyectos">
              Proyectos
            </a>

            <a href="#contacto">
              Contacto
            </a>

          </div>

        </div>

      )}

    </header>

  );

}