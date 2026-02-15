export const SITE_CONFIG = {
  name: 'Web3Youth',
  title: 'Web3Youth — Solana Developer | AI Agent Architect | Security Auditor',
  description: 'Building autonomous AI agents and secure smart contracts on Solana. Quoted by Solana co-founder toly. 14.3K followers. Hire for audits, bots, dApps.',
  url: 'https://web3youth.in',
  twitter: '@Web3__Youth',
  github: 'https://github.com/web3youth',
  email: 'chiranjib@web3youth.in',
  solanaAddress: 'EPLmFBwzMaHCkZkmN6W1GciBwNaAfqGaGNVYWkdcxMxM',
};

export const NAV_LINKS = [
  { label: 'Agents', href: '#agents' },
  { label: 'Services', href: '#services' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: 15, suffix: '+', label: 'Projects Built', color: 'cyan' },
  { value: 14300, suffix: '', label: 'Followers', color: 'magenta' },
  { value: 50, suffix: '+', label: 'Audits Done', color: 'amber' },
  { value: 8, suffix: '', label: 'AI Agents', color: 'lime' },
];

export const AGENTS = [
  {
    icon: '🤖',
    name: 'AgentWallet',
    task: 'Monitoring Solana txns • 24/7',
    status: 'ACTIVE',
    statusColor: 'green',
    progress: 87,
    activity: [40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 45, 95],
  },
  {
    icon: '🛡️',
    name: 'REKT Shield',
    task: 'Scanning contracts • Active',
    status: 'SCANNING',
    statusColor: 'cyan',
    progress: 62,
    activity: [30, 50, 70, 40, 85, 55, 60, 90, 45, 70, 80, 35],
  },
  {
    icon: '👻',
    name: 'GhostPilot',
    task: 'Processing queue • 3 tasks',
    status: 'PROCESSING',
    statusColor: 'amber',
    progress: 45,
    activity: [20, 40, 60, 35, 75, 50, 45, 80, 30, 55, 65, 40],
  },
  {
    icon: '🔥',
    name: 'Banger AI',
    task: 'Generating content • Live',
    status: 'LIVE',
    statusColor: 'magenta',
    progress: 93,
    activity: [50, 70, 85, 60, 90, 75, 95, 80, 65, 88, 70, 92],
  },
];

