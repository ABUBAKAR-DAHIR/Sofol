import { Element } from "react-scroll"
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutVideos() {    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const [index, setIndex] = useState<number>(0)
    
    const VISIBLE = 3
    
    const next = () => {
        setIndex((curr) => curr >= images.length - 1  ? 0 : curr + 1 )
    }
    
    const prev = () => {
        setIndex((curr) => curr <= 0 ? images.length-1 : curr - 1)
    }
    console.log(index)
    
    const images = [
        '/videos/video1.png',
        '/videos/video2.png',
        '/videos/video3.png',
        '/videos/video1.png',
        '/videos/video2.png',
        '/videos/video3.png',
    ]
    
    const visibleImages = Array.from({ length: VISIBLE }, (_, i) => {
        return images[(index + i) % images.length];
    });


    // useEffect(()=>{
    //     const imageSlider = setInterval(() => {
    //         next()
    //     }, 5000);
    //     return re
    // })
  return (
    <motion.section aria-label="Videos"
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
    >
        <Element  name="videos" className="py-20 xl:mb-10 max-md:mb-110">
            {/* Red part */}
            <div className="bg-sofolRed h-70 xl:px-60">
                <div className="uppercase tracking-normal text-white container mx-auto py-10 flex justify-between max-md:flex-col max-md:justify-center max-md:items-center max-md:px-4">
                    <span>Don't take our word for it listen to our clients</span>
                    <div className="flex gap-2">
                        <img src="videos/left.svg" alt="left"  className="size-5 cursor-pointer" onClick={prev}/>
                        <img src="videos/right.svg" alt="left" className="size-5 cursor-pointer" onClick={next}/>
                    </div>
                </div>
                {/* <p className="font-bold">{index}, {index+VISIBLE}</p> */}

                {/* Carousel part */}
                <div className="flex items-center justify-center mx-auto w-full mb-200 flex-wrap max-md:items-center max-md:mx-auto">
                    <div className="w-full flex justify-center  flex-wrap items-center max-md:mx-auto ">
                        {
                            visibleImages.map((image, i) => (
                                <img key={i} src={image} alt={image} className="object-contain max-md:size-60 max-xl:size-62.5 xl:size-80"/>
                            ))
                        }
                    </div>
                </div>

            </div>
        </Element>
    </motion.section>
  )
}
