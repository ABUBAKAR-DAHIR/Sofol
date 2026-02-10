import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import RecentProjects from "../RecentProjects";
import Content from "./Content";

export default function ProjectDetailsHome() {
  return (
    <>
        <Header />
        <Navbar />
        <Content />
        <RecentProjects />
        <Footer />
    </>
  )
}
