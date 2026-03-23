import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="bg-night overflow-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Projects />
      <Process />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatBot />
      <WhatsAppFloat />
    </main>
  );
}
