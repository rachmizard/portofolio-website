import Image from 'next/image'

export default function AboutImage() {
    return (
        <div className="relative">
            <Image
                unoptimized
                src="/assets/hero_picture.png"
                width={300}
                height={400}
                loading="lazy"
                className="object-cover z-10"
                alt="Rachmizard's Hero"
            />
            <div className="absolute border-1 border-white top-6 left-6 z-0 border h-[400px] w-full"></div>
        </div>
    )
}
