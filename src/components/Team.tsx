import { Element } from "react-scroll";
import { Button } from "./ui/button";
import { team } from "../../constants/constants";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const CARD_WIDTH = 20.5; // rem (size-80 + gap-2)
const VISIBLE_COUNT = 3;

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // clone first 3 for infinite loop
  const slides = [...team, ...team.slice(0, VISIBLE_COUNT)];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === team.length) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 800); // must match animation duration
    } else {
      setAnimate(true);
    }
  }, [index]);

  return (
    <motion.section
      aria-label="Our Team"
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9 }}
    >
      <Element name="team" className="flex flex-col pt-10 overflow-clip">
        <div className="max-w-7xl mx-auto max-xl:px-10 max-md:px-4">
          <p className="capitalize text-sofolRed">about us</p>

          <div className="flex justify-between max-md:flex-col flex-wrap">
            <p className="font-semibold text-[25px] max-md:text-center">
              Who we are: Dreamers, doers, and change-makers.
            </p>
            <Button variant="link" className="text-sofolRed max-md:p-0">
              See all
            </Button>
          </div>

          <div className="flex gap-2 my-2">
            <div className="h-1 w-25 bg-sofolRed rounded-full" />
            <div className="h-1 w-25 bg-sofolRed rounded-full" />
          </div>

          {/* IMAGE 3 SLOTS */}
          <div
            className="overflow-hidden mt-14 mx-auto"
            style={{ width: "61rem" }} // EXACT width for 3 cards
          >
            <motion.div
              className="flex gap-2"
              animate={{ x: `-${index * CARD_WIDTH}rem` }}
              transition={
                animate
                  ? { duration: 0.8, ease: "easeInOut" }
                  : { duration: 0 }
              }
            >
              {slides.map((person, i) => (
                <div
                  key={i}
                  className="relative size-80 cursor-pointer group my-10 shrink-0"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="fill mb-100"
                  />
                  <p className="absolute -bottom-10 right-1/2 translate-x-16 text-white font-semibold text-center text-xl transition-all duration-500 ease-in-out group-hover:-bottom-5">
                    {person.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Element>
    </motion.section>
  );
}
