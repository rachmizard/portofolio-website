import { Icon, InlineIcon } from '@iconify/react'
import mailFilled from '@iconify/icons-ant-design/mail-filled'
import phoneTwoTone from '@iconify/icons-ant-design/phone-twotone'
import githubFilled from '@iconify/icons-ant-design/github-filled'
import linkedInOutlined from '@iconify/icons-ant-design/linkedin-outlined'
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined'
import { useInView } from 'react-intersection-observer'
import ScrollAnimation from 'components/UI/ScrollAnimation'

export default function Footer() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <footer
            ref={ref}
            id="footer"
            className="bg-footer-img bg-no-repeat mt-80 w-full h-[351px] px-24 flex flex-col lg:flex-row justify-between">
            <div className="mt-20 lg:mt-24 overflow-hidden">
                <h1
                    className={`text-white font-bold text-6xl tracking-wide transition-all hover:text-dark transform duration-1000 ${
                        inView ? '-translate-y-0' : '-translate-y-20'
                    }`}>
                    Get in touch 👋
                </h1>
                <div className="mt-5 flex flex-col space-y-1">
                    <a
                        href="#"
                        className={`inline-flex items-center text-dark font-bold transition-all hover:text-white duration-1000 delay-500 transform ${
                            inView ? '-translate-x-0' : '-translate-x-96'
                        }`}>
                        <InlineIcon
                            className="text-dark mr-2"
                            icon={mailFilled}
                            width={30}
                            height={30}
                        />
                        rachmizard11072000@gmail.com
                    </a>
                    <a
                        href="#"
                        className={`inline-flex items-center text-dark font-bold transition-all hover:text-white duration-1000 delay-700 transform ${
                            inView ? '-translate-x-0' : '-translate-x-96'
                        }`}>
                        <InlineIcon
                            className="text-dark mr-2"
                            icon={phoneTwoTone}
                            width={30}
                            height={30}
                        />
                        +6281384885881
                    </a>
                </div>
            </div>
            <div className="flex space-x-5 my-0 md:my-4 lg:self-end overflow-hidden">
                <ScrollAnimation
                    animate="animate__fadeInDown animate__delay-1s"
                    threshold={0.5}
                    triggerOnce>
                    <a
                        href="https://github.com/rachmizard"
                        rel="noreferrer"
                        target="_blank"
                        className="transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-full">
                        <Icon
                            width={60}
                            height={60}
                            icon={githubFilled}
                            className="text-white transition-all hover:text-dark"
                        />
                    </a>
                </ScrollAnimation>
                <ScrollAnimation
                    animate="animate__fadeInDown animate__delay-2s"
                    threshold={0.5}
                    triggerOnce>
                    <a
                        href="https://id.linkedin.com/in/rachmizard-z-285b55122"
                        rel="noreferrer"
                        target="_blank"
                        className="transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-full">
                        <Icon
                            width={60}
                            height={60}
                            icon={linkedInOutlined}
                            className="text-white hover:text-dark"
                        />
                    </a>
                </ScrollAnimation>

                <ScrollAnimation
                    animate="animate__fadeInDown animate__delay-3s"
                    threshold={0.5}
                    triggerOnce>
                    <a
                        href="https://www.instagram.com/rachmizard/"
                        rel="noreferrer"
                        target="_blank"
                        className="transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-full">
                        <Icon
                            width={60}
                            height={60}
                            icon={instagramOutlined}
                            className="text-white hover:text-dark"
                        />
                    </a>
                </ScrollAnimation>
            </div>
        </footer>
    )
}
