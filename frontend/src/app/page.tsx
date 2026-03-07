import Navbar2 from "@/components/Navbar/Navbar2";
import { Hero } from "@/components/Hero/Hero";
import { Values } from "@/components/Values/Values";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { GoogleGeminiEffectDemo } from "@/components/Google-Gemini/google-gemini-effect-demo";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { AnimatedBeamDemo } from "@/components/AnimatedBeamDemo/AnimatedBeamDemo";

export default function Home() {
  return (
    <main className="page-standard">
      <section className="nav-section">
        <Navbar2 />
        <div className="line"></div>
      </section>
      <section className="hero-view">
        <Hero />
      </section>

      <AnimatedBeamDemo />
      <Values />
      <Testimonials />
      <Contact />
      {/* <GoogleGeminiEffectDemo /> */}
      <Footer />
    </main>
  );
}
