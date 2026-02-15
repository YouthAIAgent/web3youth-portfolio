'use client'

import { useEffect, useRef, useState, FC } from 'react'
import { HUMAN_AI_CAPABILITIES } from '@/lib/constants'

const HumanAI: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm mb-2 tracking-widest">{'// capabilities.merge'}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">🧑‍💻 Human</span>
            <span className="text-gray-500 mx-3">+</span>
            <span className="text-white">🤖 AI Agent</span>
            <span className="text-gray-500 mx-3">=</span>
            <span className="gradient-text-cyan-magenta">Unstoppable</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What you get when a Solana developer works 24/7 with 5 autonomous AI agents
          </p>
        </div>

        {/* Two columns: Human vs AI */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Human side */}
          <div
            className={`glass p-8 rounded-xl border border-neon-cyan/20 glow-cyan
              ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🧑‍💻</span>
              <div>
                <h3 className="text-neon-cyan font-bold text-lg">Human Intelligence</h3>
                <p className="text-gray-500 text-xs">Chiranjib • Developer</p>
              </div>
            </div>
            <ul className="space-y-3">
              {HUMAN_AI_CAPABILITIES.human.map((cap, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-3 text-sm text-gray-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.4s ease ${i * 100 + 400}ms`,
                  }}
                >
                  <span className="text-neon-cyan mt-0.5">✓</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI side */}
          <div
            className={`glass p-8 rounded-xl border border-neon-magenta/20 glow-magenta
              ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '400ms' }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🤖</span>
              <div>
                <h3 className="text-neon-magenta font-bold text-lg">AI Agent Fleet</h3>
                <p className="text-gray-500 text-xs">5 Agents • Always Online</p>
              </div>
            </div>
            <ul className="space-y-3">
              {HUMAN_AI_CAPABILITIES.ai.map((cap, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-3 text-sm text-gray-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                    transition: `all 0.4s ease ${i * 100 + 400}ms`,
                  }}
                >
                  <span className="text-neon-magenta mt-0.5">⚡</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Combined output */}
        <div
          className={`glass p-8 rounded-xl border border-neon-amber/20 glow-amber
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '600ms' }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-3xl">⚡</span>
            <div>
              <h3 className="text-neon-amber font-bold text-lg">Combined Output</h3>
              <p className="text-gray-500 text-xs">The result of merging human + AI</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HUMAN_AI_CAPABILITIES.combined.map((cap, i) => (
              <div
                key={i}
                className="flex items-start space-x-2 text-sm text-gray-300 p-3 rounded-lg bg-white/[0.02] border border-white/5"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.4s ease ${i * 100 + 800}ms`,
                }}
              >
                <span className="text-neon-amber mt-0.5">→</span>
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HumanAI
