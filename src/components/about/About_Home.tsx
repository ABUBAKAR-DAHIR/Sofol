import { Element } from 'react-scroll'
import Header from '../Header'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutAbout from './About_About'
import AboutVideos from './About_Videos'
import AboutFooter from './About_Footer'


export default function AboutHome() {
  return (
    <Element name="home">
       <Header />
       <Navbar />
       <Hero />
       <AboutAbout />
       <AboutVideos />
       <AboutFooter />
    </Element>
  )
}
