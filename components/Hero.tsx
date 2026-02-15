'use client'

import { FC, useEffect, useState, useRef, JSX } from 'react'

const DEPLOY_LINES = [
  { text: '$ ./deploy --network devnet', delay: 0 },
  { text: '✓ PDA Wallet created: 7xKq...3fN2', delay: 800 },
  { text: '✓ Agent registered: chiranjib.sol', delay: 1400 },
  { text: '✓ Status: LIVE on Solana Devnet', delay: 2000 },
  { text: '', delay: 2600 },
  { text: '// quoted by @toly. we made it. 🥹', delay: 3200 },
]

const RUST_CODE = `use solana_sdk::{
    pubkey::Pubkey,
    signer::Signer,
};

pub struct AgentConfig {
    name: String,
    authority: Pubkey,
    is_active: bool,
    agents: Vec<Agent>,
}

impl AgentConfig {
    pub fn deploy(&self) -> Result<()> {
        msg!("Deploying agent: {}", self.name);
        let pda = Pubkey::find_program_address(
            &[b"agent", self.authority.as_ref()],
            &program_id(),
        );
        // Ship it 🚀
        Ok(())
    }
}`

const Hero: FC = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [showCompiling, setShowCompiling] = useState(true)
  const [compileDots, setCompileDots] = useState('.')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    DEPLOY_LINES.forEach((_, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1)
      }, DEPLOY_LINES[i].delay + 1000)
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCompileDots(prev => prev.length >= 3 ? '.' : prev + '.')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowCompiling(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center pt-12 pb-8 overflow-hidden">
      {/* Subtle gradient blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00ffd5]/[0.015] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#f43f5e]/[0.015] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left side — 60% */}
          <div className="lg:col-span-3 space-y-5">
            {/* System init label */}
            <p className="text-[#475569] text-[11px] tracking-[0.2em]">{'// system.init'}</p>

            {/* Hero heading */}
            <h1
              className="hero-heading text-[#e2e8f0] font-bold leading-[1.05]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              I come from nothing.
            </h1>

            {/* Subtext */}
            <p className="text-[#64748b] text-sm md:text-base max-w-xl leading-relaxed">
              No connections. No fancy degree. Just a laptop and a dream.
            </p>

            {/* Terminal deploy window */}
            <div className="bg-[#060a14] border border-white/[0.06] rounded-lg overflow-hidden max-w-lg">
              {/* Terminal header */}
              <div className="flex items-center px-3 py-2 border-b border-white/[0.04]">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/50" />
                </div>
                <span className="text-[#475569] text-[10px] ml-3">deploy.sh</span>
              </div>

              {/* Terminal body */}
              <div className="p-4 space-y-1 min-h-[160px]">
                {DEPLOY_LINES.slice(0, visibleLines).map((line, i) => (
                  <p key={i} className={`text-xs font-mono ${
                    line.text.startsWith('$') ? 'text-[#22c55e]' :
                    line.text.startsWith('✓') ? 'text-[#00ffd5]' :
                    line.text.startsWith('//') ? 'text-[#fbbf24]' :
                    'text-[#475569]'
                  }`}>
                    {line.text}
                  </p>
                ))}
                {visibleLines < DEPLOY_LINES.length && (
                  <span className="typing-cursor text-xs" />
                )}
              </div>
            </div>
          </div>

          {/* Right side — 40% — Code window */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="bg-[#060a14] border border-white/[0.06] rounded-lg overflow-hidden">
              {/* Code header */}
              <div className="flex items-center px-3 py-2 border-b border-white/[0.04]">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/50" />
                </div>
                <span className="text-[#475569] text-[10px] ml-3">agent_config.rs</span>
              </div>

              {/* Code body */}
              <div className="p-4 overflow-x-auto">
                <pre className="text-[11px] leading-[1.6]">
                  {RUST_CODE.split('\n').map((line, i) => (
                    <div key={i}>
                      <span className="text-[#334155] select-none mr-3 inline-block w-4 text-right">{i + 1}</span>
                      <span>{colorizeRustLine(line)}</span>
                    </div>
                  ))}
                </pre>
              </div>

              {/* Compiling bar */}
              <div className="px-4 py-2 border-t border-white/[0.04]">
                {showCompiling ? (
                  <span className="text-[#fbbf24] text-[10px]">
                    ● compiling{compileDots}
                  </span>
                ) : (
                  <span className="text-[#22c55e] text-[10px]">
                    ✓ compiled successfully
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-14 pt-6 border-t border-white/[0.04] flex flex-wrap gap-6 md:gap-10 text-xs text-[#64748b]">
          <div>
            <span className="text-[#e2e8f0] text-sm font-semibold">15+</span>
            <span className="ml-2">projects</span>
          </div>
          <div>
            <span className="text-[#e2e8f0] text-sm font-semibold">14.3K</span>
            <span className="ml-2">followers</span>
          </div>
          <div>
            <span className="text-[#e2e8f0] text-sm font-semibold">50+</span>
            <span className="ml-2">audits</span>
          </div>
          <div>
            <span className="text-[#e2e8f0] text-sm font-semibold">$100K+</span>
            <span className="ml-2">bounties hunted</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function colorizeRustLine(line: string): JSX.Element {
  const keywords = ['use', 'pub', 'struct', 'impl', 'fn', 'let', 'self', '&self']
  const types = ['String', 'Pubkey', 'Vec', 'Result', 'Agent', 'bool']

  if (line.trim().startsWith('//')) {
    return <span className="text-[#475569]">{line}</span>
  }

  const words = line.split(/(\s+|[{}()<>&;:,"|])/g)
  const parts: JSX.Element[] = []

  words.forEach((word, i) => {
    if (keywords.includes(word)) {
      parts.push(<span key={i} className="text-[#f43f5e]">{word}</span>)
    } else if (types.includes(word)) {
      parts.push(<span key={i} className="text-[#00ffd5]">{word}</span>)
    } else if (word.startsWith('"') || word.startsWith('b"')) {
      parts.push(<span key={i} className="text-[#fbbf24]">{word}</span>)
    } else if (word === 'msg!' || word.includes('msg!')) {
      parts.push(<span key={i} className="text-[#a855f7]">{word}</span>)
    } else {
      parts.push(<span key={i} className="text-[#94a3b8]">{word}</span>)
    }
  })

  return <>{parts}</>
}

export default Hero
