import { ArrowLeft, ArrowRight } from 'lucide-react'
import { relevantBlogs } from '../constants/constants'

export default function RelevantBlogs() {
  return (
    <section className='max-w-7xl flex mx-auto mt-8'>
        <div className='mx-auto flex flex-col flex-wrap justify-center items-center'>
            <p className="font-semibold capitalize my-4 text-center">recent blogs</p>
                            
            {/* blogs */}
            <div className="relative flex flex-wrap items-center justify-center gap-8">
                {
                    relevantBlogs.map(blog => (
                        <div key={blog.img} className=" w-80 flex justify-center items-center flex-col p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_12px_30px_rgba(0,0,0,0.18)] rounded-2xl cursor-pointer hover:scale-105 duration-300">
                            <img src={blog.img} alt="blog_image" width={270} height={350}/>
                            <p className="font-semibold my-3">{blog.heading}</p>
                            <p className="text-sofolBlack/50 text-sm">{blog.preview}</p>
                            <p className="text-sofolBlack/40 text-sm mt-6  w-full">{blog.date}</p>

                        </div>
                    ))
                }

                {/* buttons */}
                <div className='absolute -left-5 max-[1280px]:left-0 rounded-full border-2 p-3 cursor-pointer bg-sofolRed text-white'><ArrowLeft className=' size-5'/></div>
                <div className='absolute -right-7 max-[1280px]:right-0 rounded-full border-2 p-3 cursor-pointer bg-sofolRed text-white'><ArrowRight className='size-5'/></div>
                
                
            </div>
        </div>
    </section>
  )
}
