import { useState } from 'react';
import { PM_PHILOSOPHIES, PhilosophyPillar } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Quote, Sliders, Target, Users, BarChart3, Compass } from 'lucide-react';

export default function Philosophy() {
  const [activePillarId, setActivePillarId] = useState<string>(PM_PHILOSOPHIES[0].id);
  const activePillar = PM_PHILOSOPHIES.find((p) => p.id === activePillarId) || PM_PHILOSOPHIES[0];

  const iconMap: Record<string, React.ReactNode> = {
    strategy: <Target className="w-5 h-5 text-white/80" />,
    discovery: <Compass className="w-5 h-5 text-white/80" />,
    data: <BarChart3 className="w-5 h-5 text-white/80" />,
    leadership: <Users className="w-5 h-5 text-white/80" />,
  };

  return (
    <section id="philosophy" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">
            <span>Operating Framework</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>How I Build & Lead</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            PM Philosophy & Core Superpowers
          </h2>
          <p className="text-base text-white/60 leading-relaxed">
            Shipping standout software is not about guessing user needs or producing endless roadmaps. It’s about building a team rhythm centered on rapid customer learning, brutal prioritisation and true cross-functional ownership.
          </p>
        </div>

        {/* 2-Column Interactive Framework Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Superpowers Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PM_PHILOSOPHIES.map((pillar) => {
              const isActive = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? 'bg-white/[0.08] border-white/30 shadow-lg shadow-black/40'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white font-mono text-xs font-semibold shrink-0">
                    {pillar.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-base font-semibold ${isActive ? 'text-white' : 'text-white/80'}`}>
                        {pillar.title}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isActive ? 'text-white translate-x-0.5' : 'text-white/30'
                        }`}
                      />
                    </div>
                    <p className="text-xs text-white/50 line-clamp-1">
                      {pillar.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Inspector Panel */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/[0.1] rounded-2xl p-7 md:p-9 relative">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10">
                  {iconMap[activePillar.id]}
                </div>
                <div>
                  <div className="text-xs text-white/50 font-mono">Pillar {activePillar.number}</div>
                  <h3 className="text-xl font-bold text-white">{activePillar.title}</h3>
                </div>
              </div>
            </div>

            {/* Core Description */}
            <p className="text-base text-white/70 leading-relaxed mb-6">
              {activePillar.description}
            </p>

            {/* Frameworks in Toolkit (Zero-Pill discipline: unboxed metadata) */}
            <div className="mb-6">
              <div className="text-xs font-medium uppercase tracking-wider text-white/40 mb-3">
                Core Frameworks & Models Applied
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/80">
                {activePillar.frameworks.map((fw, idx) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span className="text-white font-medium">{fw}</span>
                    {idx < activePillar.frameworks.length - 1 && (
                      <span aria-hidden="true" className="text-white/30">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* In Practice */}
            <div className="bg-black/30 border border-white/[0.06] rounded-xl p-5 mb-6">
              <div className="text-xs font-medium uppercase tracking-wider text-white/40 mb-2">
                Operational Routine
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {activePillar.inPractice}
              </p>
            </div>

            {/* Quote / Governing Principle */}
            <div className="flex items-start gap-3 border-t border-white/[0.08] pt-5 text-white/60 italic text-sm">
              <Quote className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
              <span>"{activePillar.quote}"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
