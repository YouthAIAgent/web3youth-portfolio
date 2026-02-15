'use client'

import { useState, useEffect, FC } from 'react'
import { NAV_LINKS } from '@/lib/constants'
import GlitchText from './GlitchText'

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [uptime, setUptime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Uptime counter from a fixed start date
    const startDate = new Date('2024-01-01T00:00:00Z').getTime()
    const updateUptime = () => {
      const now = Date.now()
      const diff = now - startDate
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const secs = Math.floor((diff % (1000 * 60)) / 1000)
      setUptime({ days, hours, mins, secs })
    }
    updateUptime()
    const interval = setInterval(updateUptime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-strong shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <span className="text-neon-cyan font-bold text-lg tracking-wider group-hover:animate-glitch">
              <GlitchText text="[Web3Youth]" className="text-neon-cyan font-bold text-lg" />
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-neon-cyan transition-colors duration-200 text-sm tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right side: Uptime + Status */}
          <div className="hidden lg:flex items-center space-x-4 text-xs">
            <span className="text-gray-500">
              UPTIME: {uptime.days}d {String(uptime.hours).padStart(2, '0')}:
              {String(uptime.mins).padStart(2, '0')}:{String(uptime.secs).padStart(2, '0')}
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">STATUS:</span>
              <span className="text-neon-green text-xs font-semibold">ONLINE</span>
              <div className="pulse-dot bg-neon-green" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-gray-400 hover:text-neon-cyan transition-colors p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden glass-strong transition-all duration-300 overflow-hidden ${
          isMobileOpen ? 'max-h-96 border-t border-white/5' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block text-gray-400 hover:text-neon-cyan transition-colors text-sm py-1"
            >
              {'> '}{link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/5 flex items-center space-x-2 text-xs">
            <span className="text-neon-green">ONLINE</span>
            <div className="pulse-dot bg-neon-green" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
