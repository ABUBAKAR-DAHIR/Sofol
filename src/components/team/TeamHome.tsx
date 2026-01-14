import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import Team from "../Team";
import Departments from "./Departments";
import Hero from "./Hero";
import Products from "./Products";

export default function TeamHome() {
  return (
    <>
        <Header />
        <Navbar />
        <Hero />
        <Team />
        <Departments />
        <Products />
        <Footer />
    </>
  )
}
