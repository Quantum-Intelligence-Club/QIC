import { Metadata } from "next";
import Navbar2 from "@/components/Navbar/Navbar2";
import { EventsHero } from "@/components/Events/EventsHero";
import { FeaturedEvents } from "@/components/Events/FeaturedEvents";
import { EventSplash } from "@/components/Events/EventSplash";
import { Footer } from "@/components/Footer/Footer";
import "./events.css";

export const metadata: Metadata = {
  title: "Events - QIC Quantum Intelligence Club",
  description: "Upcoming events and workshops by the Quantum Intelligence Club at VIT Bhopal University.",
  openGraph: {
    title: "Events - QIC Quantum Intelligence Club",
    description: "Upcoming events and workshops by the Quantum Intelligence Club at VIT Bhopal University.",
    images: ["/hero.jpeg"],
  },
};

export default function EventsPage() {
  return (
    <main className="events-page-root">
      <section className="view-1">
        <Navbar2 />
        <div className="line"></div>
      </section>
      <EventSplash />
       <section className="view-1">
        <div className="line"></div>
        <EventsHero />
      </section>
      <FeaturedEvents />
      <Footer />
    </main>
  );
}
