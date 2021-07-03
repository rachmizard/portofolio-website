import Image from 'next/image'

export default function AboutImage() {
    return (
        <div className="relative">
            <div className="hidden md:block">
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
            <div className="md:hidden">
                <Image
                    unoptimized
                    src="/assets/hero_picture_medium.png"
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
