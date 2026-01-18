import { posts, posts_images } from "../about/constants/constants";
import { Button } from "../ui/button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { footerDetails } from "../about/constants/constants";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer
      aria-label="Footer section"
      className="w-full max-w-full flex-wrap bg-white md:pt-24 flex flex-col max-md:mt-4"
    >
      
      {/* MAIN FOOTER */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:max-w-7xl mx-auto px-6 max-md:px-4"
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

        <div className="flex flex-wrap justify-between w-full gap-8 max-xl:justify-evenly max-md:justify-center">
          <div className="max-w-lg flex flex-col justify-between max-md:gap-4">
            <h1 className="font-semibold uppercase text-sofolBlack">about</h1>
            <p className="text-sm text-sofolBlack/75 max-w-lg">
              We are Sofol, delivering innovative software solutions that empower
              businesses to grow, streamline operations, and achieve digital
              excellence across modern platforms. We design, develop, and optimize
              scalable systems that solve real problems, improve efficiency, and
              create long-term value for organizations worldwide...
              <span className="text-sofolRed underline cursor-pointer">
                Read more
              </span>
            </p>

            <h1 className="font-semibold uppercase text-sofolBlack">newsletter</h1>
            <div className="flex w-full justify-evenly max-md:justify-center flex-wrap gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="flex-1 outline-none bg-sofolBlack/10 rounded-lg p-4 text-xs"
              />
              <Button className="bg-sofolRed p-6 max-md:w-full">Subscribe</Button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <h1 className="font-semibold uppercase text-sofolBlack max-md:text-center">
              recent posts
            </h1>

            {posts.map((post, i) => (
              <div key={i} className="flex flex-wrap gap-2">
                <img src={post.image} />
                <div className="flex flex-col justify-evenly">
                  <p className="text-sm font-semibold md:max-w-50">
                    {post.title}
                  </p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-semibold uppercase text-sofolBlack max-xl:text-center">
              social media posts
            </h1>

            <div className="grid grid-cols-3 max-xl:flex max-xl:flex-wrap gap-4">
              {posts_images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="image"
                  className="w-16 object-contain"
                />
              ))}
            </div>
          </div>
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
