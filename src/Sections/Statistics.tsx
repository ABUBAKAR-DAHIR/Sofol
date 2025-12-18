import { Element } from "react-scroll";
import { statistics } from "../../constants/constants";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Statistics() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
  return (
    <motion.section aria-label="statistics" 
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
    >
        <Element name="statistics" className="flex max-md:flex-col max-md:justify-center max-md:items-center relative bg-sofolRed text-white w-full justify-around items-center py-10">
            <p className="text-sm w-fit md:max-w-30 leading-relaxed">We speak with our powerful statistics</p>

            <img src="/services/backg.png" alt="backg" className="absolute inset-0 w-full"/>

            {/* <div> */}
                {
                    statistics.map((statistic, i) => (
                        <div className="md:border-l-2 border-white lg:w-[calc((100vw-620px)/3)] md:pl-20">
                            <p key={i}><span className="block text-4xl font-semibold  ">{statistic.amount}</span>{statistic.desc}</p>
                        </div>
                    ))
                }
            {/* </div> */}
        </Element>
    </motion.section>
  )
}
