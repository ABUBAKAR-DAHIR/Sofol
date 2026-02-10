import Header from "../components/Header";
import Navbar from "../components/Navbar";
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
