import React from 'react'

type AboutProps = {
    children: React.ReactNode
}

export default function About({ children }: AboutProps) {
    return (
        <section id="about" className="mt-32 pt-20">
            {children}
        </section>
    )
}
