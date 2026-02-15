import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web3Youth — Solana Developer | AI Agent Architect | Security Auditor',
  description: 'Building autonomous AI agents and secure smart contracts on Solana. Quoted by Solana co-founder toly. 14.3K followers. Hire for audits, bots, dApps.',
  keywords: ['Solana', 'AI Agent', 'Smart Contract Audit', 'Web3', 'Security', 'Blockchain Developer'],
  authors: [{ name: 'Chiranjib', url: 'https://web3youth.in' }],
  openGraph: {
    title: 'Web3Youth — Solana Developer | AI Agent Architect | Security Auditor',
    description: 'Building autonomous AI agents and secure smart contracts on Solana. Quoted by Solana co-founder toly.',
    url: 'https://web3youth.in',
    siteName: 'Web3Youth',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3Youth — Solana Developer | AI Agent Architect',
    description: 'Building autonomous AI agents on Solana. Quoted by @toly. 14.3K followers.',
    creator: '@Web3__Youth',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-mono antialiased">
        {/* CRT Scanline Overlay */}
        <div className="crt-overlay" />
        {children}
      </body>
    </html>
  )
}
