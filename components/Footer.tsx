export default function Footer() {
  return (

    <footer className="bg-[#0a0a0a] text-white py-16 px-6 border-t border-white/10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Empresa */}
        <div>

          <img
            src="/images/logo/logo.png"
            alt="IMEI"
            className="h-16 mb-6"
          />

          <p className="text-gray-400">

            Soluciones integrales en obra civil,
            estructuras metálicas y mantenimiento industrial.

          </p>

        </div>

        {/* Contacto */}

        <div>

          <h3 className="font-bold text-xl mb-6">
            Contacto
          </h3>

          <div className="space-y-4 text-gray-400">

            <p>
              📞 7226484471
            </p>

            <p>
              ✉ administracion.imei@gmail.com
            </p>

            <p>
              📍 Santiago Tianguistenco,
              Estado de México
            </p>

          </div>

        </div>

        {/* Menú */}

        <div>

          <h3 className="font-bold text-xl mb-6">

            Navegación

          </h3>

          <div className="space-y-4 text-gray-400">

            <p>Inicio</p>
            <p>Servicios</p>
            <p>Proyectos</p>
            <p>Contacto</p>

          </div>

        </div>

      </div>

      <div className="text-center text-gray-500 mt-12">

        © 2026 IMEI - Todos los derechos reservados

      </div>

    </footer>

  );
}