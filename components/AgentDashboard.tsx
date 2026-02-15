'use client'

import { FC, useEffect, useRef, useState } from 'react'
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="agents" ref={ref} className="relative z-10 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-xl md:text-2xl font-bold text-[#00ffd5] text-glow-cyan">
            {'>'} LIVE SYSTEMS
          </h2>
          <p className="text-[#475569] text-xs mt-1.5">
            Autonomous agents. No human supervision.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {AGENTS.map((agent, i) => (
            <div
              key={agent.name}
              className={`bg-[#060a14] border border-white/[0.06] rounded-lg p-4 transition-all duration-300 hover:border-white/[0.12] ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <div className="flex items-start justify-between mb-2.5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <div
                      className="pulse-dot flex-shrink-0"
                      style={{ backgroundColor: agent.color }}
                    />
                    <h3 className="text-[#e2e8f0] text-sm font-medium truncate">
                      {agent.name}
                    </h3>
                  </div>
                  <p className="text-[#475569] text-[11px] mt-1 ml-5">{agent.task}</p>
                </div>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 uppercase tracking-wider"
                  style={{
                    color: agent.color,
                    borderColor: `${agent.color}25`,
                    backgroundColor: `${agent.color}08`,
                  }}
                >
                  {agent.status}
                </span>
              </div>

              {/* Sparkline */}
              <div className="mb-2">
                <Sparkline data={agent.sparkline} color={agent.color} />
              </div>

              {/* Uptime */}
              <p className="text-[#334155] text-[10px] font-mono">
                uptime: <span className="text-[#64748b]">{agent.uptime}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Sparkline: FC<{ data: number[]; color: string }> = ({ data, color }) => {
  const width = 200
  const height = 24
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width
    const y = height - ((val - min) / range) * height
    return `${x},${y}`
  })

  const pathD = `M ${points.join(' L ')}`

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      style={{ height: '24px' }}
      preserveAspectRatio="none"
    >
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.45"
        className="sparkline-path"
      />
    </svg>
  )
}

export default AgentDashboard
