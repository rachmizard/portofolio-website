import ScrollAnimation from 'components/UI/ScrollAnimation'
export default function HeroIntroCaption() {
    return (
        <div>
            <ScrollAnimation animate="animate__fadeInLeft" threshold={0.5}>
                <span className="hidden lg:block absolute top-[-14px] bg-white w-3/12 h-2 transition-all delay-75 hover:w-1/12"></span>
                <h1 className="text-2xl md:text-5xl font-bold tracking-wider text-white text-center lg:text-left">
                    Hi 👋 my <span className="text-primary">name</span> is
                    Rachmizard
                </h1>
            </ScrollAnimation>
            <ScrollAnimation animate="animate__fadeInUp" threshold={0.5}>
                <p className="mt-3 text-white tracking-wider font-bold">
                    I am currently working as a front end developer at an
                    outsourcing company in Bandung and currently studying for a
                    bachelors degree in informatics engineering.
                </p>
            </ScrollAnimation>
        </div>
    )
}
