import { products } from './constants/constants'

export default function Products() {
  return (
    <section>
        <div className='max-w-5xl mx-auto max-[1024px]:px-10 '>
            <p className='capitalize text-sofolRed text-sm'>recent products</p>
            <div className='flex justify-between max-md:flex-col max-md:gap-2'>
                <h2 className='font-semibold text-2xl capitalize'>check recent products completed by design team</h2>
                <span className='text-sofolRed cursor-pointer hover:underline'>see all</span>
            </div>
            <div className="flex gap-2 my-2">
                <div className="h-1 w-25 bg-sofolRed rounded-full" />
                <div className="h-1 w-25 bg-sofolRed rounded-full" />
            </div>

            {/* images */}
            <div className='flex flex-wrap gap-6 mt-4 md:mt-10 max-md:justify-center max-md:my-4'>
                {
                    products.map(prod => (
                        <img key={prod.img} src={prod.img} alt='product_image' className='size-55'/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
