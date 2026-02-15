'use client'

import { useState, useEffect, useRef, FC, FormEvent } from 'react'
import { SERVICE_OPTIONS, BUDGET_OPTIONS, SITE_CONFIG } from '@/lib/constants'

const Contact: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    description: '',
    budget: '',
  })
  const [submitted, setSubmitted] = useState(false)

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
    // In production, send to API
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const socials = [
    {
      name: 'Twitter / X',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: 'https://twitter.com/Web3__Youth',
      label: '@Web3__Youth',
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: SITE_CONFIG.github,
      label: 'web3youth',
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: `mailto:${SITE_CONFIG.email}`,
      label: SITE_CONFIG.email,
    },
    {
      name: 'Website',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      href: SITE_CONFIG.url,
      label: 'web3youth.in',
    },
  ]

  return (
    <section id="contact" ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm mb-2 tracking-widest">{'// contact.init'}</p>
          <h2 className="text-3xl md:text-4xl font-bold neon-green">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <div
            className={`glass p-8 rounded-xl border border-neon-green/20 glow-green
              ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '200ms' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-neon-green font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm text-center">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 transition-colors"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Service</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-green/50 transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-navy-900">Select a service</option>
                    {SERVICE_OPTIONS.map((s, i) => (
                      <option key={i} value={s} className="bg-navy-900">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Project Description</label>
                  <textarea
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Budget</label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-green/50 transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-navy-900">Select budget range</option>
                    {BUDGET_OPTIONS.map((b, i) => (
                      <option key={i} value={b} className="bg-navy-900">{b}</option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-neon-green/10 border border-neon-green/30 text-neon-green font-semibold text-sm hover:bg-neon-green/20 hover:border-neon-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/20"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Right side: Socials + Crypto */}
          <div className="space-y-6">
            {/* Social links */}
            <div
              className={`glass p-8 rounded-xl border border-white/5
                ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '400ms' }}
            >
              <h3 className="text-white font-bold mb-6 text-lg">Connect</h3>
              <div className="space-y-4">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/[0.03] transition-colors group"
                  >
                    <div className="text-gray-400 group-hover:text-neon-cyan transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{social.name}</p>
                      <p className="text-gray-500 text-xs">{social.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Crypto payment */}
            <div
              className={`glass p-6 rounded-xl border border-neon-amber/20 glow-amber
                ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '600ms' }}
            >
              <h3 className="text-neon-amber font-bold mb-3 text-sm">💰 USDT on Solana</h3>
              <p className="text-gray-400 text-xs mb-3">
                Accept payments in USDT on Solana network
              </p>
              <div className="bg-navy-900/50 p-3 rounded-lg border border-white/5">
                <p className="text-[10px] text-gray-300 break-all font-mono select-all">
                  {SITE_CONFIG.solanaAddress}
                </p>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(SITE_CONFIG.solanaAddress)}
                className="mt-3 text-xs text-neon-amber hover:text-neon-amber/80 transition-colors"
              >
                📋 Click to copy address
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