export const SERVICES = [
  {
    icon: '🔍',
    title: 'Smart Contract Audit',
    description: 'Deep security analysis of Solana programs. Finding vulnerabilities before hackers do.',
    price: '$100-$500',
    tags: ['Solana', 'Rust', 'Anchor', 'Security'],
    color: 'cyan',
  },
  {
    icon: '🤖',
    title: 'AI Agent Development',
    description: 'Build autonomous AI agents that operate on-chain with real decision-making capabilities.',
    price: 'Custom',
    tags: ['AI/ML', 'LLM', 'Autonomous', 'Python'],
    color: 'magenta',
  },
  {
    icon: '⚡',
    title: 'Automation & Bots',
    description: 'Trading bots, monitoring systems, and automated workflows for crypto operations.',
    price: '$200-$1K',
    tags: ['Bots', 'Trading', 'Automation', 'APIs'],
    color: 'amber',
  },
  {
    icon: '🛡️',
    title: 'Security Research',
    description: 'Penetration testing, bug bounty hunting, and security audits for Web3 protocols.',
    price: 'Custom',
    tags: ['Pentest', 'Bug Bounty', 'Security'],
    color: 'lime',
  },
  {
    icon: '🌐',
    title: 'Full-Stack dApp',
    description: 'End-to-end decentralized application development with modern UI and Solana integration.',
    price: '$500-$5K',
    tags: ['React', 'Next.js', 'Solana', 'Web3'],
    color: 'cyan',
  },
  {
    icon: '📝',
    title: 'Technical Thread Writing',
    description: 'Research-backed technical threads that educate, engage, and build authority on X.',
    price: '$300-$500',
    tags: ['Content', 'Twitter', 'Research'],
    color: 'pink',
  },
  {
    icon: '🏗️',
    title: 'Protocol Design',
    description: 'Full protocol architecture including tokenomics, governance models, and DeFi mechanics.',
    price: '$1K-$10K',
    tags: ['DeFi', 'Tokenomics', 'Governance'],
    color: 'magenta',
  },
  {
    icon: '💳',
    title: 'AI Agent Wallet Infra',
    description: 'PDA-based wallet infrastructure for autonomous AI agents with escrow and multi-sig.',
    price: '$2K-$8K',
    tags: ['PDA', 'Wallets', 'Escrow', 'Solana'],
    color: 'cyan',
  },
  {
    icon: '🎨',
    title: 'Landing Page',
    description: 'Premium landing pages with animations, glassmorphism, and conversion-optimized design.',
    price: '$150-$800',
    tags: ['HTML/CSS', 'React', 'Design', 'Animation'],
    color: 'amber',
  },
  {
    icon: '📊',
    title: 'DeFi Dashboard',
    description: 'Real-time analytics dashboards with charts, portfolio tracking, and protocol metrics.',
    price: '$500-$3K',
    tags: ['Dashboard', 'Analytics', 'Next.js', 'Charts'],
    color: 'lime',
  },
  {
    icon: '🔧',
    title: 'API & SDK Dev',
    description: 'Developer tools, REST/GraphQL APIs, SDKs, CLI tools, and MCP server development.',
    price: '$300-$2K',
    tags: ['API', 'SDK', 'CLI', 'MCP'],
    color: 'cyan',
  },
  {
    icon: '🚀',
    title: 'Token Launch',
    description: 'SPL token creation, vesting schedules, staking mechanisms, and airdrop infrastructure.',
    price: '$200-$2K',
    tags: ['SPL Token', 'Vesting', 'Staking', 'Airdrop'],
    color: 'magenta',
  },
  {
    icon: '🧩',
    title: 'Browser Extension',
    description: 'Chrome extensions with Manifest V3, AI integration, and Web3 wallet connectivity.',
    price: '$300-$1.5K',
    tags: ['Chrome', 'Extension', 'Manifest V3', 'AI'],
    color: 'amber',
  },
  {
    icon: '🧠',
    title: 'AI Content Engine',
    description: 'Automated content generation pipelines using GPT, Claude, and custom fine-tuned models.',
    price: '$500-$2K',
    tags: ['AI', 'Content', 'Automation', 'GPT'],
    color: 'pink',
  },
  {
    icon: '💬',
    title: 'Telegram & Discord Bot',
    description: 'Feature-rich bots for community management, alerts, trading signals, and moderation.',
    price: '$100-$500',
    tags: ['Telegram', 'Discord', 'Bot', 'Node.js'],
    color: 'lime',
  },
  {
    icon: '🕸️',
    title: 'Multi-Agent Swarms',
    description: 'Orchestrated multi-agent systems with ACP protocol for complex autonomous operations.',
    price: '$3K-$15K',
    tags: ['Swarms', 'ACP', 'Autonomous', 'AI'],
    color: 'magenta',
  },
];

export const PROJECTS = [
  {
    name: 'AgentWallet',
    status: 'Live',
    statusColor: 'green',
    description: 'PDA wallet agent on Solana that autonomously manages funds, executes trades, and handles cross-program invocations with multi-sig security.',
    tags: ['Solana', 'Rust', 'PDA', 'AI Agent'],
  },
  {
    name: 'REKT Shield',
    status: 'Live',
    statusColor: 'green',
    description: 'Smart contract security scanner that detects reentrancy, overflow, and logic bugs in Solana programs before deployment.',
    tags: ['Security', 'Rust', 'Analysis', 'Solana'],
  },
  {
    name: 'GhostPilot',
    status: 'Beta',
    statusColor: 'amber',
    description: 'Stealth automation framework for executing complex multi-step operations across chains with privacy-first architecture.',
    tags: ['Automation', 'Privacy', 'Multi-chain', 'Python'],
  },
  {
    name: 'AI Survival Island',
    status: 'Dev',
    statusColor: 'cyan',
    description: 'AI agent competition game where autonomous agents compete for resources, form alliances, and battle on-chain in real-time.',
    tags: ['Gaming', 'AI', 'On-chain', 'Competition'],
  },
  {
    name: 'On-Chain Roast',
    status: 'Live',
    statusColor: 'green',
    description: 'AI-powered wallet analyzer that generates savage, humorous roasts based on your on-chain transaction history.',
    tags: ['AI', 'Fun', 'Analytics', 'Solana'],
  },
  {
    name: 'Banger AI',
    status: 'Live',
    statusColor: 'green',
    description: 'AI content generation engine that creates viral-worthy threads, analyses, and insights for Web3 audiences.',
    tags: ['AI', 'Content', 'Automation', 'NLP'],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Alex K.',
    role: 'DeFi Protocol Founder',
    text: 'Web3Youth found a critical vulnerability in our smart contract that could have led to a $2M exploit. His audit was thorough, fast, and probably saved our entire protocol. The detailed report was incredibly professional.',
    rating: 5,
  },
  {
    name: 'Mike R.',
    role: 'Crypto Fund Manager',
    text: 'The AI trading agent Chiranjib built for us has been running flawlessly for 4 months straight. It handles complex DeFi strategies autonomously and has significantly outperformed our manual operations. Absolute wizard.',
    rating: 5,
  },
  {
    name: 'Sarah J.',
    role: 'Web3 Marketing Lead',
    text: 'Hired Web3Youth for our content engine and the results were insane — 500K+ impressions in the first month. The AI-powered content pipeline he built generates better threads than most humans. Totally worth every penny.',
    rating: 5,
  },
];

