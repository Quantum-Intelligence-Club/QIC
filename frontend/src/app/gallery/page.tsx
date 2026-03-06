import { Metadata } from "next";
import Navbar2 from "@/components/Navbar/Navbar2";
import { GalleryBento } from "@/components/Gallery/GalleryBento";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Gallery - QIC Quantum Intelligence Club",
  description: "A professional showcase of past events, workshops, and achievements of the Quantum Intelligence Club.",
};

export default function GalleryPage() {
  return (
    <main className="gallery-page-root">
      <section className="view-1">
        <Navbar2 />
        <div className="line"></div>
      </section>
      
      <GalleryBento />

      <Footer />
    </main>
  );
}
