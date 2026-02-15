'use client'

import { useEffect, useRef, useState, FC } from 'react'
import { STATS } from '@/lib/constants'

const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return num.toLocaleString()
  }
  return num.toString()
}

const AnimatedCounter: FC<{ target: number; suffix: string; isVisible: boolean }> = ({
  target,
  suffix,
  isVisible,
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), target)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span>
      {formatNumber(count)}{suffix}
    </span>
  )
}

const Stats: FC = () => {
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
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan': return { text: 'text-neon-cyan', glow: 'glow-cyan', border: 'border-neon-cyan/30' }
      case 'magenta': return { text: 'text-neon-magenta', glow: 'glow-magenta', border: 'border-neon-magenta/30' }
      case 'amber': return { text: 'text-neon-amber', glow: 'glow-amber', border: 'border-neon-amber/30' }
      case 'lime': return { text: 'text-neon-lime', glow: 'glow-lime', border: 'border-neon-lime/30' }
      default: return { text: 'text-neon-cyan', glow: 'glow-cyan', border: 'border-neon-cyan/30' }
    }
  }

  return (
    <section ref={ref} className="relative z-10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => {
            const colors = getColorClasses(stat.color)
            return (
              <div
                key={i}
                className={`glass p-6 rounded-xl border ${colors.border} ${colors.glow} card-hover text-center
                  ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className={`text-3xl md:text-4xl font-bold ${colors.text} mb-2`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
