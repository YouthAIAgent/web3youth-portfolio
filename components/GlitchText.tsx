'use client'

import { FC } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

const GlitchText: FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`glitch ${className}`} data-text={text}>
      {text}
    </span>
  )
}

export default GlitchText
