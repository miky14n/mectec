import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import WhyUs from "@/components/why-us";
import Process from "@/components/process";
import Services from "@/components/services";
import Brands from "@/components/brands";
import Founder from "@/components/founder";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Navbar />
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
