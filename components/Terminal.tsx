'use client'

import { useState, useRef, useEffect, KeyboardEvent, FC } from 'react'
import { TERMINAL_COMMANDS } from '@/lib/constants'

const Terminal: FC = () => {
  const [history, setHistory] = useState<{ input: string; output: string }[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState<string[]>([])
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()

    if (trimmed === 'clear') {
      setHistory([])
      return
    }

    const output = TERMINAL_COMMANDS[trimmed] || `Command not found: ${trimmed}\nType 'help' for available commands.`

    setHistory(prev => [...prev, { input: cmd, output }])
    setCommandHistory(prev => [cmd, ...prev])
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (currentInput.trim()) {
        processCommand(currentInput)
        setCurrentInput('')
        setSuggestions([])
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
        const matches = availableCommands.filter(c => c.startsWith(currentInput.trim().toLowerCase()))
        if (matches.length === 1) {
          setCurrentInput(matches[0])
          setSuggestions([])
        } else if (matches.length > 1) {
          setSuggestions(matches)
        }
      }
    }
  }

  const handleInputChange = (value: string) => {
    setCurrentInput(value)
    if (value.trim()) {
      const matches = availableCommands.filter(c => c.startsWith(value.trim().toLowerCase()))
      setSuggestions(matches.length > 0 && matches.length <= 5 ? matches : [])
    } else {
      setSuggestions([])
    }
  }

  return (
    <section id="terminal" ref={sectionRef} className="relative z-10 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className={`mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm mb-2 tracking-widest">{'// interactive_terminal'}</p>
          <h2 className="text-3xl md:text-4xl font-bold neon-lime">
            Terminal
          </h2>
          <p className="text-gray-400 mt-3">
            Try it out. Type <span className="text-neon-lime">help</span> to get started.
          </p>
        </div>

        {/* Terminal window */}
        <div
          className={`glass rounded-xl border border-neon-lime/20 glow-lime overflow-hidden
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '200ms' }}
        >
          {/* Terminal header */}
          <div className="flex items-center px-4 py-3 bg-black/30 border-b border-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-gray-500 text-xs ml-4 flex-1">visitor@web3youth:~</span>
            <div className="flex items-center space-x-2">
              <span className="text-neon-green text-xs">CONNECTED</span>
              <div className="pulse-dot bg-neon-green" />
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="p-4 h-80 md:h-96 overflow-y-auto terminal-body bg-[#0a0e1a]/80 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Welcome message */}
            <div className="text-gray-500 text-sm mb-4">
              <p>Welcome to Web3Youth Terminal v2.0</p>
              <p>Type &apos;help&apos; for available commands.</p>
              <p className="text-gray-600">─────────────────────────────────</p>
            </div>

            {/* Command history */}
            {history.map((entry, i) => (
              <div key={i} className="mb-3">
                <div className="flex items-center text-sm">
                  <span className="text-neon-green">visitor@web3youth</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-neon-cyan">~</span>
                  <span className="text-gray-500">$ </span>
                  <span className="text-gray-300 ml-1">{entry.input}</span>
                </div>
                <pre className="text-gray-400 text-sm mt-1 whitespace-pre-wrap font-mono leading-relaxed">
                  {entry.output}
                </pre>
              </div>
            ))}

            {/* Current input line */}
            <div className="flex items-center text-sm">
              <span className="text-neon-green">visitor@web3youth</span>
              <span className="text-gray-500">:</span>
              <span className="text-neon-cyan">~</span>
              <span className="text-gray-500">$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-gray-300 ml-1 font-mono text-sm caret-neon-cyan"
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-2">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentInput(s)
                      setSuggestions([])
                      inputRef.current?.focus()
                    }}
                    className="text-xs text-neon-lime/60 hover:text-neon-lime transition-colors cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terminal
