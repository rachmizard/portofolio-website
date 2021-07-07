import React from 'react'

type MainProps = {
     children: React.ReactNode
}

export default function Main({ children }: MainProps) {
     return (
          <main className="lg:overflow-hidden mx-auto max-w-[1024px] min-h-screen">
               {children}
          </main>
     )
}
