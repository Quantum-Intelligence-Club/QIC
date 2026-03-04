import Navbar2 from "@/components/Navbar/Navbar2";
import { Hero } from "@/components/Hero/Hero";
import { Values } from "@/components/Values/Values";
import { Team } from "@/components/Team/Team";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { GoogleGeminiEffectDemo } from "@/components/Google-Gemini/google-gemini-effect-demo";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { AnimatedBeamDemo } from "@/components/AnimatedBeamDemo/AnimatedBeamDemo";

export default function Home() {
  return (
    <main>
      <section className="view-1">
        <Navbar2 />
        <div className="line"></div>
        <Hero />
      </section>

      <AnimatedBeamDemo />
      <Values />
      <Testimonials />
      <Team />
      <Contact />
      {/* <GoogleGeminiEffectDemo /> */}
      <Footer />
    </main>
  );
}
