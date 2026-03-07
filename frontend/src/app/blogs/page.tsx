import Navbar2 from "@/components/Navbar/Navbar2";
import { Footer } from "@/components/Footer/Footer";
import { BlogHeader } from '@/components/Blog/BlogLayout';
import BlogHero from '@/components/Blog/BlogHero';
import PodcastSection from '@/components/Blog/PodcastSection';
import SpotlightSection from '@/components/Blog/SpotlightSection';
import { NewsletterSection, MomentsSection } from '@/components/Blog/BlogSections';
import './blog.css';


export default function BlogPage() {
  return (
    <main className="page-standard blog-main">
      <section className="nav-section">
        <Navbar2 />
        <div className="line"></div>
      </section>
      
      <div className="blog-content">
        <BlogHeader />
        <BlogHero />
        <PodcastSection />
        <SpotlightSection />
        <NewsletterSection />
        <MomentsSection />
      </div>

      <Footer />
    </main>
  );
}
