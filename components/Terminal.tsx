'use client'

import { useState, useRef, useEffect, KeyboardEvent, FC, useCallback } from 'react'
import { TERMINAL_COMMANDS } from '@/lib/constants'

const Terminal: FC = () => {
  const [history, setHistory] = useState<{ input: string; output: string }[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [matrixActive, setMatrixActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const availableCommands = Object.keys(TERMINAL_COMMANDS)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const triggerMatrix = useCallback(() => {
    setMatrixActive(true)
    setTimeout(() => setMatrixActive(false), 4000)
  }, [])

  const processCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()

    if (!trimmed) return

    const result = TERMINAL_COMMANDS[trimmed]

    if (result === 'CLEAR') {
      setHistory([])
      setCommandHistory(prev => [cmd, ...prev])
      setHistoryIndex(-1)
      return
    }

    if (result === 'MATRIX') {
      triggerMatrix()
      setHistory(prev => [...prev, {
        input: cmd,
        output: `[!] INITIATING HACK SEQUENCE...
[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%

⚠️  ACCESS DENIED

Firewall: ACTIVE
IDS: MONITORING  
Shield: REKT Shield v2.0

Nice try. Maybe hire me instead? 💀`
      }])
      setCommandHistory(prev => [cmd, ...prev])
      setHistoryIndex(-1)
      return
    }

    const output = typeof result === 'string'
      ? result
      : `command not found: ${trimmed}\nType 'help' for available commands.`

    setHistory(prev => [...prev, { input: cmd, output }])
    setCommandHistory(prev => [cmd, ...prev])
    setHistoryIndex(-1)
  }, [triggerMatrix])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (currentInput.trim()) {
        processCommand(currentInput)
        setCurrentInput('')
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      } else {
        setHistoryIndex(-1)
        setCurrentInput('')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      if (currentInput.trim()) {
        const matches = availableCommands.filter(c =>
          c.startsWith(currentInput.trim().toLowerCase())
        )
        if (matches.length === 1) {
          setCurrentInput(matches[0])
        }
      }
    }
  }

  return (
    <section id="terminal" ref={sectionRef} className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-xl md:text-2xl font-bold text-[#00ffd5] text-glow-cyan">
            {'>'} TERMINAL
          </h2>
          <p className="text-[#475569] text-xs mt-1.5">
            Type &apos;help&apos; to explore. Tab to autocomplete.
          </p>
        </div>

        {/* Terminal window */}
        <div
          className={`bg-[#040712] border border-white/[0.06] rounded-lg overflow-hidden ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '200ms' }}
        >
          {/* Terminal header */}
          <div className="flex items-center px-4 py-2.5 bg-[#0a0e1a] border-b border-white/[0.04]">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/50" />
            </div>
            <span className="text-[#475569] text-[10px] ml-3 flex-1">
              visitor@web3youth:~ [CONNECTED]
            </span>
            <div className="flex items-center space-x-1.5">
              <span className="text-[#22c55e] text-[10px]">●</span>
              <span className="text-[#475569] text-[10px]">LIVE</span>
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className={`p-4 h-80 md:h-[420px] overflow-y-auto terminal-body cursor-text relative`}
            onClick={() => inputRef.current?.focus()}
          >
            {/* Matrix rain overlay */}
            {matrixActive && <MatrixRain />}

            {/* Welcome */}
            <div className="text-xs mb-4">
              <p className="text-[#22c55e]">Web3Youth Terminal v2.0</p>
              <p className="text-[#334155]">Type &apos;help&apos; for available commands.</p>
              <p className="text-[#1e293b]">────────────────────────────────</p>
            </div>

            {/* History */}
            {history.map((entry, i) => (
              <div key={i} className="mb-3">
                <div className="flex items-center text-xs">
                  <span className="text-[#22c55e]">visitor</span>
                  <span className="text-[#334155]">@</span>
                  <span className="text-[#00ffd5]">web3youth</span>
                  <span className="text-[#334155]">:~$ </span>
                  <span className="text-[#94a3b8] ml-1">{entry.input}</span>
                </div>
                <pre className="text-[#64748b] text-xs mt-1 whitespace-pre-wrap font-mono leading-relaxed">
                  {entry.output}
                </pre>
              </div>
            ))}

            {/* Input line */}
            <div className="flex items-center text-xs">
              <span className="text-[#22c55e]">visitor</span>
              <span className="text-[#334155]">@</span>
              <span className="text-[#00ffd5]">web3youth</span>
              <span className="text-[#334155]">:~$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-[#94a3b8] ml-1 font-mono text-xs caret-[#00ffd5]"
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Matrix rain effect inside terminal
const MatrixRain: FC = () => {
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789'
  const columns = 40

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-30">
      {Array.from({ length: columns }).map((_, i) => {
        const left = (i / columns) * 100
        const delay = Math.random() * 3
        const duration = 2 + Math.random() * 3
        const char = chars[Math.floor(Math.random() * chars.length)]
        return (
          <span
            key={i}
            className="absolute text-[#22c55e] text-[10px] font-mono"
            style={{
              left: `${left}%`,
              top: '-20px',
              animation: `matrix-fall ${duration}s ${delay}s linear infinite`,
            }}
          >
            {char}
          </span>
        )
      })}
    </div>
  )
}

export default Terminal
