'use client'

import { FC } from 'react'
import TypeWriter from './TypeWriter'

const ASCII_ART = `
██╗    ██╗███████╗██████╗ ██████╗ ██╗   ██╗ ██████╗ ██╗   ██╗████████╗██╗  ██╗
██║    ██║██╔════╝██╔══██╗╚════██╗╚██╗ ██╔╝██╔═══██╗██║   ██║╚══██╔══╝██║  ██║
██║ █╗ ██║█████╗  ██████╔╝ █████╔╝ ╚████╔╝ ██║   ██║██║   ██║   ██║   ███████║
██║███╗██║██╔══╝  ██╔══██╗ ╚═══██╗  ╚██╔╝  ██║   ██║██║   ██║   ██║   ██╔══██║
╚███╔███╔╝███████╗██████╔╝██████╔╝   ██║   ╚██████╔╝╚██████╔╝   ██║   ██║  ██║
 ╚══╝╚══╝ ╚══════╝╚═════╝ ╚═════╝    ╚═╝    ╚═════╝  ╚═════╝    ╚═╝   ╚═╝  ╚═╝`

const INIT_LINES = [
  { text: 'root@web3youth:~$ ./init.sh --profile chiranjib', color: 'green', delay: 0 },
  { text: '[*] Loading profile...', color: 'gray', delay: 200 },
  { text: '', delay: 100 },
  { text: '✓ Identity: Chiranjib', color: 'cyan', delay: 150 },
  { text: '✓ Role: Solana Developer | AI Agent Architect | Security Auditor', color: 'cyan', delay: 150 },
  { text: '✓ Status: ONLINE // building the future', color: 'green', delay: 150 },
  { text: '✓ Recognition: Quoted by Solana co-founder @toly', color: 'amber', delay: 150 },
  { text: '✓ Community: 14.3K followers on X', color: 'magenta', delay: 150 },
  { text: '', delay: 100 },
  { text: '[✓] Profile loaded successfully.', color: 'green', delay: 300 },
]

const Hero: FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* ASCII Art */}
        <div className="mb-8 overflow-hidden">
          <pre className="ascii-art neon-cyan font-mono whitespace-pre select-none hidden sm:block text-center">
            {ASCII_ART}
          </pre>
          <h1 className="sm:hidden text-3xl font-bold neon-cyan text-center tracking-widest">
            WEB3YOUTH
          </h1>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Terminal */}
          <div className="glass p-6 rounded-xl border border-neon-cyan/20 glow-cyan">
            {/* Terminal header */}
            <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-500 text-xs ml-3 flex-1">terminal — web3youth@init</span>
            </div>

            {/* Terminal body */}
            <TypeWriter lines={INIT_LINES} speed={25} startDelay={800} />
          </div>

          {/* Right: Code window */}
          <div className="glass p-6 rounded-xl border border-neon-magenta/20 glow-magenta hidden lg:block">
            {/* Code window header */}
            <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-500 text-xs ml-3">agent_config.rs</span>
            </div>

            {/* Code content */}
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-neon-magenta">use</span>{' '}
                <span className="text-gray-300">solana_sdk::&#123;</span>{'\n'}
                <span className="text-gray-300">    pubkey::Pubkey,</span>{'\n'}
                <span className="text-gray-300">    signer::Signer,</span>{'\n'}
                <span className="text-gray-300">&#125;;</span>{'\n\n'}
                <span className="text-neon-magenta">pub struct</span>{' '}
                <span className="text-neon-cyan">AgentConfig</span>{' '}
                <span className="text-gray-300">&#123;</span>{'\n'}
                <span className="text-gray-300">    </span>
                <span className="text-neon-amber">name</span>
                <span className="text-gray-500">:</span>{' '}
                <span className="text-neon-lime">String</span>
                <span className="text-gray-300">,</span>{'\n'}
                <span className="text-gray-300">    </span>
                <span className="text-neon-amber">authority</span>
                <span className="text-gray-500">:</span>{' '}
                <span className="text-neon-lime">Pubkey</span>
                <span className="text-gray-300">,</span>{'\n'}
                <span className="text-gray-300">    </span>
                <span className="text-neon-amber">is_active</span>
                <span className="text-gray-500">:</span>{' '}
                <span className="text-neon-lime">bool</span>
                <span className="text-gray-300">,</span>{'\n'}
                <span className="text-gray-300">    </span>
                <span className="text-neon-amber">agents</span>
                <span className="text-gray-500">:</span>{' '}
                <span className="text-neon-lime">Vec</span>
                <span className="text-gray-300">&lt;Agent&gt;,</span>{'\n'}
                <span className="text-gray-300">&#125;</span>{'\n\n'}
                <span className="text-neon-magenta">impl</span>{' '}
                <span className="text-neon-cyan">AgentConfig</span>{' '}
                <span className="text-gray-300">&#123;</span>{'\n'}
                <span className="text-gray-300">    </span>
                <span className="text-neon-magenta">pub fn</span>{' '}
                <span className="text-neon-amber">deploy</span>
                <span className="text-gray-300">(&amp;</span>
                <span className="text-neon-magenta">self</span>
                <span className="text-gray-300">) -&gt; Result&lt;()&gt; &#123;</span>{'\n'}
                <span className="text-gray-500">        // Ship it 🚀</span>{'\n'}
                <span className="text-gray-300">        Ok(())</span>{'\n'}
                <span className="text-gray-300">    &#125;</span>{'\n'}
                <span className="text-gray-300">&#125;</span>
              </code>
            </pre>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <div className="flex flex-col items-center text-gray-500 text-xs">
            <span>scroll down</span>
            <svg className="w-4 h-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
