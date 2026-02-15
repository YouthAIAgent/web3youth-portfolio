'use client'

import { useEffect, useRef, useState, FC } from 'react'

const MOCK_TWEETS = [
  {
    text: 'Just shipped AgentWallet v2.0 🚀 PDA-based wallets for AI agents on Solana. Your agent can now autonomously manage funds with multi-sig security. The future of AI x DeFi is here.',
    likes: 847,
    retweets: 234,
    time: '2h',
  },
  {
    text: 'Found another critical vuln in a top Solana protocol today. Responsible disclosure sent. $1.5M at risk. Stay safe out there — always get your contracts audited before launch. 🛡️',
    likes: 1243,
    retweets: 512,
    time: '8h',
  },
  {
    text: 'Hot take: Most "AI agents" in crypto are just cron jobs with a ChatGPT wrapper.\n\nReal AI agents need:\n- Autonomous decision making\n- On-chain execution capability\n- Self-correcting feedback loops\n- PDA wallet infrastructure\n\nWe\'re building the real thing.',
    likes: 2156,
    retweets: 678,
    time: '1d',
  },
  {
    text: 'REKT Shield just flagged a suspicious contract deployment.\n\n🚨 Reentrancy pattern detected\n🚨 Unchecked PDA seeds\n🚨 Missing signer verification\n\nAnother rug prevented. The agents never sleep. 💀',
    likes: 956,
    retweets: 189,
    time: '2d',
  },
]

const formatNumber = (num: number): string => {
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
  return num.toString()
}

const TwitterFeed: FC = () => {
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
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm mb-2 tracking-widest">{'// live_stream.24x7'}</p>
          <h2 className="text-3xl md:text-4xl font-bold neon-magenta">
            Twitter Feed
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Latest from{' '}
            <a
              href="https://twitter.com/Web3__Youth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:underline"
            >
              @Web3__Youth
            </a>{' '}
            • 14.3K followers
          </p>
        </div>

        {/* Tweet cards */}
        <div className="space-y-4">
          {MOCK_TWEETS.map((tweet, i) => (
            <div
              key={i}
              className={`glass p-5 rounded-xl border border-white/5 card-hover
                ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Tweet header */}
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center text-white font-bold text-sm">
                  W3
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-semibold text-sm">Web3Youth</span>
                    <span className="text-neon-cyan text-xs">✓</span>
                    <span className="text-gray-500 text-xs">@Web3__Youth</span>
                  </div>
                  <span className="text-gray-600 text-xs">{tweet.time} ago</span>
                </div>
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>

              {/* Tweet text */}
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {tweet.text}
              </p>

              {/* Tweet actions */}
              <div className="flex items-center space-x-8 mt-4 pt-3 border-t border-white/5">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-neon-pink transition-colors text-xs group">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  <span>{formatNumber(tweet.likes)}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-neon-green transition-colors text-xs group">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                  </svg>
                  <span>{formatNumber(tweet.retweets)}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className={`text-center mt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
          <a
            href="https://twitter.com/Web3__Youth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 transition-all text-sm"
          >
            <span>Follow @Web3__Youth</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TwitterFeed
