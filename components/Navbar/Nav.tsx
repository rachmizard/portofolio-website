import React from 'react'

type NavProps = {
    children: React.ReactNode
}

export default function Nav(props: NavProps) {
    return (
        <nav className="mx-auto max-w-[1024px] py-5 space-y-5 hidden lg:flex md:flex flex-col lg:flex-row lg:space-y-0 justify-between items-center mt-8">
            {props.children}
        </nav>
    )
}
