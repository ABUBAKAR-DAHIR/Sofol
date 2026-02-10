import PricingCard from "../components/PricingCard"
import { pricingCards } from '../../constants/constants'
import { Element } from "react-scroll"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
  return (
    <motion.section aria-label="pricing section"
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
    >
        <Element name="pricing"  className="py-20 flex flex-col items-center justify-center max-lg:px-10 max-md:px-6 max-md:text-center">
            <p className="capitalize text-sofolRed">about us</p>
            <p className="font-semibold text-[25px] max-md:text-[22px]">Unlock Your Potential with Our Professional Services!</p>
            <div className="flex gap-2 my-2 max-md:mt-4">
                <div className="h-1 w-25 bg-sofolRed rounded-full"/>
                <div className="h-1 w-25 bg-sofolRed rounded-full"/>
            </div>
            

            {/* cards */}
            <div className="flex gap-8 mt-8 flex-wrap items-center justify-center max-md:w-4/5">
                {
                    pricingCards.map((card, i) => (
                        <PricingCard key={i} pricingCard={card}/>
                    ))
                }
            </div>
        </Element> 
    </motion.section>
  )
}
