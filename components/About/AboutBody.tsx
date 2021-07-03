import React from 'react'

type AboutBodyProps = {
    children: React.ReactNode
}

export default function AboutBody({ children }: AboutBodyProps) {
    return (
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-evenly items-center">
            {children}
        </div>
    )
}
