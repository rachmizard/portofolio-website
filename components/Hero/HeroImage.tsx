import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroImage() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 500)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="relative mt-10 lg:mt-0">
            <div className="overflow-hidden hidden lg:block">
                <Image
                    unoptimized
                    src="/assets/hero_picture.png"
                    width={300}
                    height={500}
                    loading="eager"
                    className="object-cover z-10"
                    alt="Rachmizard's Hero"
                />
            </div>
            <div className="overflow-hidden relative block lg:hidden">
                <Image
                    unoptimized
                    width={240}
                    height={240}
                    src="/assets/hero_picture_medium.png"
                    objectFit="cover"
                    loading="lazy"
                    className="rounded-full z-10"
                    alt="Rachmizard's Hero"
                />
            </div>
            <div
                className={`hidden lg:block absolute transition-all bg-primary z-50 top-0 h-[500px] opacity-75 ${
                    show ? 'w-0' : 'w-full'
                }`}></div>
            <div className="hidden lg:block absolute border-1 border-white top-6 left-6 z-0 border h-[500px] w-full"></div>
        </div>
    )
}
