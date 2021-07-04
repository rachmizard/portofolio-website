import { useInView } from 'react-intersection-observer'
type Props = {
    children: React.ReactNode
    animate?: string
    delay?: number
    triggerOnce?: boolean
    threshold?: number | number[]
}

export default function ScrollAnimation({
    children,
    animate,
    delay,
    triggerOnce,
    threshold,
    ...others
}: Props) {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        delay,
        initialInView: true,
        triggerOnce,
        ...others,
    })

    return (
        <div ref={ref} className={`animate__animated ${inView ? animate : ''}`}>
            {children}
        </div>
    )
}
