import { useState } from 'react';
import { Copy, Check, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const [copied, setCopied] = useState(false);
  const email = 'ssaishwarya2021@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Footer Callout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-14 border-b border-white/[0.06]">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Interested in discussing a product or technical challenge?
            </h3>
            <p className="text-sm text-white/60">
              Open to high-impact Technical Product Management, GovTech infrastructure and Enterprise platform leadership roles.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Minimalist Copy-Email Button with Success Tooltip */}
            <div className="relative">
              <button
                onClick={handleCopyEmail}
                className="group px-4 py-2.5 text-xs font-mono font-medium text-white/90 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors" />
                    <span>{email}</span>
                    <Copy className="w-3 h-3 text-white/40 group-hover:text-white/80 transition-colors ml-1" />
                  </>
                )}
              </button>
            </div>

            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 text-xs font-semibold text-black bg-white hover:bg-white/90 rounded-lg transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Bottom Strip: Social links and clean copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2 font-mono">
            <span>© {new Date().getFullYear()} Aishwarya Sriram Srinivasachary</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Technical Product Manager Portfolio</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-white/40" />
            </a>

            <a
              href="https://substack.com"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Substack</span>
              <ArrowUpRight className="w-3 h-3 text-white/40" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-white/40" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
