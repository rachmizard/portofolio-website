import React from 'react'

type NavItemProps = {
    title: string
    to?: string
}

export default function NavItem({ title, to = '#' }: NavItemProps) {
    return (
        <a
            href={to}
            className="font-bold text-xl hover:text-primary inline-block p-1">
            {title}
        </a>
    )
}
