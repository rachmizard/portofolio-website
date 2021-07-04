import Scrollable from 'components/UI/Scrollable'
import ProjectItem from './ProjectItem'
import projectsData from 'mocks/projects.json'

export default function Projects() {
    return (
        <section id="projects" className="mt-48 pt-20">
            <div className="max-w-[14rem] mx-auto space-y-2">
                <h4 className="font-bold text-center text-white text-4xl tracking-wider uppercase">
                    Projects
                </h4>
                <div className="bg-white mx-auto w-[calc(100%-5rem)] h-2"></div>
            </div>
            <div className="mt-5">
                <p className="text-center text-white leading-loose">
                    Here are couple projects I`ve been working recently :
                </p>
            </div>
            <div className="mt-10">
                <Scrollable className="flex flex-nowrap overflow-x-scroll pb-5 hide-scroll-bar">
                    {projectsData.projects.map((project) => (
                        <ProjectItem key={project.id} data={project} />
                    ))}
                </Scrollable>
            </div>
        </section>
    )
}
