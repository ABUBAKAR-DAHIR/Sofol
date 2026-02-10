import Header from "./Header";
import Navbar from "./Navbar";
import { Element } from 'react-scroll'
import Hero from "./Hero";

export default function Home() {
  return (
    <Element name="home">
       <Header />
       <Navbar />
       <Hero />
    </Element>
  )
}
