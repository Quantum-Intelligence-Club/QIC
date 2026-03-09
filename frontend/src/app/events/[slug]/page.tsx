import { notFound } from "next/navigation";
import { pastEvents } from "@/lib/data/past-events";
import { slugify } from "@/lib/utils";
import Navbar2 from "@/components/Navbar/Navbar2";
import { ScrollGallery } from "@/components/Gallery/ScrollGallery";
import { Footer } from "@/components/Footer/Footer";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
     notFound();
  }

  // Find event by comparing slugified titles
  const event = pastEvents.find((e) => slugify(e.title) === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="page-standard events-page-root">
      <section className="nav-section">
        <Navbar2 />
        <div className="line"></div>
      </section>

      {/* Hero Section for Event Detail */}
      <section className="event-detail-hero pt-24 pb-20 px-6 md:px-12 flex flex-col items-center text-center">
        <div className="text-[#84cc16] font-mono text-xs sm:text-sm font-bold tracking-widest uppercase mb-6">
          {event.category} • {event.date}
        </div>
        <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] mb-10 tracking-tighter">
          {event.title}
        </h1>
        <p className="max-w-3xl text-lg md:text-xl opacity-80 leading-relaxed">
          {event.description}
        </p>
      </section>

      {/* Animated Gallery Section */}
      <section className="gallery-container-wrapper mt-32">
         {event.galleryItems && <ScrollGallery items={event.galleryItems} />}
      </section>

      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return pastEvents.map((event) => ({
    slug: slugify(event.title),
  }));
}
