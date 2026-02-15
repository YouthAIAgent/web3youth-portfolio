'use client'

import { useEffect, useRef, useState, FC } from 'react'
import { PROJECTS } from '@/lib/constants'

const Projects: FC = () => {
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

  const getStatusColor = (color: string) => {
    switch (color) {
      case 'green': return { bg: 'bg-neon-green/10', text: 'text-neon-green', border: 'border-neon-green/30', dot: 'bg-neon-green' }
      case 'amber': return { bg: 'bg-neon-amber/10', text: 'text-neon-amber', border: 'border-neon-amber/30', dot: 'bg-neon-amber' }
      case 'cyan': return { bg: 'bg-neon-cyan/10', text: 'text-neon-cyan', border: 'border-neon-cyan/30', dot: 'bg-neon-cyan' }
      default: return { bg: 'bg-neon-green/10', text: 'text-neon-green', border: 'border-neon-green/30', dot: 'bg-neon-green' }
    }
  }

  return (
    <section id="projects" ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm mb-2 tracking-widest">{'// projects.showcase'}</p>
          <h2 className="text-3xl md:text-4xl font-bold neon-amber">
            Projects
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            A selection of live products and tools built for the Solana ecosystem.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const status = getStatusColor(project.statusColor)
            return (
              <div
                key={i}
                className={`glass p-6 rounded-xl border border-white/5 card-hover group
                  ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Project header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-lg group-hover:text-neon-amber transition-colors">
                    {project.name}
                  </h3>
                  <div className={`flex items-center space-x-1.5 px-2 py-0.5 rounded-full border ${status.border} ${status.bg}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                    <span className={`text-[10px] font-bold ${status.text}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-gray-400 bg-white/[0.03]"
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

export default Projects
