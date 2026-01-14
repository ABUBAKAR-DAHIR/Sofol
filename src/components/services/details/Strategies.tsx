import { strategies } from "./constants/constants";

export default function Strategies() {
  return (
    <section className="md:my-20 my-10">
        <div className="container flex flex-col justify-center items-center mx-auto max-md:px-10">
            <p className="capitalize text-sofolRed">blogs</p>
            <p className="font-semibold text-2xl text-sofolBlack">Stay up to date with our latest news</p>
            <div className="flex gap-2 my-2">
            <div className="h-[3.5px] w-25 bg-sofolRed rounded-full" />
                <div className="h-[3.5px] w-25 bg-sofolRed rounded-full" />
            </div>
        </div>
        <div className="max-w-5xl max-[1024px]:px-10 mx-auto flex justify-center items-center">

            {/* strategies */}
            <div className="flex flex-wrap items-center justify-center gap-10 mx-auto my-10">
                {
                    strategies.map(strategy => (
                        <div className="py-10 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_12px_30px_rgba(0,0,0,0.18)] rounded-2xl flex flex-col justify-center items-center px-4 ">
                            <img src={strategy.icon} alt="strategy_image" className="size-10"/>
                            <h1 className="font-semibold text-sofolBlack uppercase">{strategy.heading}</h1>
                            <p className="text-sm text-sofolBlack/50 max-w-80 my-6">{strategy.comment}</p>
                            <span className="flex gap-1 mt-4 cursor-pointer"><img src="/about/Arrow.svg" alt="arrow_right" width={25}/>Read more </span>
                        </div>
                    ))
                }
            </div>

        </div>
    </section>
  )
}
