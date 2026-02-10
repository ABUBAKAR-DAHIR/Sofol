import { Element } from "react-scroll";
import { Button } from "../components/ui/button";
import { team } from "../../constants/constants";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Team() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <motion.section aria-label="Our Team" 
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
    >
        <Element name="team" className="pt-20 flex flex-col pb-40 overflow-clip">
            <div className="max-w-7xl mx-auto max-xl:px-10 max-md:px-4">
                <p className="capitalize text-sofolRed">about us</p>
                <div className="flex justify-between max-md:block">
                    <p className="font-semibold text-[25px]">Who we are: Dreamers, doers, and change-makers.</p>
                    <Button variant="link" className="text-sofolRed cursor-pointer max-md:p-0">See all</Button>
                </div>
                <div className="flex gap-2 my-2">
                    <div className="h-1 w-25 bg-sofolRed rounded-full"/>
                    <div className="h-1 w-25 bg-sofolRed rounded-full"/>
                </div>

                {/* Team card */}
                <div className="flex gap-2 mt-14 flex-wrap mx-auto justify-center items-center">
                    {
                        team.map((person, i) => (
                            <div key={i} className="relative size-80 cursor-pointer group my-10" >
                                <img src={person.image} alt={person.name} className="fill mb-100"/>
                                <p className="absolute -bottom-10 right-1/2 translate-x-16 text-white font-semibold text-center text-xl transition-all duration-500 ease-in-out group-hover:-bottom-5">{person.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Element>
    </motion.section>
  )
}