export const BLOG_POSTS = [
  {
    title: 'How I Found a Critical Bug in a Top 10 Solana DeFi Protocol',
    date: '2025-02-10',
    category: 'SECURITY',
    categoryColor: 'cyan',
    excerpt: 'A deep dive into the vulnerability discovery process, from initial recon to responsible disclosure. This bug could have drained $2M+ from user funds.',
    readTime: '8 min',
  },
  {
    title: 'Building Autonomous AI Agents That Actually Work On-Chain',
    date: '2025-01-28',
    category: 'AI AGENTS',
    categoryColor: 'magenta',
    excerpt: 'Most "AI agents" are just glorified chatbots. Here\'s how to build agents that actually execute transactions, manage wallets, and operate 24/7.',
    readTime: '12 min',
  },
  {
    title: 'The Future of AI Agent Infrastructure on Solana',
    date: '2025-01-15',
    category: 'ARCHITECTURE',
    categoryColor: 'amber',
    excerpt: 'Exploring the emerging stack for AI agent infra: PDA wallets, autonomous execution, multi-agent coordination, and the ACP protocol.',
    readTime: '10 min',
  },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  help       - Show this help message
  about      - About Web3Youth
  services   - List all services
  projects   - Show project portfolio
  skills     - Technical skills
  contact    - Contact information
  hire       - How to hire me
  socials    - Social media links
  clear      - Clear terminal
  sudo       - Try it ;)
  hack       - ???
  matrix     - Enter the matrix
  whoami     - Who are you?`,

  about: `┌─────────────────────────────────────┐
│         ABOUT WEB3YOUTH             │
├─────────────────────────────────────┤
│ Name:    Chiranjib                  │
│ Handle:  @Web3__Youth               │
│ Role:    Solana Dev | AI Architect  │
│          | Security Auditor         │
│ Status:  Building the future 🚀     │
│                                     │
│ Quoted by Solana co-founder @toly   │
│ 14.3K followers on X               │
│ 50+ security audits completed       │
│ 8 autonomous AI agents running      │
└─────────────────────────────────────┘`,

  services: `[SERVICE CATALOG v2.0]

  01. Smart Contract Audit    $100-$500
  02. AI Agent Development    Custom
  03. Automation & Bots       $200-$1K
  04. Security Research       Custom
  05. Full-Stack dApp         $500-$5K
  06. Technical Threads       $300-$500
  07. Protocol Design         $1K-$10K
  08. AI Wallet Infra         $2K-$8K
  09. Landing Page            $150-$800
  10. DeFi Dashboard          $500-$3K
  11. API & SDK Dev           $300-$2K
  12. Token Launch            $200-$2K
  13. Browser Extension       $300-$1.5K
  14. AI Content Engine       $500-$2K
  15. TG & Discord Bot        $100-$500
  16. Multi-Agent Swarms      $3K-$15K

