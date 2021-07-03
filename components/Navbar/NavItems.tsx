import React from 'react'

type NavItemsProps = {
    children: React.ReactNode
}

export default function NavItems(props: NavItemsProps) {
    return (
        <div className="hidden md:flex lg:flex w-8/12 lg:w-[700px] justify-between lg:justify-items-center items-center text-white">
            {props.children}
        </div>
    )
}
