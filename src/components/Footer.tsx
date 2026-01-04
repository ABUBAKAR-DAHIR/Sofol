import { footerDetails, footerLinks } from "../../constants/constants";
import { Button } from "./ui/button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer aria-label="Footer section" className="w-full bg-white pt-24 flex flex-col">
      
      {/* MAIN FOOTER */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6"
      >

        {/* TOP SECTION */}
        <div className="flex flex-col items-center text-center gap-6">
          <img
            src="/footer/sofol_footer.svg"
            alt="Sofol logo"
            className="w-24"
          />

          <p className="max-w-3xl text-xs text-gray-600 leading-relaxed">
            We are a software company focused on creating powerful digital products
            that help teams work efficiently and grow with confidence.
            <Button variant="link" className="text-sofolRed text-xs px-1">
              Read more
            </Button>
          </p>

          {/* DETAILS */}
          <div className="flex justify-evenly w-full flex-wrap">
            {footerDetails.map((footer, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2"
              >
                <img src={footer.image} alt={footer.name} className="w-8" />
                <p className="text-xs font-semibold uppercase text-sofolBlack">
                  {footer.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-gray-200" />

        {/* LINKS SECTION */}
        <div className="flex gap-10 justify-between flex-wrap">
          {footerLinks.map((footerLink, i) => (
            <div key={i} className="space-y-2">
              <h2 className="text-sm font-semibold uppercase text-gray-700">
                {footerLink.header}
              </h2>

              {footerLink.links.map((link, idx) => (
                <p
                  key={idx}
                  className="text-xs text-gray-500 hover:text-black hover:underline cursor-pointer"
                >
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* BOTTOM BAR */}
      <div className="bg-sofolBlack mt-16">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-white flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© 2024–2025. All Rights Reserved.</p>

          <div className="flex gap-4">
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Sitemap</p>
            <p className="hover:underline cursor-pointer">Terms of Use</p>
          </div>
        </div>
      </div>

    </footer>
  );
}
