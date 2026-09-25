import { About } from "@/components/About";
import { Achievement } from "@/components/Achievement";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Achievement />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
