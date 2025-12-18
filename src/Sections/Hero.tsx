import { Dot } from "lucide-react";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { contents } from "../../constants/constants";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleChange((index + 1) % contents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  // Trigger animation
  const handleChange = (newIndex: number) => {
    setAnimate(false);
    setTimeout(() => {
      setIndex(newIndex);
      setAnimate(true);
    }, 300);
  };

  return (
    <section className='relative h-[calc(100vh-130px)] max-xl:h-[calc(100vh-80px)] bg-[url("/hero/hero.png")] bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-center items-center text-center'>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-3xl transition-all duration-500 ease-out
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
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
      </div>

      {/* Dots */}
      <div className="relative z-10 flex gap-2 mt-16">
        {contents.map((_, i) => (
          <Dot
            key={i}
            onClick={() => handleChange(i)}
            className={`cursor-pointer transition-all
              ${index === i ? "size-6 text-red-600" : "size-6 text-white"}
            `}
          />
        ))}
      </div>

    </section>
  );
}
