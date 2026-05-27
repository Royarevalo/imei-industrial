export default function ContactForm() {
  return (

    <section
id="contacto"
className="bg-[#111111] py-24 px-6"
>

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-5xl font-bold text-white mb-6">
            Solicita una Cotización
          </h2>

          <p className="text-gray-400">
            Cuéntanos tu proyecto y nos pondremos en contacto.
          </p>

        </div>

        <form className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Nombre"
            className="bg-[#1a1a1a] p-4 rounded-xl text-white"
          />

          <input
            type="text"
            placeholder="Empresa"
            className="bg-[#1a1a1a] p-4 rounded-xl text-white"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            className="bg-[#1a1a1a] p-4 rounded-xl text-white"
          />

          <input
            type="email"
            placeholder="Correo"
            className="bg-[#1a1a1a] p-4 rounded-xl text-white"
          />

          <select
            className="bg-[#1a1a1a] p-4 rounded-xl text-white md:col-span-2"
          >
            <option>Selecciona un servicio</option>
            <option>Obra Civil</option>
            <option>Estructuras Metálicas</option>
            <option>Instalaciones Eléctricas</option>
            <option>Líneas de Vida</option>
          </select>

          <textarea
            placeholder="Describe tu proyecto"
            rows={6}
            className="bg-[#1a1a1a] p-4 rounded-xl text-white md:col-span-2"
          />

          <button
            className="
            bg-blue-700
            hover:bg-blue-800
            p-4
            rounded-xl
            text-white
            font-bold
            md:col-span-2
            "
          >
            Solicitar cotización
          </button>

        </form>

      </div>

    </section>

  );
}