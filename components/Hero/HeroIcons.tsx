import { Icon } from '@iconify/react'
import githubFilled from '@iconify/icons-ant-design/github-filled'
import linkedInOutlined from '@iconify/icons-ant-design/linkedin-outlined'
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined'

export default function HeroIcons() {
    return (
        <div className="mt-10 flex space-x-5">
            <a
                href="https://github.com/rachmizard"
                rel="noreferrer"
                target="_blank"
                className="transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-full">
                <Icon
                    width={40}
                    height={40}
                    icon={githubFilled}
                    className="text-primary transition-all hover:text-white"
                />
            </a>
            <a
                href="https://id.linkedin.com/in/rachmizard-z-285b55122"
                rel="noreferrer"
                target="_blank"
                className="transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-full">
                <Icon
                    width={40}
                    height={40}
                    icon={linkedInOutlined}
                    className="text-primary hover:text-white"
                />
            </a>
            <a
                href="https://www.instagram.com/rachmizard/"
                rel="noreferrer"
                target="_blank"
                className="transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-full">
                <Icon
                    width={40}
                    height={40}
                    icon={instagramOutlined}
                    className="text-primary hover:text-white"
                />
            </a>
        </div>
    )
}
