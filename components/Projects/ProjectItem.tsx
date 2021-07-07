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
               <div className="group overflow-hidden relative w-96 h-56 shadow-lg rounded hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
                    <Image
                         unoptimized
                         className="object-cover transition-transform duration-300 group-hover:-translate-y-40"
                         objectPosition="left"
                         src={data.projectImg}
                         width={574}
                         height={396}
                         alt={data.projectName}
                    />
                    <div className="absolute transition-all px-10 py-2 duration-300 group-hover:h-full group-hover:-bottom-0 bg-dark w-full h-0 -bottom-5">
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
