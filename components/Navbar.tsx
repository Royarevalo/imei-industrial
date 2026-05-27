"use client";

import { useState } from "react";

export default function Navbar() {

const [menuOpen,setMenuOpen]=useState(false);

return (

<header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">

<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

{/* Logo */}

<div className="flex items-center gap-3">

<img
src="/images/logo/logo.png"
alt="IMEI"
className="h-12"
/>

<div>

<h1 className="text-white font-bold">
IMEI
</h1>

<p className="text-gray-400 text-xs">
Estructuras Industriales
</p>

</div>

</div>

{/* Desktop Menu */}

<nav className="hidden md:flex gap-8 text-white">

<a href="/">Inicio</a>

<a href="#servicios">
Servicios
</a>

<a href="#proyectos">
Proyectos
</a>

<a href="#contacto">
Contacto
</a>

</nav>

{/* Botón hamburguesa */}

<button
className="md:hidden text-white text-3xl"
onClick={()=>setMenuOpen(!menuOpen)}
>

☰

</button>

</div>

{/* Mobile Menu */}

{menuOpen && (

<div className="md:hidden bg-[#111111] p-6">

<div className="flex flex-col gap-6 text-white">

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

)

}