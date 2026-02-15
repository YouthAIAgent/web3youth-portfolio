'use client'

import { useEffect, useRef, useState, FC } from 'react'
import { SERVICES } from '@/lib/constants'

const Services: FC = () => {
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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan': return { text: 'text-neon-cyan', border: 'border-neon-cyan/20', hoverGlow: 'glow-cyan-hover', tag: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20' }
      case 'magenta': return { text: 'text-neon-magenta', border: 'border-neon-magenta/20', hoverGlow: 'glow-magenta-hover', tag: 'bg-neon-magenta/10 text-neon-magenta border-neon-magenta/20' }
      case 'amber': return { text: 'text-neon-amber', border: 'border-neon-amber/20', hoverGlow: 'glow-amber-hover', tag: 'bg-neon-amber/10 text-neon-amber border-neon-amber/20' }
      case 'lime': return { text: 'text-neon-lime', border: 'border-neon-lime/20', hoverGlow: 'glow-lime-hover', tag: 'bg-neon-lime/10 text-neon-lime border-neon-lime/20' }
      case 'pink': return { text: 'text-neon-pink', border: 'border-neon-pink/20', hoverGlow: 'glow-magenta-hover', tag: 'bg-neon-pink/10 text-neon-pink border-neon-pink/20' }
      default: return { text: 'text-neon-cyan', border: 'border-neon-cyan/20', hoverGlow: 'glow-cyan-hover', tag: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20' }
    }
  }

  return (
    <section id="services" ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm mb-2 tracking-widest">{'// services.config'}</p>
          <h2 className="text-3xl md:text-4xl font-bold neon-magenta">
            Services
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Full-stack Web3 development, AI agent architecture, and security auditing.
            From smart contracts to multi-agent swarms.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const colors = getColorClasses(service.color)
            return (
              <div
                key={i}
                className={`glass p-5 rounded-xl border ${colors.border} card-hover ${colors.hoverGlow}
                  ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${Math.min(i * 80, 800)}ms` }}
              >
                {/* Icon + Title */}
                <div className="flex items-start space-x-3 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm">{service.title}</h3>
                    <span className={`text-xs font-bold ${colors.text}`}>{service.price}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed mb-3">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`text-[10px] px-2 py-0.5 rounded-full border ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
