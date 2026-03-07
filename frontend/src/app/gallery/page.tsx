import { Metadata } from "next";
import Navbar2 from "@/components/Navbar/Navbar2";
import GalleryBentoClient from "@/components/Gallery/GalleryBentoClient";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Gallery - QIC Quantum Intelligence Club",
  description: "A professional showcase of past events, workshops, and achievements of the Quantum Intelligence Club.",
};

export default function GalleryPage() {
  return (
    <main className="page-fullscreen gallery-page-root">
      <section className="nav-section">
        <Navbar2 />
        <div className="line"></div>
      </section>
      
      <GalleryBentoClient />

      <Footer />
    </main>
  );
}
