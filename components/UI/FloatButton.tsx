import { useEffect, useState } from 'react'

type Props = {
     children: React.ReactNode
}

export default function FloatButton(props: Props) {
     const [show, setShow] = useState(false)

     useEffect(() => {
          const scrollListener = window.addEventListener('scroll', () => {
               const value = window.pageYOffset
               if (value > 500) {
                    setShow(true)
               } else {
                    setShow(false)
               }
          })

          return () =>
               window.removeEventListener('scroll', () => scrollListener)
     }, [])
     return (
          <div
               className={`fixed group transition-all duration-200 bottom-10 right-14 ${
                    show ? 'opacity-100' : 'opacity-0'
               } `}>
               <div className="transition-all duration-100 rounded-full w-14 h-14 bg-white shadow-sm hover:opacity-60">
                    <a
                         href="#"
                         className="h-full w-full flex justify-center items-center">
                         {props.children}
                    </a>
               </div>
          </div>
     )
}
