import { useState, useRef, ReactNode } from 'react'
import { InlineIcon } from '@iconify/react'
import arrowRight from '@iconify/icons-ant-design/arrow-right'
import arrowLeft from '@iconify/icons-ant-design/arrow-left'
import ScrollContainer from 'react-indiana-drag-scroll'

type ScrollableProps = {
     children: ReactNode
     className?: string
     data: Array<any>
}

const scrollPercentTarget = 800

export default function Scrollable({
     children,
     className,
     data,
}: ScrollableProps) {
     const ref = useRef<HTMLDivElement>(null)
     const [state, setState] = useState({
          isDisabledNext: false,
          isDisabledPrev: false,
     })

     const onScrollContainer = () => {
          const maxScrollWidth =
               ref.current!.scrollWidth - ref.current!.clientWidth

          if (ref.current!.scrollLeft >= maxScrollWidth) {
               setState((value) => {
                    return {
                         ...value,
                         isDisabledNext: true,
                         isDisabledPrev: false,
                    }
               })
          } else if (ref.current!.scrollLeft < 1) {
               setState((value) => {
                    return {
                         ...value,
                         isDisabledNext: false,
                         isDisabledPrev: true,
                    }
               })
          } else {
               setState((value) => {
                    return {
                         ...value,
                         isDisabledNext: false,
                         isDisabledPrev: false,
                    }
               })
          }
     }

     const onDragClick = (next: string) => {
          const currentScrollLeft = ref.current!.scrollLeft

          if (next === 'next') {
               ref.current!.scrollTo({
                    left: currentScrollLeft + scrollPercentTarget,
                    behavior: 'smooth',
               })
          } else {
               ref.current!.scrollTo({
                    left: currentScrollLeft - scrollPercentTarget,
                    behavior: 'smooth',
               })
          }
     }
     return (
          <div className="relative">
               <ScrollContainer
                    onScroll={onScrollContainer}
                    innerRef={ref}
                    className={className}>
                    {children}
               </ScrollContainer>
               {data.length > 0 && (
                    <>
                         <button
                              disabled={state.isDisabledPrev}
                              onClick={() => onDragClick('prev')}
                              className={`absolute ${
                                   state.isDisabledPrev ? 'opacity-60' : ''
                              } -bottom-5 left-0 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 right-0 inline-block p-4 bg-white rounded-full shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out`}>
                              <InlineIcon
                                   icon={arrowLeft}
                                   width={20}
                                   height={20}
                              />
                         </button>
                         <button
                              disabled={state.isDisabledNext}
                              onClick={() => onDragClick('next')}
                              className={`absolute ${
                                   state.isDisabledNext ? 'opacity-60' : ''
                              } -bottom-5 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 right-0 inline-block p-4 bg-white rounded-full shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out`}>
                              <InlineIcon
                                   icon={arrowRight}
                                   width={20}
                                   height={20}
                              />
                         </button>
                    </>
               )}
          </div>
     )
}
