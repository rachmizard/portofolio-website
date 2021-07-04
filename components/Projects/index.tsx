import Scrollable from 'components/UI/Scrollable'
import ProjectItem from './ProjectItem'
import projectsData from 'mocks/projects.json'
import { useState } from 'react'

export default function Projects() {
    const [currentTab, setCurrentTab] = useState(1)

    const onClickTab = (value: number) => {
        setCurrentTab(value)
    }

    return (
        <section id="projects" className="mt-48 pt-20">
            <div className="max-w-[14rem] mx-auto space-y-2">
                <h4 className="font-bold text-center text-white text-4xl tracking-wider uppercase">
                    Projects
                </h4>
                <div className="bg-white mx-auto w-[calc(100%-5rem)] h-2"></div>
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
            <div id="tab1" className={currentTab === 1 ? 'block' : 'hidden'}>
                <Scrollable className="flex flex-nowrap overflow-x-scroll pb-5 hide-scroll-bar">
                    {projectsData.projects.map((project) => (
                        <ProjectItem key={project.id} data={project} />
                    ))}
                </Scrollable>
            </div>
            <div id="tab2" className={currentTab === 2 ? 'block' : 'hidden'}>
                <p>Haiii</p>
            </div>
        </section>
    )
}
