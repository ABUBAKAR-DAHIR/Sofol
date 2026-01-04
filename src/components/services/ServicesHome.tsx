import {Element} from "react-scroll"
import Services from "./Services"
import Pricing from "./Pricing"
import ServicesFooter from "./Services_Footer"
import Header from "../Header"
import Navbar from "../Navbar"
export default function ServicesHome() {
  return (
    <Element name="services">
        <Header />
        <Navbar />
        <Services />
        <Pricing />
        <ServicesFooter />
    </Element>
  )
}
