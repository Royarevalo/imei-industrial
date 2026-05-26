const services = [
  {
    title: "Estructuras Metálicas",
    image: "/images/estructuras/estructura-1.jpg",
    description:
      "Fabricación, montaje y mantenimiento de estructuras industriales.",
  },

  {
    title: "Obra Civil",
    image: "/images/obra-civil/obra-1.jpg",
    description:
      "Remodelaciones, rampas, acabados y trabajos de infraestructura.",
  },

  {
    title: "Instalaciones Eléctricas",
    image: "/images/electrico/electrico-1.jpg",
    description:
      "Canalizaciones, automatización e instalaciones industriales.",
  },

  {
    title: "Líneas de Vida",
    image: "/images/lineas-vida/linea-1.jpg",
    description:
      "Sistemas de seguridad y protección para trabajos en altura.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#111111] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white mb-6">
            Nuestros Servicios
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Soluciones industriales integrales para proyectos
            comerciales, industriales y residenciales.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500 transition duration-500"
            >

              {/* Imagen */}
              <div className="overflow-hidden h-64">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Contenido */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

              </div>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}