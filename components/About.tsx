import Image from "next/image";

export default function About() {
  return (

    <section
      className="
      bg-white
      text-black
      py-32
      px-8
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-20
        items-center
        "
      >

        {/* Texto */}

        <div>

          <p
            className="
            text-blue-700
            uppercase
            tracking-[4px]
            font-bold
            mb-4
            "
          >

            ¿Quiénes Somos?

          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-bold
            leading-tight
            mb-8
            "
          >

            Experiencia y soluciones
            para proyectos industriales

          </h2>

          <p
            className="
            text-gray-600
            leading-8
            text-lg
            mb-10
            "
          >

            IMEI ofrece soluciones integrales
            en obra civil, estructuras metálicas,
            instalaciones industriales y mantenimiento.

            Nuestro objetivo es brindar calidad,
            seguridad y eficiencia en cada proyecto.

          </p>

          {/* Características */}

          <div
            className="
            grid
            grid-cols-2
            gap-6
            "
          >

            <div
              className="
              border-l-4
              border-blue-700
              pl-4
              "
            >

              <h3 className="font-bold mb-2">

                Planeación

              </h3>

              <p className="text-gray-500">

                Desarrollo y gestión de proyectos.

              </p>

            </div>

            <div
              className="
              border-l-4
              border-blue-700
              pl-4
              "
            >

              <h3 className="font-bold mb-2">

                Construcción

              </h3>

              <p className="text-gray-500">

                Soluciones integrales industriales.

              </p>

            </div>

            <div
              className="
              border-l-4
              border-blue-700
              pl-4
              "
            >

              <h3 className="font-bold mb-2">

                Seguridad

              </h3>

              <p className="text-gray-500">

                Compromiso con procesos seguros.

              </p>

            </div>

            <div
              className="
              border-l-4
              border-blue-700
              pl-4
              "
            >

              <h3 className="font-bold mb-2">

                Calidad

              </h3>

              <p className="text-gray-500">

                Mejora continua y satisfacción.

              </p>

            </div>

          </div>

        </div>

        {/* Imagen */}

        <div>

          <Image
            src="/images/proyectos/imagen_20.jpeg"
            alt="IMEI"
            width={900}
            height={700}
            className="
            rounded-3xl
            shadow-2xl
            w-full
            h-[600px]
            object-cover
            "
          />

        </div>

      </div>

    </section>

  );
}