import { Element } from "react-scroll";
import { buttonInfos } from "../../constants/constants";
import AboutButton from "./AboutButton";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";


export default function About() {
    const [content, setContent] = useState<number>(0)
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });



  return (
    <motion.section aria-label="about" 
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
    >
        <Element name="about" className="p-10 flex flex-col items-center">
            <p className="capitalize text-sofolRed">about us</p>
            <p className="font-semibold text-[25px]">Who we are: Dreamers, doers, and change-makers.</p>

            {/* buttons */}
            <div className="flex gap-2 my-2 max-md:text-xs">
                {
                    buttonInfos.map((button, i) => (
                        <AboutButton key={button.image} img={button.image} text={button.text} onClick={() => setContent(i)} className={buttonInfos[content].image === button.image ? 'bg-sofolRed' : ''}/>
                    ))
                }
            </div>

            {/* content */}
            <div className="mt-30 xl:flex gap-17 px-20 my-10 max-xl:items-center max-xl:justify-center max-xl:gap-10 max-xl:px-10 max-md:px-4">
                <div className="relative max-md:mb-10">
                    <img src="/about/dots.svg" alt="dots" className="-z-1 absolute -top-10 -right-10 max-md:size-10 max-md:-top-5 max-md:-right-5"/>
                    <img src="/about/dots.svg" alt="dots" className="-z-1 absolute -bottom-10 -left-10 max-md:size-10 max-md:-bottom-5 max-md:-left-5"/>
                    <img src="/about/about_hero.png" alt="about_hero" width={400} height={300}/>
                </div>
                <div className="max-w-lg">
                    <p className="text-gray-400 mb-1 max-xl:mt-4">{buttonInfos[content].text}</p>
                    <h1 className="font-bold text-2xl mb-2">{buttonInfos[content].slogan}</h1>
                    <p className="text-xs text-gray-400">{buttonInfos[content].content} </p>
                    <span className="flex gap-1 mt-4 cursor-pointer"><img src="/about/Arrow.svg" alt="arrow_right" width={25}/>Read more </span>
                </div>
            </div>
        </Element>
    </motion.section>
  )
}
