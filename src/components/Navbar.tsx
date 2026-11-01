import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="text-base md:text-lg font-semibold tracking-tight text-white hover:text-white/80 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>Aishwarya Sriram Srinivasachary</span>
          <span className="text-white/30 text-xs font-normal">/</span>
          <span className="text-xs font-normal text-white/50 tracking-normal">Technical PM</span>
        </a>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/60">
          <a
            href="#case-studies"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Case Studies
          </a>
          <a
            href="#philosophy"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            PM Philosophy
          </a>
          <a
            href="#artifacts"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Artifacts & PRD
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </header>
  );
}
