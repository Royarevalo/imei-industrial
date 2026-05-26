import Services from "@/components/Services";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
  <Navbar />

  <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">

        {/* Fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/hero/hero-1.jpg')",
          }}
        />

        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Contenido */}
        <div className="relative z-10 text-center px-6">

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            IMEI
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Instalaciones y Montaje de
            Estructuras Industriales
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
            Soluciones integrales en obra civil,
            estructuras metálicas y mantenimiento industrial.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <button className="bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-xl text-lg font-semibold transition">
              Ver Servicios
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl text-lg font-semibold transition">
              Contactar
            </button>

          </div>
        </div>
      </section>
<Services />
    </main>
    </>
  );
}