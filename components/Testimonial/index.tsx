import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Card from 'components/UI/Card'
import testimonialData from 'mocks/testimonials.json'

export default function Testimonial() {
     const { ref, inView } = useInView({ threshold: 0.5 })

     const { testimonials } = testimonialData

     return (
          <section id="testimonials" className="pt-20 min-h-screen">
               <div
                    ref={ref}
                    className="overflow-hidden w-full sm:w-8/12 md:w-4/12 mx-auto space-y-2">
                    <h4
                         className={`font-bold text-center text-white text-4xl tracking-wider uppercase transition-transform duration-1000 delay-100 transform ${
                              inView ? '-translate-y-0' : '-translate-y-10'
                         } `}>
                         Testimonials
                    </h4>
                    <div
                         className={`bg-white mx-auto transition-all duration-300 delay-1000 ${
                              inView ? 'w-8/12' : 'w-0'
                         } h-2`}></div>
               </div>
               <div className="mt-5 space-y-4">
                    <p className="leading-loose text-white text-center">
                         Listed below are people whom I worked with:
                    </p>
                    <div className="flex flex-wrap justify-center gap-20">
                         {testimonials.map((data, i) => (
                              <Card key={i}>
                                   <div className="flex flex-col space-y-5">
                                        <div className="flex flex-col items-center space-y-3">
                                             <Image
                                                  src={data.photo}
                                                  alt={data.name}
                                                  width={100}
                                                  height={100}
                                                  className="object-cover shadow-md rounded-full"
                                             />
                                             <p className="text-center text-white font-bold">
                                                  {data.name}
                                             </p>
                                        </div>
                                        <div>
                                             <p className="text-white text-center leading-relaxed italic">
                                                  {data.desc}
                                             </p>
                                        </div>
                                   </div>
                              </Card>
                         ))}
                    </div>
               </div>
          </section>
     )
}
