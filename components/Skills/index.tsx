import Chip from 'components/UI/Chip'
import SkillItem from './SkillItem'
import { useState } from 'react'
import skillsData from 'mocks/skills.json'

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
        <section id="skills" className="mt-48 pt-20">
            <div className="max-w-[14rem] mx-auto space-y-2">
                <h4 className="font-bold text-center text-white text-4xl tracking-wider uppercase">
                    Skills
                </h4>
                <div className="bg-white mx-auto w-[calc(100%-8rem)] h-2"></div>
            </div>
            <div className="max-w-4xl mx-auto mt-10">
                <p className="text-center text-white font-normal leading-9">
                    My main skills as a{' '}
                    <span className="font-bold text-primary">
                        Web Developer
                    </span>{' '}
                    is using{' '}
                    <Chip>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 pr-2 self-center"
                            viewBox="0 0 32 32">
                            <defs>
                                <radialGradient
                                    id="a"
                                    cx="-16.114"
                                    cy="20.532"
                                    r="18.384"
                                    gradientTransform="translate(26.52 -9.307)"
                                    gradientUnits="userSpaceOnUse"></radialGradient>
                            </defs>
                            <title>file_type_php</title>
                            <ellipse
                                cx="16"
                                cy="16"
                                rx="14"
                                ry="7.365"
                                style={{ fill: 'url(#a)' }}
                            />
                            <ellipse
                                cx="16"
                                cy="16"
                                rx="13.453"
                                ry="6.818"
                                style={{ fill: '#6280b6' }}
                            />
                            <path
                                d="M18.725,18.2l.667-3.434a1.752,1.752,0,0,0-.372-1.719,2.929,2.929,0,0,0-2-.525H15.867l.331-1.7a.219.219,0,0,0-.215-.26h-1.6a.219.219,0,0,0-.215.177l-.709,3.646a2.051,2.051,0,0,0-.477-1.054,2.783,2.783,0,0,0-2.2-.807H7.7a.219.219,0,0,0-.215.177l-1.434,7.38a.219.219,0,0,0,.215.26H7.869a.219.219,0,0,0,.215-.177l.347-1.785h1.2a5.167,5.167,0,0,0,1.568-.2,3.068,3.068,0,0,0,1.15-.689,3.538,3.538,0,0,0,.68-.844l-.287,1.475a.219.219,0,0,0,.215.26h1.6a.219.219,0,0,0,.215-.177l.787-4.051h1.094c.466,0,.6.093.64.133s.1.165.025.569l-.635,3.265a.219.219,0,0,0,.215.26h1.62A.219.219,0,0,0,18.725,18.2ZM11.33,15.366a1.749,1.749,0,0,1-.561,1.092,2.171,2.171,0,0,1-1.315.321H8.742l.515-2.651h.921c.677,0,.949.145,1.059.266A1.181,1.181,0,0,1,11.33,15.366Z"
                                style={{ fill: '#fff' }}
                            />
                            <path
                                d="M25.546,13.332a2.783,2.783,0,0,0-2.2-.807H20.255a.219.219,0,0,0-.215.177l-1.434,7.38a.219.219,0,0,0,.215.26h1.608a.219.219,0,0,0,.215-.177l.347-1.785h1.2a5.167,5.167,0,0,0,1.568-.2,3.068,3.068,0,0,0,1.15-.689,3.425,3.425,0,0,0,1.076-1.927A2.512,2.512,0,0,0,25.546,13.332Zm-1.667,2.034a1.749,1.749,0,0,1-.561,1.092A2.171,2.171,0,0,1,22,16.778H21.29l.515-2.651h.921c.677,0,.949.145,1.059.266A1.181,1.181,0,0,1,23.879,15.366Z"
                                style={{ fill: '#fff' }}
                            />
                            <path
                                d="M10.178,13.908a1.645,1.645,0,0,1,1.221.338,1.34,1.34,0,0,1,.145,1.161,1.945,1.945,0,0,1-.642,1.223A2.361,2.361,0,0,1,9.454,17H8.476l.6-3.089ZM6.261,20.124H7.869l.381-1.962H9.627a4.931,4.931,0,0,0,1.5-.191,2.84,2.84,0,0,0,1.07-.642,3.207,3.207,0,0,0,1.01-1.808,2.3,2.3,0,0,0-.385-2.044,2.568,2.568,0,0,0-2.035-.732H7.7Z"
                                style={{ fill: '#000004' }}
                            />
                            <path
                                d="M14.387,10.782h1.6L15.6,12.744h1.421a2.767,2.767,0,0,1,1.85.468,1.548,1.548,0,0,1,.305,1.516l-.667,3.434H16.89l.635-3.265a.886.886,0,0,0-.08-.76,1.121,1.121,0,0,0-.8-.2H15.37l-.822,4.228h-1.6Z"
                                style={{ fill: '#000004' }}
                            />
                            <path
                                d="M22.727,13.908a1.645,1.645,0,0,1,1.221.338,1.34,1.34,0,0,1,.145,1.161,1.945,1.945,0,0,1-.642,1.223A2.361,2.361,0,0,1,22,17h-.978l.6-3.089ZM18.81,20.124h1.608l.381-1.962h1.377a4.931,4.931,0,0,0,1.5-.191,2.84,2.84,0,0,0,1.07-.642,3.207,3.207,0,0,0,1.01-1.808,2.3,2.3,0,0,0-.385-2.044,2.568,2.568,0,0,0-2.035-.732H20.244Z"
                                style={{ fill: '#000004' }}
                            />
                        </svg>
                        PHP
                    </Chip>{' '}
                    and{' '}
                    <Chip>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="JavaScript"
                            role="img"
                            className="w-7 h-7 pr-2 self-center"
                            viewBox="0 0 512 512">
                            <rect
                                width="512"
                                height="512"
                                rx="15%"
                                fill="#f7df1e"
                            />
                            <path d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z" />
                        </svg>
                        Javascript
                    </Chip>
                    I also have experience in developing hybird mobile
                    application using React Native. Here are a couple technology
                    stacks I`ve been working with recently:
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center max-w-xl mx-auto gap-10 mt-20">
                    {data.map((skill, i) => (
                        <SkillItem key={i} data={skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}