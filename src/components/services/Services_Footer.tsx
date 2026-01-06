import { posts, posts_images } from "../about/constants/constants";
import { Button } from "../ui/button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { footerDetails } from "../about/constants/constants";

export default function ServicesFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="w-full bg-white pt-24 flex flex-col overflow-x-hidden">
      {/* MAIN FOOTER */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 w-full"
      >
        {/* TOP */}
        <div className="flex flex-col items-center text-center gap-6">
          <img src="/footer/sofol_footer.svg" alt="Sofol logo" className="w-24" />

          <p className="max-w-3xl text-xs text-gray-600">
            We are a software company focused on creating powerful digital
            products that help teams work efficiently and grow with confidence.
            <Button variant="link" className="text-sofolRed text-xs px-1">
              Read more
            </Button>
          </p>

          {/* DETAILS */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {footerDetails.map((footer, i) => (
              <div key={i} className="flex flex-col items-center gap-2 w-20">
                <img src={footer.image} alt={footer.name} className="w-8 h-8" />
                <p className="text-xs font-semibold uppercase text-sofolBlack text-center">
                  {footer.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-gray-200 w-full" />

        {/* CONTENT */}
        <div className="flex flex-col xl:flex-row gap-12 w-full">
          {/* ABOUT */}
          <div className="flex flex-col gap-6 max-w-lg w-full">
            <h1 className="font-semibold uppercase text-sofolBlack">About</h1>
            <p className="text-sm text-sofolBlack/75">
              We are Sofol, delivering innovative software solutions that empower
              businesses to grow, streamline operations, and achieve digital
              excellence...
              <span className="text-sofolRed underline cursor-pointer ml-1">
                Read more
              </span>
            </p>

            <h1 className="font-semibold uppercase text-sofolBlack">Newsletter</h1>

            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                placeholder="Enter your email"
                className="w-full outline-none bg-sofolBlack/10 rounded-lg p-4 text-xs"
              />
              <Button className="bg-sofolRed px-6 py-4">Subscribe</Button>
            </div>
          </div>

          {/* POSTS */}
          <div className="flex flex-col gap-4 w-full max-w-md">
            <h1 className="font-semibold uppercase text-sofolBlack text-center xl:text-left">
              Recent Posts
            </h1>

            {posts.map((post, i) => (
              <div key={i} className="flex gap-3">
                <img
                  src={post.image}
                  className="w-12 h-12 object-cover rounded-md shrink-0"
                  alt={post.title}
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">{post.title}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <h1 className="font-semibold uppercase text-sofolBlack text-center xl:text-left">
              Social Media Posts
            </h1>

            <div className="grid grid-cols-3 sm:grid-cols-4 xl:flex xl:flex-wrap gap-4 justify-center xl:justify-start">
              {posts_images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-16 h-16 object-cover rounded-md"
                  alt="social"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* BOTTOM */}
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
