import { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';
import { ArrowUpRight, ChevronRight, Layers } from 'lucide-react';

interface CaseStudiesProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export default function CaseStudies({ onSelectCaseStudy }: CaseStudiesProps) {
  const [filter, setFilter] = useState<string>('All');

  const categories = [
  'All',
  'GovTech & Enterprise',
  'AI & Data',
  'Security & Cryptography'
];
  const filteredStudies = filter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.category === filter);

  return (
    <section id="case-studies" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">
              <span>Selected Work</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Featured Product Deep Dives
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-xl">
              End-to-end breakdowns detailing problem discovery, prioritization frameworks, architecture decisions and business outcomes.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === cat
                    ? 'bg-white text-black shadow-sm font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              onClick={() => onSelectCaseStudy(study)}
              className="group cursor-pointer flex flex-col bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              {/* Media Thumbnail Container with zoom on hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60 border-b border-white/[0.06]">
                <img
                  src={study.image}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/90 via-transparent to-transparent opacity-80" />
                
                {/* Unboxed Metadata in Overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/70 font-mono">
                  <span>{study.category}</span>
                  <span>{study.timeline}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Lead Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-white/95 transition-colors mb-2 text-balance leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/60 line-clamp-2 leading-relaxed mb-6">
                    {study.subtitle}
                  </p>

                  {/* Clean Key Metrics Preview */}
                  <div className="grid grid-cols-2 gap-3 py-3.5 border-y border-white/[0.06] mb-6">
                    {study.keyMetrics.slice(0, 2).map((m, i) => (
                      <div key={i}>
                        <div className="text-lg font-bold text-white font-mono tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-white/50">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Problem Snippet */}
                  <div className="text-xs text-white/60 mb-6 line-clamp-2">
                    <span className="text-white/80 font-medium">Core Challenge: </span>
                    {study.theProblem.headline}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-white group-hover:text-white/90">
                  <span className="flex items-center gap-1.5">
                    <span>Read Full Case Study</span>
                    <ChevronRight className="w-4 h-4 text-white/50 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
                  </span>
                  <span className="text-white/40 font-mono text-[11px]">{study.theStrategy.framework}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
