import SkillItem from './SkillItem'
import SkillTitle from './SkillTitle'
import SkillCaption from './SkillCaption'
import SkillContent from './SkillContent'
import { useState } from 'react'
import skillsData from 'mocks/skills.json'
import ScrollAnimation from 'components/UI/ScrollAnimation'

interface ISkill {
    skillName: string
    url: string
    img: string
    alt: string
    width: number
    height: number
}

export default function Skills() {
    const [data] = useState<ISkill[]>(skillsData.skills)

    return (
        <section id="skills" className="mt-48 pt-20 min-h-screen">
            <SkillTitle />
            <SkillContent>
                <SkillCaption />
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center max-w-xl mx-auto gap-10 mt-20">
                    {data.map((skill, i) => (
                        <ScrollAnimation
                            key={i}
                            threshold={1}
                            triggerOnce
                            animate="animate__fadeIn"
                            delay={i === 0 ? 1 : i * 750}>
                            <SkillItem data={skill} />
                        </ScrollAnimation>
                    ))}
                </div>
            </SkillContent>
        </section>
    )
}
