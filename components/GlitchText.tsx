'use client'

import { FC } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

const GlitchText: FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`glitch relative inline-block ${className}`} data-text={text}>
      {text}
    </span>
  )
}

export default GlitchText
