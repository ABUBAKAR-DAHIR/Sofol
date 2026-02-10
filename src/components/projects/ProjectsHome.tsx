import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import AllProjects from "./AllProjects";
import RecentProjects from "./RecentProjects";

export default function ProjectsHome() {
  return (
    <>
        <Header />
        <Navbar />
        <RecentProjects />
        <AllProjects />
        <Footer />
    </>
  )
}
