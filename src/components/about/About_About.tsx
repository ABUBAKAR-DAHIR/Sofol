import { Element } from "react-scroll";
import { news } from "./constants/constants";
import { Button } from "../ui/button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function News() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <motion.section aria-label="News "  className="p-10 flex flex-col items-center" 
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
    >
        <Element name="news">
            <div className="container mx-auto">
                <p className="capitalize text-sofolRed">about us</p>
                <div className="flex justify-between max-md:block">
                    <p className="font-semibold text-[25px]">Who we are: Dreamers, doers, and change-makers.</p>
                    <Button variant="link" className="text-sofolRed cursor-pointer max-md:p-0">See all</Button>
                </div>
                <div className="flex gap-2 my-2">
                    <div className="h-1 w-25 bg-sofolRed rounded-full"/>
                    <div className="h-1 w-25 bg-sofolRed rounded-full"/>
                </div>
            </div>

            {/* content */}
            {
                news.map((blog, i) => (
                    i % 2 === 0 ? <div className="mt-30 xl:flex gap-17 px-20 my-10 max-xl:items-center max-xl:justify-center max-xl:gap-10 max-xl:px-10 max-md:px-4">
                        <div className="relative max-md:mb-10">
                            <img src="/about/dots.svg" alt="dots" className="-z-1 size-15 absolute -top-8 -right-8 max-md:size-10 max-md:-top-5 max-md:-right-5"/>
                            <img src="/about/dots.svg" alt="dots" className="-z-1 size-15 absolute -bottom-8 -left-8 max-md:size-10 max-md:-bottom-5 max-md:-left-5"/>
                            <img src={blog.image} alt={blog.header} width={400} height={300}/>
                        </div>
                        <div className="max-w-lg">
                            <p className="text-gray-400 mb-1 max-xl:mt-4">{blog.date}</p>
                            <h1 className="font-bold text-2xl mb-2">{blog.header}</h1>
                            <p className="text-xs text-gray-400">{blog.content}</p>
                            <span className="flex gap-1 mt-4 cursor-pointer"><img src="/about/Arrow.svg" alt="arrow_right" width={25}/>Read more </span>
                        </div>
                    </div>
                    : 
                    <div className="mt-30 xl:flex gap-17 px-20 my-10 max-xl:items-center max-xl:justify-center max-xl:gap-10 max-xl:px-10 max-md:px-4">
                        <div className="max-w-lg">
                            <p className="text-gray-400 mb-1 max-xl:mt-4">{blog.date}</p>
                            <h1 className="font-bold text-2xl mb-2">{blog.header}</h1>
                            <p className="text-xs text-gray-400">{blog.content}</p>
                            <span className="flex gap-1 mt-4 cursor-pointer"><img src="/about/Arrow.svg" alt="arrow_right" width={25}/>Read more </span>
                        </div>
                        <div className="relative max-md:mb-10">
                            {/* <img src="/about/dots.svg" alt="dots" className="-z-1 absolute -top-10 -right-10 max-md:size-10 max-md:-top-5 max-md:-right-5"/>
                            <img src="/about/dots.svg" alt="dots" className="-z-1 absolute -bottom-10 -left-10 max-md:size-10 max-md:-bottom-5 max-md:-left-5"/> */}
                            <img src={blog.image} alt={blog.header} width={400} height={300}/>
                        </div>
                    </div>
                ))
            }
        </Element>
    </motion.section>
  )
}
