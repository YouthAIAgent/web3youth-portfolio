'use client'

import { useEffect, useRef, useState, FC } from 'react'
import { TESTIMONIALS } from '@/lib/constants'

const Testimonials: FC = () => {
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
        {/* Section header */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm mb-2 tracking-widest">{'// client_reviews'}</p>
          <h2 className="text-3xl md:text-4xl font-bold neon-pink">
            Testimonials
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            What clients say after working with Web3Youth.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`glass p-6 rounded-xl border border-neon-pink/15 card-hover relative
                ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-4xl text-neon-pink/20 leading-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-neon-amber text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-magenta/30 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
