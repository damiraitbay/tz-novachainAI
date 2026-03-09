import { ContactsSection } from "./components/home/ContactsSection";
import { FeaturesSection } from "./components/home/FeaturesSection";
import { Footer } from "./components/home/Footer";
import { Header } from "./components/home/Header";
import { HeroSection } from "./components/home/HeroSection";
import { RoadmapSection } from "./components/home/RoadmapSection";
import { SolutionsSection } from "./components/home/SolutionsSection";
import { TestimonialsSection } from "./components/home/TestimonialsSection";
import { navLinks } from "./lib/home-data";

export default function Home() {
  return (
    <div className="noise-bg bg-hero-grid">
      <Header navLinks={navLinks} />

      <main id="top">
        <HeroSection />
        <FeaturesSection />
        <SolutionsSection />
        <RoadmapSection />
        <TestimonialsSection />
        <ContactsSection />
      </main>

      <Footer navLinks={navLinks} />
    </div>
  );
}
