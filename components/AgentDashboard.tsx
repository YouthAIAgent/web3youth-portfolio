'use client'

import { useEffect, useRef, useState, FC } from 'react'
import { AGENTS } from '@/lib/constants'

const AgentDashboard: FC = () => {
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

  const getStatusColors = (color: string) => {
    switch (color) {
      case 'green': return { dot: 'bg-neon-green', text: 'text-neon-green', border: 'border-neon-green/30', glow: 'glow-green', bar: 'bg-neon-green' }
      case 'cyan': return { dot: 'bg-neon-cyan', text: 'text-neon-cyan', border: 'border-neon-cyan/30', glow: 'glow-cyan', bar: 'bg-neon-cyan' }
      case 'amber': return { dot: 'bg-neon-amber', text: 'text-neon-amber', border: 'border-neon-amber/30', glow: 'glow-amber', bar: 'bg-neon-amber' }
      case 'magenta': return { dot: 'bg-neon-magenta', text: 'text-neon-magenta', border: 'border-neon-magenta/30', glow: 'glow-magenta', bar: 'bg-neon-magenta' }
      default: return { dot: 'bg-neon-green', text: 'text-neon-green', border: 'border-neon-green/30', glow: 'glow-green', bar: 'bg-neon-green' }
    }
  }

  return (
    <section id="agents" ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm mb-2 tracking-widest">{'// autonomous_agents'}</p>
          <h2 className="text-3xl md:text-4xl font-bold neon-cyan">
            Agent Status Dashboard
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Real-time monitoring of autonomous AI agents operating 24/7 on Solana.
          </p>
        </div>

        {/* Agent cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {AGENTS.map((agent, i) => {
            const colors = getStatusColors(agent.statusColor)
            return (
              <div
                key={i}
                className={`glass p-6 rounded-xl border ${colors.border} ${colors.glow} card-hover
                  ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Agent header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{agent.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold">{agent.name}</h3>
                      <p className="text-gray-500 text-xs">{agent.task}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-mono font-bold ${colors.text}`}>
                      {agent.status}
                    </span>
                    <div className={`pulse-dot ${colors.dot}`} />
                  </div>
                </div>

                {/* Mini activity graph */}
                <div className="flex items-end space-x-1 h-12 mb-4">
                  {agent.activity.map((val, j) => (
                    <div
                      key={j}
                      className={`flex-1 rounded-sm ${colors.bar} transition-all duration-500`}
                      style={{
                        height: isVisible ? `${val}%` : '0%',
                        opacity: 0.3 + (val / 100) * 0.7,
                        transitionDelay: `${j * 50 + i * 200}ms`,
                      }}
                    />
                  ))}
                </div>

                {/* Progress bar */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-gray-500">Capacity</span>
                  <span className={colors.text}>{agent.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-navy-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${colors.bar} transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${agent.progress}%` : '0%',
                      transitionDelay: `${i * 200}ms`,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AgentDashboard
