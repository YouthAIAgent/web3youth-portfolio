'use client'

import { FC, useEffect, useRef, useState } from 'react'
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

  return (
    <section id="projects" ref={ref} className="relative z-10 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-xl md:text-2xl font-bold text-[#00ffd5] text-glow-cyan">
            {'>'} PROJECTS
          </h2>
          <p className="text-[#475569] text-xs mt-1.5">
            Open source. Battle-tested. Deployed on Solana.
          </p>
        </div>

        {/* Project grid — 3 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PROJECTS.map((project, i) => (
            <a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#060a14] border border-white/[0.06] rounded-lg p-4 transition-all duration-300 hover:border-[#00ffd5]/15 group block ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 80 + 200}ms` }}
            >
              {/* Name + status */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[#e2e8f0] text-sm font-medium group-hover:text-[#00ffd5] transition-colors truncate mr-2">
                  {project.name}
                </h3>
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded border flex-shrink-0 uppercase tracking-wider"
                  style={{
                    color: project.statusColor,
                    borderColor: `${project.statusColor}25`,
                    backgroundColor: `${project.statusColor}08`,
                  }}
                >
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#475569] text-xs mb-3 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] text-[#64748b] border border-white/[0.04] rounded px-1.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
