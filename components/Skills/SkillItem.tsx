import Image from 'next/image'

interface ISkill {
    skillName: string
    url: string
    img: string
    alt: string
    width: number
    height: number
}

type SkillItemProps = {
    data: ISkill
}

export default function SkillItem({ data }: SkillItemProps) {
    return (
        <div className="has-tooltip flex flex-col transition-all hover:scale-125">
            <a
                className="relative tooltip"
                href={data.url}
                rel="noreferrer"
                target="_blank">
                <span>{data.skillName}</span>
                <svg className="tooltip-arrow" width="8" height="8">
                    <rect
                        x="12"
                        y="-10"
                        width="8"
                        height="8"
                        transform="rotate(45)"
                    />
                </svg>
            </a>
            <Image
                unoptimized
                objectFit="contain"
                src={data.img}
                alt={data.alt}
                width={data.width}
                height={data.height}
            />
        </div>
    )
}
