import Image from 'next/image'

interface ITechStack {
    id: number
    technologyName: string
    technologyUrl: string
    technologyDesc: string
}

interface IProjectItem {
    id: number
    projectName: string
    type: string
    projectImg: string
    projectDescription: string
    techStacks: ITechStack[]
}

type ProjectItemProps = {
    data: IProjectItem
}

export default function ProjectItem({ data }: ProjectItemProps) {
    return (
        <div className="inline-block px-3 py-10">
            <div className="group overflow-hidden relative w-96 h-56 rounded-lg shadow-sm bg-white hover:shadow-md transition-all duration-500 ease-in-out cursor-pointer">
                <Image
                    className="object-cover"
                    objectPosition="left"
                    src={data.projectImg}
                    width={574}
                    height={396}
                    alt={data.projectName}
                />
                <div className="absolute transition-all px-10 py-2 duration-500 group-hover:h-full group-hover:-bottom-0 bg-dark bg-opacity-75 w-full h-0 -bottom-5">
                    <div className="h-full space-y-4">
                        <span className="text-white font-bold tracking-wider text-2xl mb-10">
                            {data.projectName}
                        </span>
                        <span className="inline-block text-white leading-relaxed">
                            {data.projectDescription}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
