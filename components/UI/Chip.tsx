import React from 'react'

type TargetEnum = '_self' | '_blank' | '_parent' | '_top'

interface ChipProps {
     children: React.ReactNode
     href?: string
     target?: TargetEnum
}

export default function Chip({ children, href = '#', target }: ChipProps) {
     return (
          <a
               href={href}
               rel="noreferrer"
               target={target}
               className="rounded-full inline-flex items-center gap-2 self-center font-medium py-1 px-3 mx-2 text-dark bg-white shadow-md transition-all hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-opacity-75 focus:ring-primary">
               {children}
          </a>
     )
}
