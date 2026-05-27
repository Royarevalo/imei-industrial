import Clients from "@/components/Clients";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroCarousel from "@/components/HeroCarousel";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        className="
        bg-black
        text-white
        overflow-hidden
        "
      >

        {/* HERO CARRUSEL */}

        <HeroCarousel />

        {/* QUIÉNES SOMOS */}

        <About />

        {/* SERVICIOS */}

        <Services />

        {/* PROYECTOS DESTACADOS */}

      <Clients />

        {/* CONTACTO */}

        <ContactForm />

        {/* UBICACIÓN */}

        <Map />

        {/* FOOTER */}

        <Footer />

        {/* WHATSAPP */}

        <WhatsappButton />

      </main>

    </>
  );
}