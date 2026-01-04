import { motion, AnimatePresence } from "framer-motion";
import { Dot } from "lucide-react";
import { useEffect, useState } from "react";
import { contents } from "../../../constants/constants";
import { Button } from "../ui/button";

export default function Hero() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (dir: number) => {
    setIndex([
      (index + dir + contents.length) % contents.length,
      dir,
    ]);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className='relative h-[calc(100vh-130px)] max-xl:h-[calc(100vh-80px)] bg-[url("/about-section/hero.png")] bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center text-center'>

     {/* <section className="relative h-screen overflow-hidden bg-black text-white flex items-center justify-center"> */}

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) paginate(1);
            if (info.offset.x > 100) paginate(-1);
          }}
          className="absolute max-w-3xl text-center"
        >
          <h1 className="text-white font-bold text-6xl capitalize my-4">
              {contents[index].header}
            </h1>

            <p className="text-white my-6 max-md:max-w-xl mx-auto">
              {contents[index].text}
            </p>

            <Button className="py-6 px-6 bg-white text-black hover:bg-gray-300">
              Read More
            </Button>
        </motion.div>
      </AnimatePresence>
      {/* Dots */}
      <div className="flex gap-2 absolute bottom-1/4 max-md:bottom-1/5">
        {contents.map((_, i) => (
          <Dot
            key={i}
            onClick={() => paginate(i > index ? 1 : -1)}
            className={`cursor-pointer transition-all
              ${index === i ? "size-6 text-red-600" : "size-6 text-white"}
            `}
          />
        ))}
      </div>


    </section>
  );
}