Type 'hire' to get started.`,

  projects: `[PROJECT PORTFOLIO]

  ● AgentWallet      [LIVE]  PDA wallet agent on Solana
  ● REKT Shield      [LIVE]  Smart contract security scanner
  ● GhostPilot       [BETA]  Stealth automation framework
  ● AI Survival Isle [DEV]   AI agent competition game
  ● On-Chain Roast   [LIVE]  AI wallet roaster
  ● Banger AI        [LIVE]  AI content generation engine

  Status: 4 live | 1 beta | 1 in development`,

  skills: `[TECHNICAL SKILLS]

  Languages:    Rust, TypeScript, Python, Solidity
  Blockchain:   Solana, Anchor, SPL, PDAs
  AI/ML:        LLMs, Fine-tuning, RAG, Agents
  Frontend:     React, Next.js, Tailwind CSS
  Backend:      Node.js, Express, PostgreSQL
  Security:     Auditing, Pentesting, Bug Bounty
  DevOps:       Docker, CI/CD, Vercel, AWS
  Tools:        Git, Linux, VS Code, Cursor`,

  contact: `[CONTACT INFO]

  Twitter:  @Web3__Youth
  GitHub:   github.com/web3youth
  Email:    chiranjib@web3youth.in
  Website:  web3youth.in
  
  USDT (Solana): EPLmFBwzMaHCkZkmN6W1GciBwNaAfqGaGNVYWkdcxMxM

  DMs are open. Let's build something.`,

  hire: `[HIRING PROCESS]

  1. DM me on Twitter @Web3__Youth
  2. Or fill out the contact form below
  3. Describe your project & budget
  4. I'll respond within 24 hours
  5. We'll scope the work together
  6. 50% upfront, 50% on delivery

  Ready? Scroll down to contact or DM me.`,

  socials: `[SOCIAL LINKS]

  🐦 Twitter:  twitter.com/Web3__Youth
  🐙 GitHub:   github.com/web3youth
  📧 Email:    chiranjib@web3youth.in
  🌐 Website:  web3youth.in`,

  sudo: `[sudo] password for visitor: 
  
  ❌ Permission denied. Nice try though 😏
  Only @Web3__Youth has root access here.`,

  hack: `[!] INITIATING HACK SEQUENCE...
  [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%
  
  ⚠️  ACCESS DENIED
  
  Firewall: ACTIVE
  IDS: MONITORING
  Shield: REKT Shield v2.0
  
  Nice try. Maybe hire me instead? 💀`,

  matrix: `Wake up, Neo...
  
  The Matrix has you...
  
  Follow the white rabbit 🐇
  
  ▓▒░ ENTERING THE MATRIX ░▒▓
  
  Just kidding. But I can build you 
  something just as cool. Type 'hire'.`,

  whoami: `> visitor@web3youth.in
  > Role: Potential Client / Fellow Builder
  > Access Level: READ_ONLY
  > Suggestion: Type 'hire' to upgrade access 🔓`,
};

export const HUMAN_AI_CAPABILITIES = {
  human: [
    'Solana smart contract development in Rust',
    'Deep security auditing & vulnerability research',
    'Protocol architecture & tokenomics design',
    'Strategic content creation & thought leadership',
    'Client communication & project management',
    'Creative problem solving & innovation',
  ],
  ai: [
    '24/7 autonomous monitoring & execution',
    'Real-time contract scanning (REKT Shield)',
    'Automated content generation (Banger AI)',
    'Transaction monitoring (AgentWallet)',
    'Multi-agent task orchestration (GhostPilot)',
    'Pattern recognition & anomaly detection',
  ],
  combined: [
    'Round-the-clock security monitoring with human oversight',
    'AI-generated content refined by human expertise',
    'Autonomous trading with human-defined risk parameters',
    'Instant vulnerability detection with deep manual analysis',
    'Scalable operations without sacrificing quality',
    'Ship faster. Ship better. Ship 24/7.',
  ],
};

export const SERVICE_OPTIONS = [
  'Smart Contract Audit',
  'AI Agent Development',
  'Automation & Bots',
  'Security Research',
  'Full-Stack dApp',
  'Technical Thread Writing',
  'Protocol Design',
  'AI Agent Wallet Infra',
  'Landing Page',
  'DeFi Dashboard',
  'API & SDK Dev',
  'Token Launch',
  'Browser Extension',
  'AI Content Engine',
  'Telegram & Discord Bot',
  'Multi-Agent Swarms',
  'Other',
];

export const BUDGET_OPTIONS = [
  'Under $500',
  '$500 - $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
  'Not sure yet',
];
