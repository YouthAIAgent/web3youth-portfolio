'use client'

import { useState, useEffect, FC } from 'react'
import { NAV_LINKS } from '@/lib/constants'
import GlitchText from './GlitchText'

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0e1a]/90 backdrop-blur-sm border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <GlitchText
              text="[Web3Youth]"
              className="text-[#00ffd5] font-bold text-sm tracking-wider"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#64748b] hover:text-[#00ffd5] transition-colors duration-200 text-[11px] tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Status */}
          <div className="hidden md:flex items-center space-x-2 text-[11px]">
            <span className="text-[#475569]">STATUS:</span>
            <span className="text-[#22c55e] font-medium">ONLINE</span>
            <div className="pulse-dot bg-[#22c55e]" />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-[#64748b] hover:text-[#00ffd5] transition-colors p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-5 h-px bg-current transition-all duration-300 ${
                  isMobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-px bg-current transition-all duration-300 ${
                  isMobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-px bg-current transition-all duration-300 ${
                  isMobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#0a0e1a]/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          isMobileOpen ? 'max-h-64 border-t border-white/[0.04]' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block text-[#64748b] hover:text-[#00ffd5] transition-colors text-xs py-1"
            >
              {'> '}{link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/[0.04] flex items-center space-x-2 text-xs">
            <span className="text-[#22c55e]">ONLINE</span>
            <div className="pulse-dot bg-[#22c55e]" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
