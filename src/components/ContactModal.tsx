import { useState, useEffect } from 'react';
import { X, Copy, Check, Mail, Calendar, ArrowUpRight, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState('Product Leadership / Executive Role');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const email = 'ssaishwarya2021@gmail.com';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg bg-[#0d0d12] border border-white/15 rounded-2xl shadow-2xl shadow-black z-10 p-6 sm:p-8 text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 font-mono">
              Direct Contact
            </div>
            <h3 className="text-xl font-bold text-white">Let’s Connect</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Email Copy Strip */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5 min-w-0">
            <Mail className="w-4 h-4 text-white/60 shrink-0" />
            <span className="text-xs sm:text-sm font-mono text-white/90 truncate">
              {email}
            </span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="px-3 py-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-white/70" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Inquiry Form */}
        {sentSuccess ? (
          <div className="p-8 text-center bg-white/[0.02] border border-white/[0.08] rounded-xl space-y-2">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white">Message Transmitted</h4>
            <p className="text-xs text-white/60">
              Thank you. I typically respond within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider font-mono">
                Topic of Discussion
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.1] text-xs sm:text-sm text-white focus:outline-none focus:border-white/30"
              >
                <option value="Technical Product Manager Role" className="bg-[#121216] text-white">
                  Technical Product Manager / Full-Time
                </option>
                <option value="GovTech & Infrastructure Advisory" className="bg-[#121216] text-white">
                  GovTech & Critical Systems Advisory
                </option>
                <option value="Enterprise Architecture & APIs" className="bg-[#121216] text-white">
                  Enterprise Architecture & Modernization
                </option>
                <option value="General Conversation" className="bg-[#121216] text-white">
                  General Connection / Mentorship / Coffee
                </option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider font-mono">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Lin"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider font-mono">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider font-mono">
                Message / Brief
              </label>
              <textarea
                required
                rows={3}
                placeholder="Share context on your product, team stage, or challenge..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 text-xs sm:text-sm font-medium text-black bg-white hover:bg-white/90 rounded-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer font-semibold"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
