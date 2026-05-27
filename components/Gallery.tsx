import Image from "next/image";

import AnimatedSection from "./AnimatedSection";

const projects = [
  "/images/proyectos/imagen_18.jpeg",
  "/images/proyectos/imagen_19.jpeg",
  "/images/proyectos/imagen_20.jpeg",
  "/images/proyectos/imagen_21.jpeg",
  "/images/proyectos/imagen_22.jpeg",
  "/images/proyectos/imagen_23.jpeg",
];

export default function Gallery() {
  return (
    <AnimatedSection>
            <section
id="proyectos"
className="bg-black py-24 px-6"
>

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white mb-6">
            Proyectos Realizados
          </h2>

          <p className="text-gray-400 text-lg">
            Algunos proyectos desarrollados por nuestro equipo.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((image,index)=>(

            <div
              key={index}
              className="overflow-hidden rounded-3xl group"
            >

              <Image
  src={image}
  alt="Proyecto"
  width={500}
  height={300}
  className="
  w-full
  h-[300px]
  object-cover
  group-hover:scale-110
  transition
  duration-700
  "
/>
            </div>

          ))}

        </div>

      </div>

    </section>
    </AnimatedSection>

  );
}