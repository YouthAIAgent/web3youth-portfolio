'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AgentDashboard from '@/components/AgentDashboard'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Terminal from '@/components/Terminal'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <AgentDashboard />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Terminal />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  )
}
