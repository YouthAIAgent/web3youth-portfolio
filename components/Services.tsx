'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { SERVICE_CATEGORIES } from '@/lib/constants'

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

  return (
    <section id="services" ref={ref} className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-xl md:text-2xl font-bold text-[#00ffd5] text-glow-cyan">
            {'>'} SERVICES
          </h2>
          <p className="text-[#475569] text-xs mt-1.5">
            From audits to agents. Everything priced in crypto.
          </p>
        </div>

        {/* Service rows — terminal style */}
        <div className="space-y-0">
          {SERVICE_CATEGORIES.map((service, i) => (
            <div
              key={service.name}
              className={`service-row border border-white/[0.04] border-b-0 last:border-b p-4 first:rounded-t-lg last:rounded-b-lg cursor-default ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 80 + 200}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-base">{service.icon}</span>
                    <h3 className="text-[#e2e8f0] text-sm font-medium">{service.name}</h3>
                  </div>
                  <p className="text-[#475569] text-xs ml-[30px]">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-[30px]">
                    {service.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] text-[#64748b] border border-white/[0.06] rounded px-1.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[#fbbf24] text-xs font-semibold whitespace-nowrap flex-shrink-0 text-glow-amber">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
