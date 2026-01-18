import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `cursor-pointer transition-colors ${
      isActive ? "text-sofolRed" : "text-black"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-transparent md:top-14"
        }`}
      >
        <div className="flex justify-between items-center h-20 px-6 lg:px-20">

          {/* LOGO */}
          <NavLink to="/">
            <img
              src="/navbar/sofol.svg"
              alt="sofol_logo"
              width={120}
              height={40}
            />
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-8 items-center">

            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            {/* SERVICES DROPDOWN */}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <NavLink to="/services" className={linkClass}>
                  Services
                </NavLink>
                <ChevronDown size={16} />
              </div>

              <ul className="absolute top-full left-0 mt-3 w-44 bg-white shadow-lg rounded-lg opacity-0 invisible
                             group-hover:opacity-100 group-hover:visible transition-all">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <NavLink to="/services/web">Web Development</NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <NavLink to="/services/mobile">Mobile Apps</NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <NavLink to="/services/uiux">UI/UX Design</NavLink>
                </li>
              </ul>
            </li>

            <NavLink to="/team" className={linkClass}>
              Team
            </NavLink>

            <NavLink to="/blogs" className={linkClass}>
              Blogs
            </NavLink>

            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className="bg-sofolRed px-8 py-3.5 rounded-lg text-white hover:bg-sofolRed/85"
            >
              Contact Us
            </NavLink>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-20 left-0 w-full bg-white shadow-lg z-40 transition-all duration-300
        ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }
        lg:hidden`}
      >
        <ul className="flex flex-col gap-4 p-6">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/team" className={linkClass} onClick={() => setOpen(false)}>
            Team
          </NavLink>
          <NavLink to="/blogs" className={linkClass} onClick={() => setOpen(false)}>
            Blogs
          </NavLink>
          <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>
            Projects
          </NavLink>
        </ul>
      </div>

      {/* SPACER */}
      <div className="h-20" />
    </>
  );
}
