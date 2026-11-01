import { CAREER_HISTORY } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">
            <span>Leadership Trajectory</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Experience & Impact
          </h2>
          <p className="text-base text-white/60 leading-relaxed">
            Leading product organizations from early-stage ambiguity through rapid multi-million dollar ARR scaling and high-volume platform resilience.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {CAREER_HISTORY.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/15 transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 text-xs text-white/50 font-mono mb-2">
                    <span className="text-white font-medium">{item.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-white/80">
                    {item.company}
                  </div>
                </div>

                <div className="text-xs text-white/50 font-mono self-start lg:self-auto py-1 px-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                  {item.teamSize}
                </div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-5 max-w-3xl">
                {item.scope}
              </p>

              {/* Achievements as unboxed bullet list with subtle numerical indices */}
              <div className="space-y-2 border-t border-white/[0.04] pt-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2 font-mono">
                  Key Outcomes Delivered
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {item.achievements.map((ach, aIdx) => (
                    <li
                      key={aIdx}
                      className="p-3 rounded-lg bg-black/30 border border-white/[0.04] text-xs text-white/75 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-white/40 font-mono text-[11px] mt-0.5">·</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
