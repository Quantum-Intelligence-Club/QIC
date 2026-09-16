import { Metadata } from "next";
import Navbar2 from "@/components/Navbar/Navbar2";
import { EventsHero } from "@/components/Events/EventsHero";
import { FeaturedEvents } from "@/components/Events/FeaturedEvents";
import { EventSplash } from "@/components/Events/EventSplash";
import { Footer } from "@/components/Footer/Footer";
import "./events.css";

export const metadata: Metadata = {
  title: "Events & Workshops",
  description:
    "Explore upcoming hackathons, guest lectures, quantum workshops, and tech seminars by the Quantum Intelligence Club at VIT Bhopal University.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events & Workshops | QIC VIT Bhopal",
    description:
      "Explore upcoming hackathons, guest lectures, quantum workshops, and tech seminars by the Quantum Intelligence Club at VIT Bhopal University.",
    url: "/events",
    images: ["/hero.jpeg"],
  },
};

export default function EventsPage() {
  return (
    <main className="page-standard events-page-root">
      <section className="nav-section">
        <Navbar2 />
        <div className="line"></div>
      </section>
      <EventSplash />
       <section className="nav-section">
        <div className="line"></div>
        <EventsHero />
      </section>
      <FeaturedEvents />
      <Footer />
    </main>
  );
}
