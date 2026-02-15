'use client'

import { useState, useEffect, useRef, FC, FormEvent } from 'react'
import { SERVICE_OPTIONS_CONTACT, SITE_CONFIG } from '@/lib/constants'

const Contact: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(SITE_CONFIG.solanaAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={ref} className="relative z-10 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-xl md:text-2xl font-bold text-[#00ffd5] text-glow-cyan">
            {'>'} CONTACT
          </h2>
          <p className="text-[#475569] text-xs mt-1.5">
            Let&apos;s build something together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Left — Form */}
          <div
            className={`bg-[#060a14] border border-white/[0.06] rounded-lg p-5 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <span className="text-[#22c55e] text-2xl mb-3">✓</span>
                <h3 className="text-[#e2e8f0] font-medium text-sm mb-1">Transmission sent.</h3>
                <p className="text-[#475569] text-xs">I&apos;ll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="text-[#475569] text-[10px] mb-1 block uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0a0e1a] border border-white/[0.06] rounded px-3 py-2.5 text-xs text-[#e2e8f0] placeholder-[#334155] focus:outline-none focus:border-[#00ffd5]/25 transition-colors font-mono"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="text-[#475569] text-[10px] mb-1 block uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0a0e1a] border border-white/[0.06] rounded px-3 py-2.5 text-xs text-[#e2e8f0] placeholder-[#334155] focus:outline-none focus:border-[#00ffd5]/25 transition-colors font-mono"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="text-[#475569] text-[10px] mb-1 block uppercase tracking-wider">Service</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0a0e1a] border border-white/[0.06] rounded px-3 py-2.5 text-xs text-[#e2e8f0] focus:outline-none focus:border-[#00ffd5]/25 transition-colors appearance-none cursor-pointer font-mono"
                    required
                  >
                    <option value="" className="bg-[#0a0e1a]">Select a service</option>
                    {SERVICE_OPTIONS_CONTACT.map((s, i) => (
                      <option key={i} value={s} className="bg-[#0a0e1a]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[#475569] text-[10px] mb-1 block uppercase tracking-wider">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0a0e1a] border border-white/[0.06] rounded px-3 py-2.5 text-xs text-[#e2e8f0] placeholder-[#334155] focus:outline-none focus:border-[#00ffd5]/25 transition-colors resize-none font-mono"
                    placeholder="Brief project description..."
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded bg-[#f43f5e]/10 border border-[#f43f5e]/25 text-[#f43f5e] font-semibold text-xs hover:bg-[#f43f5e]/15 hover:border-[#f43f5e]/35 transition-all duration-300 text-glow-rose uppercase tracking-wider"
                >
                  SEND TRANSMISSION →
                </button>
              </form>
            )}
          </div>

          {/* Right — Links + Payment */}
          <div className="space-y-3">
            {/* Social links */}
            <div
              className={`bg-[#060a14] border border-white/[0.06] rounded-lg p-5 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '300ms' }}
            >
              <div className="space-y-2.5">
                <SocialLink
                  icon="𝕏"
                  name="Twitter"
                  label="@Web3__Youth · 14.3K"
                  href={SITE_CONFIG.twitterUrl}
                />
                <SocialLink
                  icon="⌨"
                  name="GitHub"
                  label="YouthAIAgent"
                  href={SITE_CONFIG.github}
                />
                <SocialLink
                  icon="✉"
                  name="Email"
                  label={SITE_CONFIG.email}
                  href={`mailto:${SITE_CONFIG.email}`}
                />
                <SocialLink
                  icon="✈"
                  name="Telegram"
                  label="@web3youth"
                  href={SITE_CONFIG.telegram}
                />
              </div>
            </div>

            {/* Crypto payment */}
            <div
              className={`bg-[#060a14] border border-[#fbbf24]/10 rounded-lg p-5 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <h3 className="text-[#fbbf24] text-xs font-semibold mb-3 text-glow-amber">💰 Pay with Crypto</h3>
              <p className="text-[#475569] text-[10px] mb-2 uppercase tracking-wider">
                USDT on Solana
              </p>
              <div className="bg-[#0a0e1a] p-3 rounded border border-white/[0.04]">
                <p className="text-[10px] text-[#94a3b8] break-all font-mono select-all leading-relaxed">
                  {SITE_CONFIG.solanaAddress}
                </p>
              </div>
              <button
                onClick={copyAddress}
                className="mt-3 text-[10px] text-[#fbbf24] hover:text-[#fbbf24]/80 transition-colors"
              >
                {copied ? '✓ Copied!' : '📋 Copy address'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SocialLink: FC<{
  icon: string
  name: string
  label: string
  href: string
}> = ({ icon, name, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-2 rounded hover:bg-white/[0.02] transition-colors group"
  >
    <span className="text-[#64748b] text-sm w-5 text-center group-hover:text-[#00ffd5] transition-colors">
      {icon}
    </span>
    <div>
      <p className="text-[#e2e8f0] text-xs">{name}</p>
      <p className="text-[#475569] text-[10px]">{label}</p>
    </div>
  </a>
)

export default Contact
