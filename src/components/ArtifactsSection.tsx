import { useState } from 'react';
import { PRD_SAMPLE } from '../data/portfolioData';
import { Copy, Check, FileText, Sliders, Calendar, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';

interface RiceFeature {
  id: string;
  name: string;
  category: string;
  reach: number; // users
  impact: number; // 0.5 minimal, 1 medium, 2 high, 3 massive
  confidence: number; // 50%, 80%, 100%
  effort: number; // sprints (1 to 8)
}

const INITIAL_RICE_FEATURES: RiceFeature[] = [
  { id: '1', name: 'Zero-Trust Multi-Tier RBAC & Cryptographic Verification', category: 'GovTech & Security', reach: 85000, impact: 3, confidence: 95, effort: 4 },
  { id: '2', name: 'AI-Powered CRM Issue Clustering & Auto-Triage Cards', category: 'DevRev UX', reach: 35000, impact: 2, confidence: 90, effort: 3 },
  { id: '3', name: 'Modular REST Microservice Migration & OpenAPI Contract Gate', category: 'Enterprise TCS', reach: 24000, impact: 2, confidence: 85, effort: 4 },
  { id: '4', name: 'Automated Multi-Region Sovereign Active-Passive Failover', category: 'GovTech High-Avail', reach: 60000, impact: 3, confidence: 80, effort: 5 },
];

export default function ArtifactsSection() {
  const [activeTab, setActiveTab] = useState<'prd' | 'rice' | 'roadmap'>('rice');
  const [copiedPrd, setCopiedPrd] = useState(false);
  const [features, setFeatures] = useState<RiceFeature[]>(INITIAL_RICE_FEATURES);

  // Copy PRD to clipboard
  const handleCopyPrd = () => {
    const prdText = `${PRD_SAMPLE.title} (${PRD_SAMPLE.version})\nAuthor: ${PRD_SAMPLE.author}\n\n` +
      PRD_SAMPLE.sections.map((s) => `${s.heading}\n${s.content}\n`).join('\n');
    navigator.clipboard.writeText(prdText);
    setCopiedPrd(true);
    setTimeout(() => setCopiedPrd(false), 2500);
  };

  // Update RICE feature attributes
  const updateFeature = (id: string, field: keyof RiceFeature, value: number) => {
    setFeatures((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  // Calculate RICE score = (Reach * Impact * (Confidence / 100)) / Effort
  const calculateScore = (f: RiceFeature) => {
    const raw = (f.reach * f.impact * (f.confidence / 100)) / Math.max(f.effort, 1);
    return Math.round(raw);
  };

  const sortedFeatures = [...features].sort((a, b) => calculateScore(b) - calculateScore(a));

  return (
    <section id="artifacts" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">
              <span>Tangible PM Craft</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>Working Artifacts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Product Artifacts & Tooling
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-xl">
              Inspect production-grade PRDs, interact with a live RICE prioritization model and explore executive quarterly roadmaps.
            </p>
          </div>

          {/* Tab Navigation (Segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('rice')}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'rice'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive RICE Model</span>
            </button>

            <button
              onClick={() => setActiveTab('prd')}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'prd'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Production PRD</span>
            </button>

            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'roadmap'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Now / Next / Later</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive RICE Calculator */}
        {activeTab === 'rice' && (
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.06]">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Live RICE Prioritization Simulator
                </h3>
                <p className="text-xs text-white/50">
                  Formula: <span className="font-mono text-white/80">(Reach × Impact × Confidence%) ÷ Effort</span>. Adjust the parameters below to see ranking update in real time.
                </p>
              </div>
              <div className="text-xs text-white/40 font-mono">
                Sorted by computed Priority Rank
              </div>
            </div>

            {/* List of Features with Live Sliders */}
            <div className="space-y-5">
              {sortedFeatures.map((feat, rankIdx) => {
                const score = calculateScore(feat);
                return (
                  <div
                    key={feat.id}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/10 text-white font-mono text-xs font-bold shrink-0">
                          #{rankIdx + 1}
                        </div>
                        <div>
                          <div className="text-base font-semibold text-white">{feat.name}</div>
                          <div className="text-xs text-white/40 font-mono">{feat.category}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-lg border border-white/[0.08] self-start lg:self-auto">
                        <span className="text-xs text-white/50 font-mono">RICE Score:</span>
                        <span className="text-base font-bold text-white font-mono tabular-nums">
                          {score.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Interactive Sliders Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs pt-2 border-t border-white/[0.04]">
                      {/* Reach */}
                      <div>
                        <div className="flex items-center justify-between text-white/60 mb-1.5">
                          <span>Reach (Users/mo)</span>
                          <span className="font-mono text-white font-medium">{feat.reach.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min="5000"
                          max="120000"
                          step="5000"
                          value={feat.reach}
                          onChange={(e) => updateFeature(feat.id, 'reach', Number(e.target.value))}
                          className="w-full accent-white bg-white/10 h-1 rounded cursor-pointer"
                        />
                      </div>

                      {/* Impact */}
                      <div>
                        <div className="flex items-center justify-between text-white/60 mb-1.5">
                          <span>Impact Factor (1-3)</span>
                          <span className="font-mono text-white font-medium">{feat.impact}x</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="3"
                          step="1"
                          value={feat.impact}
                          onChange={(e) => updateFeature(feat.id, 'impact', Number(e.target.value))}
                          className="w-full accent-white bg-white/10 h-1 rounded cursor-pointer"
                        />
                      </div>

                      {/* Confidence */}
                      <div>
                        <div className="flex items-center justify-between text-white/60 mb-1.5">
                          <span>Confidence (%)</span>
                          <span className="font-mono text-white font-medium">{feat.confidence}%</span>
                        </div>
                        <input
                          type="range"
                          min="40"
                          max="100"
                          step="5"
                          value={feat.confidence}
                          onChange={(e) => updateFeature(feat.id, 'confidence', Number(e.target.value))}
                          className="w-full accent-white bg-white/10 h-1 rounded cursor-pointer"
                        />
                      </div>

                      {/* Effort */}
                      <div>
                        <div className="flex items-center justify-between text-white/60 mb-1.5">
                          <span>Effort (Sprints)</span>
                          <span className="font-mono text-white font-medium">{feat.effort} sprints</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="8"
                          step="1"
                          value={feat.effort}
                          onChange={(e) => updateFeature(feat.id, 'effort', Number(e.target.value))}
                          className="w-full accent-white bg-white/10 h-1 rounded cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: PRD Sample Document */}
        {activeTab === 'prd' && (
          <div className="bg-[#0b0b0e] border border-white/[0.08] rounded-2xl p-6 sm:p-9 relative">
            {/* PRD Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]">
              <div>
                <div className="text-xs text-white/40 font-mono mb-1">
                  Product Requirement Document · {PRD_SAMPLE.status}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {PRD_SAMPLE.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-white/50 mt-1 font-mono">
                  <span>Author: {PRD_SAMPLE.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{PRD_SAMPLE.version}</span>
                </div>
              </div>

              <button
                onClick={handleCopyPrd}
                className="px-4 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg transition-all duration-200 flex items-center gap-2 self-start sm:self-auto cursor-pointer"
              >
                {copiedPrd ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied Markdown!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-white/70" />
                    <span>Copy Document</span>
                  </>
                )}
              </button>
            </div>

            {/* PRD Sections */}
            <div className="space-y-8 font-sans">
              {PRD_SAMPLE.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2.5">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                    {sec.heading}
                  </h4>
                  <div className="text-sm text-white/75 leading-relaxed whitespace-pre-line pl-4 border-l border-white/15">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Now / Next / Later Strategic Roadmap */}
        {activeTab === 'roadmap' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: NOW (Committed / In Flight) */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Now (In Flight)
                  </span>
                  <span className="text-xs font-mono text-white/50">Current Qtr</span>
                </div>
                <div className="space-y-3.5 text-xs text-white/75">
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-semibold text-white mb-1">
                      Multi-Tenant RBAC Document Filter
                    </div>
                    <p className="text-white/50">
                      Strict JWT credential validation matching Confluence & Jira permission hashes in &lt;15ms.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-semibold text-white mb-1">
                      P95 Token Latency Budgeting
                    </div>
                    <p className="text-white/50">
                      Optimizing prompt cache hits to lower TTFT (Time To First Token) from 1200ms to 450ms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-6 border-t border-white/[0.06] text-[11px] text-white/40 font-mono">
                Goal: Pass Enterprise Security Audit
              </div>
            </div>

            {/* Column 2: NEXT (Discovery & Prototyping) */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Next (Discovery)
                  </span>
                  <span className="text-xs font-mono text-white/50">Next Qtr</span>
                </div>
                <div className="space-y-3.5 text-xs text-white/75">
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-semibold text-white mb-1">
                      Contextual AI Copilot
                    </div>
                    <p className="text-white/50">
                      Bringing the intelligence layer directly into Slack & Chrome messaging workflow.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-semibold text-white mb-1">
                      Synthetic Benchmark Red-Teaming
                    </div>
                    <p className="text-white/50">
                      Automating 1000+ real-world regression tests to guarantee zero hallucination.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-6 border-t border-white/[0.06] text-[11px] text-white/40 font-mono">
                Goal: +35% Daily Active Usage
              </div>
            </div>

            {/* Column 3: LATER (Vision & Exploratory) */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                    Later (Horizon 3)
                  </span>
                  <span className="text-xs font-mono text-white/50">H2 Roadmap</span>
                </div>
                <div className="space-y-3.5 text-xs text-white/75">
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-semibold text-white mb-1">
                      Autonomous Workflow Triggers
                    </div>
                    <p className="text-white/50">
                      AI agents writing PRs, updating Jira, and drafting incident retros.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <div className="font-semibold text-white mb-1">
                      On-Prem Air-Gapped Deployment
                    </div>
                    <p className="text-white/50">
                      Local hardware inference for public works, healthcare, and GovTech.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-6 border-t border-white/[0.06] text-[11px] text-white/40 font-mono">
                Goal: Expand TAM into Regulated Verticals
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
