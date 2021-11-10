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
     threshold = 1.0,
     ...others
}: Props) {
     const { ref, inView } = useInView({
          threshold,
          delay,
          initialInView: true,
          triggerOnce,
          ...others,
     })

     return (
          <div className={`${inView ? 'visible' : 'invisible'}`}>
               <div
                    ref={ref}
                    className={`animate__animated ${inView ? animate : ''}`}>
                    {children}
               </div>
          </div>
     )
}
