import { useEffect } from 'react';
import { CaseStudy } from '../data/portfolioData';
import { X, ArrowUpRight, CheckCircle2, ChevronRight, BarChart3, Target, Layers, Users, Sparkles, AlertCircle } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0d0d11] border border-white/15 rounded-2xl shadow-2xl shadow-black z-10 text-white my-auto flex flex-col">
        {/* Sticky Header with ✕ close */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d0d11]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs text-white/50 font-medium">
            <span>{caseStudy.category}</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.timeline}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 md:p-10 space-y-12">
          {/* Hero Header */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 text-balance">
              {caseStudy.title}
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mb-6">
              {caseStudy.subtitle}
            </p>

            {/* Unboxed Metadata Strip */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/50 border-y border-white/[0.08] py-3 font-mono">
              <div><span className="text-white/40">Role:</span> <span className="text-white/90">{caseStudy.role}</span></div>
              <span aria-hidden="true" className="text-white/20">·</span>
              <div><span className="text-white/40">Timeline:</span> <span className="text-white/90">{caseStudy.timeline}</span></div>
              <span aria-hidden="true" className="text-white/20">·</span>
              <div><span className="text-white/40">Team:</span> <span className="text-white/90">{caseStudy.team}</span></div>
            </div>
          </div>

          {/* Featured Visual Preview */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 max-h-[380px]">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Key Quantifiable Metrics Grid */}
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4">
              Validated Business Impact
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.keyMetrics.map((km, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums mb-1">
                    {km.value}
                  </div>
                  <div className="text-xs font-semibold text-white/90 mb-1">{km.label}</div>
                  <div className="text-[11px] text-white/50 leading-tight">{km.context}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: The Problem & Market Framing */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
              <AlertCircle className="w-4 h-4 text-white/70" />
              <span>01. The Problem Framing</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              {caseStudy.theProblem.headline}
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {caseStudy.theProblem.description}
            </p>

            <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-5 space-y-3">
              <div className="text-xs uppercase tracking-wider text-white/40 font-semibold">
                Acute Customer Pain Points
              </div>
              <ul className="space-y-2.5">
                {caseStudy.theProblem.painPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span className="text-white/40 font-mono text-xs mt-0.5">·</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs text-white/60">
              <strong className="text-white/80">Market Opportunity:</strong> {caseStudy.theProblem.marketOpportunity}
            </div>
          </div>

          {/* Section 2: Strategy & Discovery & Frameworks */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
              <Target className="w-4 h-4 text-white/70" />
              <span>02. Discovery & Prioritization Strategy</span>
            </div>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {caseStudy.theStrategy.discovery}
            </p>

            {/* Framework Details (e.g., RICE or Kano Table) */}
            <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-white/[0.01]">
              <div className="px-5 py-3 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  {caseStudy.theStrategy.framework}
                </span>
                <span className="text-[11px] text-white/40">Decision Matrix</span>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {caseStudy.theStrategy.frameworkDetails.map((f, i) => (
                  <div key={i} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium text-white">{f.item}</div>
                      <div className="text-xs text-white/50">{f.note}</div>
                    </div>
                    {f.score !== undefined && (
                      <div className="text-right shrink-0">
                        <span className="text-xs text-white/40 font-mono">Score: </span>
                        <span className="text-sm font-bold text-white font-mono tabular-nums">{f.score}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-white/70 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-white/40 font-semibold uppercase tracking-wider mb-1">MVP Scope Bounds</div>
                <div>{caseStudy.theStrategy.mvpScoping}</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-white/40 font-semibold uppercase tracking-wider mb-1">Deliberate Tradeoffs</div>
                <div>{caseStudy.theStrategy.tradeoffs}</div>
              </div>
            </div>
          </div>

          {/* Section 3: Solution & Cross-Functional Execution */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
              <Layers className="w-4 h-4 text-white/70" />
              <span>03. Solution & Cross-Functional Execution</span>
            </div>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {caseStudy.theSolution.architecture}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                  Execution Milestones
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-white/75">
                  {caseStudy.theSolution.executionHighlights.map((ex, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white/60 shrink-0 mt-0.5" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                  Design Architecture
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-white/75">
                  {caseStudy.theSolution.designDecisions.map((dd, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white/60 shrink-0 mt-0.5" />
                      <span>{dd}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-white/70">
              <strong className="text-white">Engineering Partnership:</strong> {caseStudy.theSolution.engCollaboration}
            </div>
          </div>

          {/* Section 4: Quantitative Impact & Attributable Testimonial */}
          <div className="space-y-4 border-t border-white/[0.08] pt-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
              <BarChart3 className="w-4 h-4 text-white/70" />
              <span>04. Measurable Outcomes & Learnings</span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/85">
              {caseStudy.theImpact.businessResults.map((res, i) => (
                <li key={i} className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5">
                  <span className="text-white/40 font-mono text-xs mt-0.5">0{i+1}.</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-white/70">
              <strong className="text-white">Core Retrospective Takeaway:</strong> {caseStudy.theImpact.learnings}
            </div>

            {/* Testimonial */}
            {caseStudy.theImpact.testimonial && (
              <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.1] mt-6">
                <p className="italic text-sm sm:text-base text-white/80 leading-relaxed mb-4">
                  "{caseStudy.theImpact.testimonial.quote}"
                </p>
                <div className="text-xs">
                  <div className="font-semibold text-white">{caseStudy.theImpact.testimonial.author}</div>
                  <div className="text-white/50">
                    {caseStudy.theImpact.testimonial.role} · {caseStudy.theImpact.testimonial.company}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 px-6 py-4 bg-[#0d0d11]/95 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs text-white/50">Aishwarya Sriram Srinivasachary · Technical Case Study Deep Dive</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
}
