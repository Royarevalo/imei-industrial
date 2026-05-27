import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Obra Civil",
    description:
      "Construcción, ampliaciones, remodelaciones y adecuaciones industriales.",
    image: "/images/obra-civil/imagen_16.jpeg",
  },

  {
    title: "Estructuras Metálicas",
    description:
      "Fabricación y montaje de estructuras metálicas industriales.",
    image: "/images/estructuras/imagen_1.jpeg",
  },

  {
    title: "Instalaciones Industriales",
    description:
      "Instalaciones eléctricas y adecuaciones especializadas.",
    image: "/images/proyectos/imagen_18.jpeg",
  },

  {
    title: "Líneas de Vida",
    description:
      "Sistemas de seguridad y protección para trabajos en altura.",
    image: "/images/lineas-vida/imagen_45.jpeg",
  },
];

export default function Services() {
  return (

    <AnimatedSection>

      <section
        id="servicios"
        className="
        bg-[#f5f5f5]
        text-black
        py-32
        px-8
        "
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p
              className="
              text-blue-700
              font-bold
              uppercase
              tracking-[4px]
              mb-4
              "
            >
              Servicios
            </p>

            <h2
              className="
              text-5xl
              font-bold
              mb-6
              "
            >
              Soluciones Especializadas
            </h2>

            <p
              className="
              text-gray-500
              max-w-2xl
              mx-auto
              "
            >
              Servicios industriales integrales
              para proyectos de construcción,
              mantenimiento y desarrollo.
            </p>

          </div>

          <div
            className="
            grid
            md:grid-cols-2
            gap-10
            "
          >

            {services.map((service, index) => (

              <div
                key={index}
                className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-xl
                hover:scale-[1.02]
                transition
                duration-500
                "
              >

                <div className="relative h-[300px]">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-8">

                  <h3
                    className="
                    text-3xl
                    font-bold
                    mb-4
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                    text-gray-600
                    leading-7
                    "
                  >
                    {service.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </AnimatedSection>

  );
}
