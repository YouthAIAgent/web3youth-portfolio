export const SITE_CONFIG = {
  name: 'Web3Youth',
  title: 'Web3Youth — Solana Developer | AI Agent Architect | Security Auditor',
  description: 'Building autonomous AI agents and secure smart contracts on Solana. Quoted by Solana co-founder toly. 14.3K followers. Hire for audits, bots, dApps.',
  url: 'https://web3youth.in',
  twitter: '@Web3__Youth',
  twitterUrl: 'https://twitter.com/Web3__Youth',
  github: 'https://github.com/YouthAIAgent',
  email: 'web3youth@proton.me',
  telegram: 'https://t.me/web3youth',
  solanaAddress: 'EPLmFBwzMaHCkZkmN6W1GciBwNaAfqGaGNVYWkdcxMxM',
};

export const NAV_LINKS = [
  { label: 'Agents', href: '#agents' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Contact', href: '#contact' },
];

export const AGENTS = [
  {
    name: 'AgentWallet Monitor',
    task: 'Watching PDA wallets & Solana txns in real-time',
    status: 'ACTIVE',
    color: '#22c55e',
    uptime: '127d 14h',
    sparkline: [40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 45, 95, 50, 72, 88],
  },
  {
    name: 'REKT Shield',
    task: 'Scanning contracts for vulnerabilities',
    status: 'SCANNING',
    color: '#00ffd5',
    uptime: '89d 03h',
    sparkline: [30, 50, 70, 40, 85, 55, 60, 90, 45, 70, 80, 35, 65, 42, 78],
  },
  {
    name: 'GhostPilot',
    task: '3 stealth tasks queued',
    status: '3 TASKS',
    color: '#fbbf24',
    uptime: '43d 19h',
    sparkline: [20, 40, 60, 35, 75, 50, 45, 80, 30, 55, 65, 40, 70, 38, 52],
  },
  {
    name: 'Banger AI',
    task: 'Generating content for crypto Twitter',
    status: 'LIVE',
    color: '#a855f7',
    uptime: '201d 06h',
    sparkline: [50, 70, 85, 60, 90, 75, 95, 80, 65, 88, 70, 92, 78, 84, 91],
  },
];

export const SERVICE_CATEGORIES = [
  {
    icon: '🔍',
    name: 'Security & Auditing',
    price: '$100 – $500',
    description: 'Smart contract audits, penetration testing, vulnerability reports',
    tags: ['Solana', 'Rust', 'Security', 'Bug Bounty'],
  },
  {
    icon: '🤖',
    name: 'AI Agents & Automation',
    price: '$200 – $15K',
    description: 'Custom autonomous agents, swarms, trading bots, content engines',
    tags: ['AI/ML', 'Python', 'LLM', 'Agents'],
  },
  {
    icon: '💻',
    name: 'Full-Stack Development',
    price: '$500 – $5K',
    description: 'dApps, dashboards, APIs, SDKs, landing pages',
    tags: ['React', 'Next.js', 'Node.js', 'Solana'],
  },
  {
    icon: '🏗️',
    name: 'Protocol Architecture',
    price: '$1K – $10K',
    description: 'Tokenomics, governance, PDA wallet infra, escrow systems',
    tags: ['DeFi', 'Anchor', 'Architecture', 'PDAs'],
  },
  {
    icon: '📝',
    name: 'Content & Threads',
    price: '$300 – $500',
    description: 'Technical threads, research reports, documentation',
    tags: ['Content', 'Twitter', 'Research', 'Docs'],
  },
  {
    icon: '📡',
    name: 'Bots & Integrations',
    price: '$100 – $1.5K',
    description: 'Telegram bots, Discord bots, browser extensions, webhooks',
    tags: ['Telegram', 'Discord', 'Chrome', 'API'],
  },
];

export const PROJECTS = [
  {
    name: 'AgentWallet Protocol',
    status: 'LIVE',
    statusColor: '#22c55e',
    description: 'PDA wallets for AI agents on Solana. Autonomous treasury management.',
    tags: ['Solana', 'Rust', 'PDA', 'AI Agent'],
    github: 'https://github.com/YouthAIAgent/agentwallet',
  },
  {
    name: 'REKT Shield',
    status: 'LIVE',
    statusColor: '#22c55e',
    description: 'Smart contract security scanner. Finds vulns before they find you.',
    tags: ['Security', 'Rust', 'Analysis'],
    github: '#',
  },
  {
    name: 'GhostPilot',
    status: 'BETA',
    statusColor: '#fbbf24',
    description: 'Stealth browser automation. Headless, undetectable.',
    tags: ['Chrome', 'Automation', 'Privacy'],
    github: '#',
  },
  {
    name: 'Banger AI',
    status: 'LIVE',
    statusColor: '#22c55e',
    description: 'AI content generation engine for crypto Twitter.',
    tags: ['AI', 'Content', 'NLP'],
    github: '#',
  },
  {
    name: 'On-Chain Roast',
    status: 'LIVE',
    statusColor: '#22c55e',
    description: 'AI roasts wallets based on their on-chain tx history.',
    tags: ['AI', 'Fun', 'Analytics'],
    github: '#',
  },
  {
    name: 'AI Survival Island',
    status: 'DEV',
    statusColor: '#00ffd5',
    description: 'AI agent competition game. Last agent standing wins.',
    tags: ['Gaming', 'AI', 'On-chain'],
    github: '#',
  },
];

export const TERMINAL_COMMANDS: Record<string, string | 'MATRIX' | 'CLEAR'> = {
  help: `Available commands:
  about      — Who is Web3Youth
  services   — What I ship
  projects   — What I've built
  skills     — Technical arsenal
  contact    — How to reach me
  hire       — Start a project
  socials    — Social links
  whoami     — Full profile
  toly       — The story
  hack       — Try it 💀
  sudo       — Nice try
  matrix     — 🐇
  clear      — Clear terminal`,

  about: `  Name:     Chiranjib
  Handle:   @Web3__Youth
  Alias:    Black / Youth / Web3Youth
  Location: Odisha, India
  
  Role:     Solana Developer
            AI Agent Architect
            Security Auditor
  
  Story:    Kid from a small town in Odisha.
            No connections, no VC, no degree.
            Self-taught everything from a laptop.
            Built 5 AI agents running 24/7.
            Funded by community token fees. Zero VC.
            Got quoted by Solana co-founder @toly.
            
  Status:   Still building. Still hungry. 🔨`,

  services: `  ┌─ SERVICE CATALOG ─────────────────────┐
  │                                       │
  │  🔍  Security & Auditing   $100-$500  │
  │  🤖  AI Agents & Auto     $200-$15K  │
  │  💻  Full-Stack Dev        $500-$5K   │
  │  🏗️  Protocol Design       $1K-$10K   │
  │  📝  Content & Threads     $300-$500  │
  │  📡  Bots & Integrations   $100-$1.5K │
  │                                       │
  │  All payments accepted in crypto.     │
  └───────────────────────────────────────┘
  
  Type 'hire' to get started.`,

  projects: `  ● AgentWallet Protocol  [LIVE]  PDA wallets for AI agents
  ● REKT Shield           [LIVE]  Smart contract scanner
  ● GhostPilot            [BETA]  Stealth automation
  ● Banger AI             [LIVE]  AI content generation
  ● On-Chain Roast        [LIVE]  Wallet roaster
  ● AI Survival Island    [DEV]   AI competition game

  4 live · 1 beta · 1 in dev`,

  skills: `  Languages:   Rust, TypeScript, Python, Solidity
  Blockchain:  Solana, Anchor, SPL, PDAs, Metaplex
  AI/ML:       LLMs, Fine-tuning, RAG, Agent Swarms
  Frontend:    React, Next.js, Tailwind CSS
  Backend:     Node.js, Express, PostgreSQL, Redis
  Security:    Auditing, Pentesting, Bug Bounty
  DevOps:      Docker, CI/CD, Vercel, AWS
  Tools:       Git, Linux, VS Code, Cursor`,

  contact: `  𝕏 Twitter:   @Web3__Youth
  ⌨ GitHub:    github.com/YouthAIAgent
  ✉ Email:     web3youth@proton.me
  ✈ Telegram:  @web3youth

  💰 USDT (Solana):
  EPLmFBwzMaHCkZkmN6W1GciBwNaAfqGaGNVYWkdcxMxM

  DMs are open. Let's build.`,

  hire: `  ── HIRING PROCESS ──
  
  1. DM me on Twitter @Web3__Youth
  2. Or fill the contact form below ↓
  3. Describe your project & budget
  4. I respond within 24 hours
  5. We scope, agree, ship
  6. 50% upfront, 50% on delivery
  
  Crypto payments preferred.
  Scroll down or type 'contact'.`,

  socials: `  𝕏  twitter.com/Web3__Youth     [14.3K]
  🐙 github.com/YouthAIAgent
  📧 web3youth@proton.me
  ✈️  t.me/web3youth`,

  whoami: `  ┌─────────────────────────────────────┐
  │  SYSTEM PROFILE: visitor            │
  ├─────────────────────────────────────┤
  │  Host:      web3youth.in            │
  │  Role:      Potential Client        │
  │  Access:    READ_ONLY               │
  │  Clearance: NONE                    │
  │  Session:   ACTIVE                     │
  │  Protocol:  SSH-2.0                 │
  └─────────────────────────────────────┘
  
  Want root access? Type 'hire'. 🔓`,

  toly: `  ────────────────────────────────────
  THE TOLY STORY
  ────────────────────────────────────
  
  A kid from Odisha — no connections,
  no fancy degree, no VC backing —
  shipped AgentWallet Protocol on Solana.
  
  PDA wallets for autonomous AI agents.
  Not a fork. Not a copy. Original work.
  Built from scratch. Zero funding.
  
  Then Anatoly Yakovenko — co-founder
  of Solana, the man himself —
  quoted the tweet.
  
  From a small town → quoted by @toly.
  
  That moment changed everything.
  But the grind didn't stop.
  
  Still building. Still hungry. 🥹`,

  sudo: `  [sudo] password for visitor: ••••••••
  
  ❌ Permission denied.
  
  Only @Web3__Youth has root access.
  This incident has been reported. 😏`,

  hack: 'MATRIX',

  matrix: 'MATRIX',

  clear: 'CLEAR',
};

export const SERVICE_OPTIONS_CONTACT = [
  'Security & Auditing',
  'AI Agents & Automation',
  'Full-Stack Development',
  'Protocol Architecture',
  'Content & Threads',
  'Bots & Integrations',
  'Other',
];
