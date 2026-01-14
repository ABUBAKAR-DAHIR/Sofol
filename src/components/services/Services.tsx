import { Element } from "react-scroll";
import { services } from "../../../constants/constants";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const navigate = useNavigate()
  return (
    <motion.section aria-label='our services' 
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
    >
        <Element name="services" className="p-10 flex flex-col items-center">
            <p className="capitalize text-sofolRed">Our services</p>
            <p className="font-semibold text-[25px] mb-2">Unlock Your Potential with Our Professional Services!</p>
            <img src="/services/line.png" alt="line" />

            {/* content */}
            <div className="grid grid-cols-3 mt-20 max-lg:flex max-lg:flex-wrap max-lg:items-center max-lg:justify-center">
                {
                    services.map((service, i) => (
                        <div key={i} className="size-85 flex flex-col items-center py-10 px-4 cursor-pointer rounded-xl  transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400/50" onClick={() => navigate('details')}>
                            <img src={service.image} alt={service.header} className={'size-12'}/>
                            <h1 className="uppercase font-semibold text-xl my-4">{service.header}</h1>
                            <p className="text-sm text-gray-400">{service.content}</p>
                        </div>
                    ))
                }
            </div>
        </Element>
    </motion.section>
  )
}
