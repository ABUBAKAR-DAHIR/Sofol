import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import News from './components/News'
import Pricing from './components/services/Pricing'
import Services from './components/services/Services'
import Statistics from './components/Statistics'
import Team from './components/Team'
import Videos from './components/Videos'
import AboutHome from './components/about/About_Home'
import ServicesHome from './components/services/ServicesHome'
import TeamHome from './components/team/TeamHome'
import BlogHome from './components/blog/BlogHome'
import DetailsHome from './components/services/details/DetailsHome'

export default function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={
          <>
          <Home />
          <About />
          <Services />
          <Statistics />
          <Team />
          <News />
          <Pricing />
          <Videos />
          <Footer />
          </>
        }/>

        <Route path='/about' element = {<AboutHome/>}/>

        <Route path='/services' element = {<ServicesHome/>}/>

        <Route path='/team' element = {<TeamHome/>}/>

        <Route path='/blogs' element = {<BlogHome/>}/>

        <Route path='/services/details' element = {<DetailsHome/>}/>

      </Routes>
    </main>
  )
}
