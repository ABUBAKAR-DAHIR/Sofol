import { Button } from "./ui/button"

export type DetailType = {
    check: boolean,
    content: string
}

export type PricingCardType = {
    type: string,
    time: string,
    amount: string,
    save?: string,
    offer?: string,
    mostPopular: boolean,
    details: DetailType[],
    bg: string ,
    borderR?: string 
}

export default function PricingCard({pricingCard} : {pricingCard: PricingCardType}) {
  return (
    <div className="w-80 md:h-135 max-md:h-140 border-2 rounded-xl overflow-clip">

        {/* top part */}
        <div className={`relative h-1/5 ${pricingCard.bg} flex flex-col items-center`}>
            <h1 className={`font-semibold text-white text-[23px] mt-4 p-0 leading-0 tracking-wider ${pricingCard.type === 'Standard' && pricingCard.mostPopular ? 'max-md:pt-4 mb-2' : 'mb-3'}`}>{pricingCard.type}</h1>
            <p className={`font-medium capitalize text-white m-0 p-0 text-xs `}>1 month</p>

            <div className={`absolute top-1/2 left-1/2 rounded-full p-2 border-4 border-white ${pricingCard.bg} size-26 -translate-x-12 flex flex-col items-center justify-center shadow-[0_10px_15px_rgba(0,0,0,0.35)]`}>
                <p className="text-white text-sm">{pricingCard.save}</p>
                <p className=" text-xl tracking-wider font-semibold text-white text-[23px]">{pricingCard.amount}</p>
                <p className="text-white text-sm">{pricingCard.offer}</p>
            </div>

            {/* display the most popular only if it is there  */}
            {
                pricingCard.mostPopular && (
                    <div className="absolute top-0 left-0 bg-sofolYellow py-px px-2 text-xs capitalize w-25 ">Most popular
                        <span className={`absolute right-0 top-0 border-r-10 border-t-10 border-b-10 ${pricingCard.borderR} w-0 h-0 border-t-transparent border-b-transparent`}></span>
                    </div>
                )
            }

        </div>
        
        {/* offers */}
        <div className="flex flex-col my-4 h-3/7 mt-17">
            {
                pricingCard.details.map((detail: DetailType, i: number) => (
                    detail.check ? <div key={i} className="flex gap-2 mx-auto items-center justify-center text-xs leading-4 px-4">
                        <img src="/pricing/check.svg" alt={detail.content} className="size-4"/>
                        <p className="mb-2">{detail.content}</p>
                    </div>
                    :
                    <div key={i} className="flex gap-2 mx-auto items-center justify-center text-xs leading-4 px-4">
                        <img src="/pricing/lock.svg" alt={detail.content} className="size-4" />
                        <p className="opacity-20">{detail.content}</p>
                    </div> 
                ))
            }
            
        </div>
        
        {/* bottom part - button */}
        <div className="h-1/5 border-t-2 flex flex-col items-center justify-center">
            {/* <h1 className="font-semibold text-white text-[23px] mt-8 p-0 mb-3 leading-0 tracking-wider">Basic</h1>
            <p className="font-medium capitalize text-white m-0 p-0 text-xs">1 month</p> */}
            <Button className={`${pricingCard.bg} capitalize font-light w-[80%] text-md py-6 align-middle mx-auto flex items-center justify-center`}>Buy This plan</Button>
        
        </div>

    </div>
  )
}
