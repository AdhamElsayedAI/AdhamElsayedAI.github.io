import { About } from "@/components/About";
import { Achievement } from "@/components/Achievement";
import { BackToTop } from "@/components/BackToTop";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { ReferenceEnhancements } from "@/components/ReferenceEnhancements";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <ReferenceEnhancements />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Achievement />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
