import React from 'react'
import { overrideTailwindClasses } from 'tailwind-override'

interface SubtitleProps {
  className?: string;
  children: React.ReactNode
}

export const Subtitle: React.FC<SubtitleProps> = ({children, className}) => {
  return (
    <h4 className={overrideTailwindClasses(`text-base font-semibold ${className}`)}>{children}</h4>
  )
}
