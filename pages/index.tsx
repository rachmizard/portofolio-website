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
import AboutBody from 'components/About/AboutBody'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import Testimonial from 'components/Testimonial'
import Footer from 'components/Footer'
import FloatButton from 'components/UI/FloatButton'

export default function Home() {
     return (
          <Layout>
               <Nav>
                    <NavLogo />
                    <NavItems>
                         <NavItem title="about" to="#about" />
                         <NavItem title="skills" to="#skills" />
                         <NavItem title="projects" to="#projects" />
                         <NavItem title="testimonials" to="#testimonials" />
                         <Button type="link" href="#footer">
                              Contact
                         </Button>
                    </NavItems>
               </Nav>

               <Main>
                    <Hero />
                    <About>
                         <AboutTitle />
                         <AboutBody>
                              <AboutImage />
                              <AboutCaption />
                         </AboutBody>
                    </About>
                    <Skills />
                    <Projects />
                    <Testimonial />
               </Main>
               <Footer />
               <div className="relative">
                    <FloatButton>
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 transition-transform group-hover:-translate-y-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth={2}
                                   d="M5 15l7-7 7 7"
                              />
                         </svg>
                    </FloatButton>
               </div>
          </Layout>
     )
}
