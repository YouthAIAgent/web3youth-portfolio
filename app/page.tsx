'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import AgentDashboard from '@/components/AgentDashboard'
import Services from '@/components/Services'
import HumanAI from '@/components/HumanAI'
import Terminal from '@/components/Terminal'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import TwitterFeed from '@/components/TwitterFeed'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const MatrixRain = dynamic(() => import('@/components/MatrixRain'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Stats Bar */}
      <Stats />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Agent Status Dashboard */}
      <AgentDashboard />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Services */}
      <Services />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Human + AI Capabilities */}
      <HumanAI />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Interactive Terminal */}
      <Terminal />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Projects Showcase */}
      <Projects />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Testimonials */}
      <Testimonials />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Blog */}
      <Blog />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Twitter Feed */}
      <TwitterFeed />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  )
}
