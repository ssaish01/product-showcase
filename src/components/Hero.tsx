import { ArrowDown, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { PORTFOLIO_HERO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onExploreCaseStudies: () => void;
  onViewPhilosophy: () => void;
}

export default function Hero({ onOpenContact, onExploreCaseStudies, onViewPhilosophy }: HeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/[0.06] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-white/[0.04] to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed kicker with dot separator */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-6 font-medium">
              <span>Technical Product Management</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>GovTech & Enterprise Systems</span>
            </div>

            {/* Headline with text-wrap balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 text-balance">
              Building products that scale from{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
                0 to 1
              </span>{' '}
              – and far beyond.
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-2xl mb-8">
              Hi, I’m <strong className="text-white font-medium">Aishwarya Sriram Srinivasachary, </strong> I sit at the intersection of deep technical engineering, product discovery and design craft. Over the years, I’ve shipped 0-to-1 sovereign platforms at the <strong className="text-white font-medium">Cabinet Secretariat (Govt. of India)</strong>, driven enterprise API modernisations at <strong className="text-white font-medium">TCS</strong> and built AI-native CRM workflows at <strong className="text-white font-medium">DevRev</strong>.
            </p>
  
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                onClick={onExploreCaseStudies}
                className="group px-5 py-2.5 text-sm font-medium text-black bg-white hover:bg-white/90 rounded-lg transition-all duration-200 active:scale-95 flex items-center gap-2 shadow-sm cursor-pointer font-semibold"
              >
                <span>View Case Studies</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onViewPhilosophy}
                className="px-5 py-2.5 text-sm font-medium text-white/80 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-white/60" />
                <span>PM Philosophy</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-4 py-2.5 text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Let's Chat</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Current focus indicator as clean unboxed text */}
            <div className="flex items-center gap-3 text-xs text-white/50 border-t border-white/[0.06] pt-4">
              <span className="text-white/40 uppercase tracking-wider text-[11px]">Core Foundation</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-white/80">Population-scale GovTech, Distributed systems, AI/UX Product Discovery</span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden border border-white/[0.12] bg-white/[0.03] shadow-2xl shadow-black/80">
              <img
                src="https://github.com/ssaish01/product-showcase/blob/main/myPhoto.jpeg"
                alt="Aishwarya Sriram Srinivasachary — Technical Product Manager"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80 pointer-events-none">
                <div>
                  <div className="font-semibold text-white">Aishwarya Sriram Srinivasachary</div>
                  <div className="text-white/60 text-[11px]">Technical Product Manager</div>
                </div>
                <div className="text-right text-[11px] text-white/60 font-mono tabular-nums">
                  GovTech · Enterprise · UX
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip Below the Split */}
        <div className="mt-16 pt-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {PORTFOLIO_HERO.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono tabular-nums mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-white/90 mb-0.5">
                  {metric.label}
                </div>
                <div className="text-xs text-white/50 leading-relaxed">
                  {metric.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
