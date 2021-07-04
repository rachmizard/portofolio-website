import { useInView } from 'react-intersection-observer'

export default function AboutTitle() {
    const { ref, inView } = useInView({ threshold: 0.1 })

    return (
        <div
            ref={ref}
            className="overflow-hidden max-w-[14rem] mx-auto mb-20 space-y-2">
            <h4
                className={`font-bold text-center text-white text-4xl tracking-wider uppercase transition-transform duration-1000 delay-100 transform ${
                    inView ? '-translate-y-0' : '-translate-y-10'
                } `}>
                About Me
            </h4>
            <div className="bg-white mx-auto w-[calc(100%-4rem)] h-2"></div>
        </div>
    )
}
