import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export default function AboutImage() {
    const { ref, inView } = useInView({ threshold: 0.2 })

    return (
        <div ref={ref} className="relative">
            <div className="hidden md:block">
                <Image
                    unoptimized
                    src="/assets/about_img.png"
                    width={300}
                    height={400}
                    loading="lazy"
                    className="object-cover z-10"
                    alt="Rachmizard's Hero"
                />

                <div
                    className={`hidden sm:block absolute transition-all duration-1000 bg-primary z-50 bottom-1 w-full opacity-75 ${
                        inView ? 'h-0' : 'h-[403px]'
                    }`}></div>
                <div className="absolute border-1 border-white top-6 left-6 z-0 border h-[400px] w-full"></div>
            </div>
            <div className="md:hidden">
                <Image
                    unoptimized
                    src="/assets/about_img.png"
                    width={240}
                    height={240}
                    loading="lazy"
                    className="rounded-full object-cover z-10"
                    alt="Rachmizard's Hero"
                />
            </div>
        </div>
    )
}
