'use client'

import { useState, useEffect, FC } from 'react'

interface TypeWriterProps {
  lines: { text: string; color?: string; delay?: number }[]
  speed?: number
  startDelay?: number
  onComplete?: () => void
}

const TypeWriter: FC<TypeWriterProps> = ({ lines, speed = 30, startDelay = 500, onComplete }) => {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; color?: string }[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [started, setStarted] = useState(false)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(timer)
  }, [startDelay])

  useEffect(() => {
    if (!started || complete) return

    if (currentLineIndex >= lines.length) {
      setComplete(true)
      onComplete?.()
      return
    }

    const currentLine = lines[currentLineIndex]
    const lineDelay = currentLine.delay || 0

    if (currentCharIndex === 0 && lineDelay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentCharIndex(1)
      }, lineDelay)
      return () => clearTimeout(delayTimer)
    }

    if (currentCharIndex <= currentLine.text.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev]
          if (newLines.length <= currentLineIndex) {
            newLines.push({ text: '', color: currentLine.color })
          }
          newLines[currentLineIndex] = {
            text: currentLine.text.slice(0, currentCharIndex),
            color: currentLine.color,
          }
          return newLines
        })
        setCurrentCharIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timer)
    } else {
      setCurrentLineIndex(prev => prev + 1)
      setCurrentCharIndex(0)
    }
  }, [started, currentLineIndex, currentCharIndex, lines, speed, complete, onComplete])

  const getColorClass = (color?: string) => {
    switch (color) {
      case 'cyan': return 'text-neon-cyan'
      case 'green': return 'text-neon-green'
      case 'magenta': return 'text-neon-magenta'
      case 'amber': return 'text-neon-amber'
      case 'lime': return 'text-neon-lime'
      case 'gray': return 'text-gray-500'
      default: return 'text-gray-300'
    }
  }

  return (
    <div className="font-mono text-sm md:text-base leading-relaxed">
      {displayedLines.map((line, i) => (
        <div key={i} className={getColorClass(line.color)}>
          {line.text}
          {i === currentLineIndex && !complete && (
            <span className="inline-block w-2 h-4 bg-neon-cyan ml-0.5 animate-blink" />
          )}
        </div>
      ))}
      {complete && (
        <div className="text-gray-300">
          root@web3youth:~${' '}
          <span className="inline-block w-2 h-4 bg-neon-cyan ml-0.5 animate-blink" />
        </div>
      )}
    </div>
  )
}

export default TypeWriter
