import About from './Sections/About'
import Footer from './Sections/Footer'
import Hero from './Sections/Hero'
import Home from './Sections/Home'
import News from './Sections/News'
import Pricing from './Sections/Pricing'
import Services from './Sections/Services'
import Statistics from './Sections/Statistics'
import Team from './Sections/Team'
import Videos from './Sections/Videos'

export default function App() {
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Statistics />
      <Team />
      <News />
      <Pricing />
      <Videos />
      <Footer />
    </main>
  )
}
