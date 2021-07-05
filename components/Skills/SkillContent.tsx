type Props = {
    children: React.ReactNode
}

export default function SkillContent({ children }: Props) {
    return <div className="max-w-4xl mx-auto mt-10">{children}</div>
}
