export default function Map() {

  return (

    <section
      className="
      bg-black
      py-24
      px-6
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* Título */}

        <div className="text-center mb-12">

          <h2
            className="
            text-5xl
            font-bold
            text-white
            mb-6
            "
          >

            Nuestra Ubicación

          </h2>

          <p className="text-gray-400">

            Encuéntranos y visítanos.

          </p>

        </div>

        {/* Mapa */}

        <div
          className="
          rounded-3xl
          overflow-hidden
          border
          border-white/10
          shadow-2xl
          "
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.890812279597!2d-99.45698509999998!3d19.156256199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf300525fbfd3%3A0x96d4b0184183eb3e!2sTALLER%20IMEI!5e0!3m2!1ses!2smx!4v1779846036496!5m2!1ses!2smx"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>

    </section>

  );

}