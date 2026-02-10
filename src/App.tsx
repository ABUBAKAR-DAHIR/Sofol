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
import NotFound from './components/NofFound'
import BlogDetailsHome from './components/blog/blogDetails/BlogDetailsHome'
import ProjectsHome from './components/projects/ProjectsHome'
import ProjectDetailsHome from './components/projects/projectDetails/ProjectDetailsHome'
import ContactHome from './components/contact/ContactHome'

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

        <Route path='/blogs/:id' element = {<BlogDetailsHome/>}/>

        <Route path='/services/details' element = {<DetailsHome/>}/>

        <Route path='/projects' element={<ProjectsHome />} />

        <Route path='/projects/:id' element={<ProjectDetailsHome />} />

        <Route path='/contact' element={<ContactHome />} />
          
        <Route path='*' element = {<NotFound/>}/>

      </Routes>
    </main>
  )
}
