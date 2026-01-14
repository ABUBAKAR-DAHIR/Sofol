import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import AllBlogs from "./AllBlogs";
import Hero from "./Hero";
import RecentBlogs from "./RecentBlogs";

export default function BlogHome() {
  return (
    <>
     <Header />
     <Navbar />   
     <Hero />
     <RecentBlogs />
     <AllBlogs />
     <Footer />
    </>
  )
}
