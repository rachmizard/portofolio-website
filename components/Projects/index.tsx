import Scrollable from 'components/UI/Scrollable'
import ProjectItem from './ProjectItem'
import projectsData from 'mocks/projects.json'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
    const { ref, inView } = useInView({ threshold: 0.1 })
    const [currentTab, setCurrentTab] = useState(1)

    const onClickTab = (value: number) => {
        setCurrentTab(value)
    }

    return (
        <section id="projects" className="pt-20 min-h-screen">
            <div
                ref={ref}
                className="overflow-hidden max-w-[14rem] mx-auto space-y-2">
                <h4
                    className={`font-bold text-center text-white text-4xl tracking-wider uppercase transition-transform duration-1000 delay-100 transform ${
                        inView ? '-translate-y-0' : '-translate-y-10'
                    } `}>
                    Projects
                </h4>
                <div className="bg-white mx-auto w-[calc(100%-4rem)] h-2"></div>
            </div>
            <div className="mt-5 space-y-4">
                <p className="text-center text-white leading-loose">
                    Here are couple projects I`ve been working recently :
                </p>
                <div className="flex flex-col mx-auto w-1/4">
                    <ul className="flex flex-row mb-0 list-none flex-wrap justify-between">
                        <li className="inline-block py-2 uppercase tracking-wider font-bold text-white text-center">
                            <a
                                href="#tab1!"
                                className="space-y-1"
                                onClick={() => onClickTab(1)}>
                                <div>Website</div>
                                <div
                                    className={
                                        currentTab === 1
                                            ? 'block w-full bg-white h-1'
                                            : 'hidden'
                                    }></div>
                            </a>
                        </li>
                        <li className="inline-block py-2 uppercase tracking-wider font-bold text-white text-center">
                            <a
                                href="#tab2!"
                                className="space-y-1"
                                onClick={() => onClickTab(2)}>
                                <div>Mobile</div>
                                <div
                                    className={
                                        currentTab === 2
                                            ? 'block w-full bg-white h-1'
                                            : 'hidden'
                                    }></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="min-h-screen flex flex-col overflow-hidden">
                <div
                    id="tab1"
                    className={currentTab === 1 ? 'block' : 'hidden'}>
                    <Scrollable className="flex flex-nowrap overflow-x-scroll pb-5 hide-scroll-bar">
                        {projectsData.projects.map((project) => (
                            <ProjectItem key={project.id} data={project} />
                        ))}
                    </Scrollable>
                </div>
                <div
                    id="tab2"
                    className={currentTab === 2 ? 'block' : 'hidden'}>
                    <p>Haiii</p>
                </div>
            </div>
        </section>
    )
}
