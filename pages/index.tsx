import Main from '../components/UI/Main'
import Button from '../components/UI/Button'
import Layout from '../components/UI/Layout'
import Nav from '../components/Navbar/Nav'
import NavLogo from '../components/Navbar/NavLogo'
import NavItems from '../components/Navbar/NavItems'
import NavItem from '../components/Navbar/NavItem'
import Hero from '../components/Hero'
import About from '../components/About/About'
import AboutImage from 'components/About/AboutImage'
import AboutCaption from 'components/About/AboutCaption'
import AboutTitle from 'components/About/AboutTitle'

export default function Home() {
    return (
        <Layout>
            <Nav>
                <NavLogo />
                <NavItems>
                    <NavItem title="about" to="#about" />
                    <NavItem title="skills" />
                    <NavItem title="projects" />
                    <NavItem title="testimonials" />
                    <Button>Contact</Button>
                </NavItems>
            </Nav>

            <Main>
                <Hero />
                <About>
                    <AboutTitle />
                    <div className="flex justify-evenly items-center">
                        <AboutImage />
                        <AboutCaption />
                    </div>
                </About>
            </Main>

            <footer></footer>
        </Layout>
    )
}
