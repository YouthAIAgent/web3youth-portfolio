'use client'

import { FC } from 'react'
import { SITE_CONFIG } from '@/lib/constants'

const Footer: FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://twitter.com/Web3__Youth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-neon-cyan transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-neon-cyan transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-gray-500 hover:text-neon-cyan transition-colors"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a
            href={SITE_CONFIG.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-neon-cyan transition-colors"
            aria-label="Website"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom text */}
        <div className="text-center space-y-2">
          <p className="text-gray-500 text-sm">
            © 2026 Web3Youth. All systems operational.
          </p>
          <p className="text-gray-600 text-xs">
            {'// built different. quoted by toly. 💀'}
          </p>
        </div>

        {/* Status bar */}
        <div className="mt-8 flex justify-center items-center space-x-6 text-xs text-gray-600">
          <div className="flex items-center space-x-1.5">
            <div className="pulse-dot bg-neon-green" />
            <span>All Systems Operational</span>
          </div>
          <span>•</span>
          <span>Solana: Connected</span>
          <span>•</span>
          <span>Agents: 4/4 Online</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
