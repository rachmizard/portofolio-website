import HeroIntroCaption from './HeroIntroCaption'
import HeroButton from './HeroButton'
import HeroIcons from './HeroIcons'
import HeroImage from './HeroImage'

export default function Hero() {
    return (
        <section className="mt-[18rem] md:mt-[7rem] lg:mt-10 px-8 min-h-screen flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="w-9/12 lg:w-7/12 mx-auto relative flex flex-col my-14 lg:my-0">
                <HeroIntroCaption />
                <HeroButton />
                <HeroIcons />
            </div>
            <HeroImage />
        </section>
    )
}
