import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import CaseStudyModal from './components/CaseStudyModal';
import Philosophy from './components/Philosophy';
import ArtifactsSection from './components/ArtifactsSection';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import MouseGlow from './components/MouseGlow';
import { CaseStudy } from './data/portfolioData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-white selection:bg-white/20 selection:text-white relative architectural-grid antialiased">
      {/* Subtle cursor tracking glow */}
      <MouseGlow />

      {/* Top Bar Contract Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with 2-Column Split & Metrics Strip */}
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
          onExploreCaseStudies={() => scrollToSection('case-studies')}
          onViewPhilosophy={() => scrollToSection('philosophy')}
        />

        {/* Featured Case Studies with Filter Tabs */}
        <CaseStudies onSelectCaseStudy={(study) => setSelectedCaseStudy(study)} />

        {/* PM Philosophy & 4 Superpowers */}
        <Philosophy />

        {/* Tangible PM Artifacts (Interactive RICE Model, PRD Viewer, Roadmap) */}
        <ArtifactsSection />

        {/* Leadership Trajectory & Career Experience */}
        <Experience />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Direct Contact & Scheduling Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
