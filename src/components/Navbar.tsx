import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {Link } from 'react-scroll'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  type ScrollLinkType = {
    to: string,
    name?: string,
    className?: string
  }

  const ScrollLink = ({to, name, className}: ScrollLinkType) => (
    <Link 
      to={to}
      spy
      smooth
      duration={500}
      offset={-100}
      activeClass="text-sofolRed"
      className={`cursor-pointer ${className}`}
      onClick={() => {setOpen(false)}}
    >{name}</Link>
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out
        ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent xl:top-14"}
        `}
      >
        <div className="flex justify-between items-center h-20 px-6 lg:px-20">

          {/* Logo */}
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <img
              src="/navbar/sofol.svg"
              alt="sofol_logo"
              width={120}
              height={40}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 items-center">

            <ScrollLink to="home" name="Home" />
            <ScrollLink to="about" name="About" />

            {/* Services */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1">
                <ScrollLink to="services" name="Services" /> <ChevronDown size={16} />
              </div>
              <ul className="absolute top-full left-0 mt-3 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible 
                             group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li className="px-4 py-2 hover:bg-gray-100">Web Development</li>
                <li className="px-4 py-2 hover:bg-gray-100">Mobile Apps</li>
                <li className="px-4 py-2 hover:bg-gray-100">UI/UX Design</li>
              </ul>
            </li>

            
            <ScrollLink to="team" name="Team" />
            <ScrollLink to="news" name="Blogs" />

            {/* Projects */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1">
                <ScrollLink to="projects" name="Projects"/><ChevronDown size={16} />
              </div>
              <ul className="absolute top-full left-0 mt-3 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible 
                             group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li className="px-4 py-2 hover:bg-gray-100">Completed</li>
                <li className="px-4 py-2 hover:bg-gray-100">Ongoing</li>
                <li className="px-4 py-2 hover:bg-gray-100">Upcoming</li>
              </ul>
            </li>

            <button className="cursor-pointer bg-sofolRed px-8 py-3.5 rounded-lg text-white hover:bg-sofolRed/85">
              Contact Us
            </button>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`z-50 fixed top-20 left-0 w-full bg-white shadow-lg transition-all duration-500 ease-out
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        lg:hidden`}
      >
        <ul className="flex flex-col gap-4 p-6">
          <ScrollLink to="home" name="Home" />
          <ScrollLink to="about" name="About" />
          <ScrollLink to="services" name="Services" />
          <ScrollLink to="team" name="Team" />
          <ScrollLink to="blogs" name="Blogs" />
          <ScrollLink to="projects" name="Projects" />
          <button className="bg-sofolRed py-3 rounded-lg text-white">
            Contact Us
          </button>
        </ul>
      </div>

      {/* Spacer so content doesn’t hide */}
      <div className="h-20" />
    </>
  );
}
