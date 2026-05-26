export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src="/images/logo/logo.png"
            alt="IMEI Logo"
            className="h-12 w-auto"
          />

          <div>
            <h1 className="text-white font-bold text-xl">
              IMEI
            </h1>

            <p className="text-gray-400 text-xs">
              Estructuras Industriales
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white">

          <a href="#" className="hover:text-blue-400 transition">
            Inicio
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Nosotros
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Servicios
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Proyectos
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Contacto
          </a>

        </nav>

        {/* Botón */}
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition">
          Cotizar
        </button>

      </div>
    </header>
  );
}