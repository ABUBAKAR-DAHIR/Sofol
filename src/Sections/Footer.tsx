import { footerDetails, footerLinks } from "../../constants/constants";
import { Button } from "../components/ui/button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() { 
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <footer aria-label="Footer section">
        <motion.div className="w-full xl:w-5xl mx-auto py-8"
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
        >

            {/* first part */}
            <div className="flex flex-col items-center justify-center">
                <img src="/footer/sofol_footer.svg" alt="footer_sofol_logo" width={100} height={50} />
                <p className="text-center max-w-3xl text-xs text-gray-700 my-4">We are a software company focused on creating powerful digital products that help teams work efficiently and grow with confidence. Our solutions blend innovation and reliability to deliver seamless user experiences every day<Button variant="link"  className="text-sofolRed text-xs">Read more</Button></p>

                <div className="flex w-full xl:w-3xl justify-between gap-2 max-md:flex-col">
                    {
                        footerDetails.map((footer, i) => (
                            <div key={i} className="flex flex-col justify-center items-center gap-2 md:gap-4">
                                <img src={footer.image} alt={footer.name} />
                                <p className="text-sofolBlack uppercase text-xs font-semibold">{footer.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-full h-px bg-gray-400 my-10"/>
            
            {/* 2nd part- links */}
            <div className="w-full flex justify-between max-md:block">
                {
                    footerLinks.map((footerLink, i) => (
                        <div key={i} className="flex flex-col gap-1 w-full mx-auto items-center">
                            <div className="flex flex-col gap-1">
                                <h1 className="font-semibold text-gray-600 text-sm uppercase mb-2">{footerLink.header}</h1>

                                {
                                    footerLink.links.map((link, i) => (
                                        <p key={i} className="text-gray-400 text-xs mb-1 hover:underline cursor-pointer">{link}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </motion.div>

        {/* End  */}
        <div className="bg-sofolBlack text-white">
            <div className="w-full max-xl:px-4 xl:w-5xl flex justify-between mx-auto py-4 text-xs max-md:flex-col max-md:gap-2">
                <p>© 2024-2025, All Rights Reserved</p>
                <div className="flex gap-4 max-md:gap-2">
                    <p className="hover:underline cursor-pointer">Privacy policy</p>
                    <p className="hover:underline cursor-pointer">Sitemap</p>
                    <p className="hover:underline cursor-pointer">Terms of Use</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
