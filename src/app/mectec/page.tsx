import NavbarMectec from "@/components/mectec/navbarmectec";
import Hero from "@/components/mectec/hero";
import Stats from "@/components/mectec/stats";
import WhyUs from "@/components/mectec/why-us";
import Process from "@/components/mectec/process";
import Services from "@/components/mectec/services";
import Brands from "@/components/mectec/brands";
import Founder from "@/components/mectec/founder";
import Testimonials from "@/components/mectec/testimonials";
import Contact from "@/components/mectec/contact";
import Footer from "@/components/mectec/footer";
import WhatsAppButton from "@/components/mectec/whatsapp-button";

export default function Home() {
  return (
    <>
      <NavbarMectec />
      <main className="bg-background">
        <Hero />
        <Stats />
        <WhyUs />
        <Services />
        <Process />
        <Brands />
        <Founder />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
