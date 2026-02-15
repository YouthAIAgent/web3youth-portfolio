'use client'

import { useEffect, useRef, useState, FC } from 'react'
import { BLOG_POSTS } from '@/lib/constants'

const Blog: FC = () => {
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

  const getCategoryColor = (color: string) => {
    switch (color) {
      case 'cyan': return 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30'
      case 'magenta': return 'bg-neon-magenta/10 text-neon-magenta border-neon-magenta/30'
      case 'amber': return 'bg-neon-amber/10 text-neon-amber border-neon-amber/30'
      default: return 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30'
    }
  }

  return (
    <section id="blog" ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm mb-2 tracking-widest">{'// blog.posts'}</p>
          <h2 className="text-3xl md:text-4xl font-bold neon-cyan">
            Blog &amp; Research
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Deep dives into security, AI agents, and Solana architecture.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={i}
              className={`glass p-6 rounded-xl border border-white/5 card-hover group cursor-pointer
                ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Meta */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-gray-500 text-xs">{post.date}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getCategoryColor(post.categoryColor)}`}>
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-3 group-hover:text-neon-cyan transition-colors leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Read time + link */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs">{post.readTime} read</span>
                <span className="text-neon-cyan text-xs group-hover:translate-x-1 transition-transform">
                  Read →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
