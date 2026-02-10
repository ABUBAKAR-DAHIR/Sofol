import { ArrowLeft, ArrowRight } from 'lucide-react'
import { relevantBlogs } from '../constants/constants'
import { useState } from 'react';

export default function RelevantBlogs() {
    const VISIBLE = 3;
    const [index, setIndex] = useState<number>(0);

    const next = () => {
        if(index < relevantBlogs.length - VISIBLE) {
            setIndex((prev) => prev+1)
        } 
    }

    const prev = () => {
        if(index > 0){
            setIndex((prev) => prev-1)
        }else setIndex(relevantBlogs.length - VISIBLE)
    }

    // let visibleBlogs = relevantBlogs.slice(index, index+VISIBLE);
    
    // 0       0 1 2
    // 1       1 2 3
    // 2       2 3 4
    // 3       3 4 5 
    // 4       4 5 0
    // 5       5 0 1
    // 6       0 1 2
    console.log(index)
  return (
    <section className='max-w-7xl flex mx-auto mt-8'>
        <div className='mx-auto flex flex-col flex-wrap justify-center items-center'>
            <p className="font-semibold capitalize my-4 text-center">recent blogs</p>
                            
            {/* blogs */}
            <div className="relative flex flex-wrap items-center justify-center gap-8">
                {
                    relevantBlogs.map((blog) => (
                        <div key={blog.img} className=" w-80 flex justify-center items-center flex-col p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_12px_30px_rgba(0,0,0,0.18)] rounded-2xl cursor-pointer hover:scale-105 duration-300">
                            <img src={blog.img} alt="blog_image" width={270} height={350}/>
                            <p className="font-semibold my-3">{blog.heading}</p>
                            <p className="text-sofolBlack/50 text-sm">{blog.preview}</p>
                            <p className="text-sofolBlack/40 text-sm mt-6  w-full">{blog.date}</p>

                        </div>
                    ))
                }

                {/* buttons */}
                <div className='absolute -left-5 max-[1280px]:left-0 rounded-full border-2 p-3 cursor-pointer bg-sofolRed text-white' onClick={next}><ArrowLeft className=' size-5'/></div>
                <div className='absolute -right-7 max-[1280px]:right-0 rounded-full border-2 p-3 cursor-pointer bg-sofolRed text-white' onClick={prev}><ArrowRight className='size-5'/></div>
                
                
            </div>
        </div>
    </section>
  )
}


// import { useState } from "react"
// import { ArrowLeft, ArrowRight } from "lucide-react"
// import { relevantBlogs } from "../constants/constants"

// const VISIBLE = 3
// const CARD_WIDTH = 250 // w-80 = 20rem = 320px

// export default function RelevantBlogs() {
//   const [index, setIndex] = useState(0)

//   const next = () => {
//     if (index < relevantBlogs.length - VISIBLE) {
//       setIndex(prev => prev + 1)
//     }
//   }

//   const prev = () => {
//     if (index > 0) {
//       setIndex(prev => prev - 1)
//     }
//   }

//   return (
//     <section className="max-w-7xl mx-auto mt-8">
//       <p className="font-semibold capitalize my-4 text-center">
//         recent blogs
//       </p>

//       {/* carousel */}
//       <div className="relative">

//         {/* viewport */}
//         <div className="overflow-hidden">

//           {/* track */}
//           <div
//             className="flex gap-8 transition-transform duration-500 ease-out"
//             style={{
//               transform: `translateX(-${index * (CARD_WIDTH + 32)}px)`
//             }}
//           >
//             {relevantBlogs.map(blog => (
//               <div
//                 key={blog.img}
//                 className="w-80 flex-shrink-0 flex flex-col p-4
//                            shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_12px_30px_rgba(0,0,0,0.18)]
//                            rounded-2xl cursor-pointer"
//               >
//                 <img src={blog.img} alt="blog_image" />
//                 <p className="font-semibold my-3">{blog.heading}</p>
//                 <p className="text-sofolBlack/50 text-sm">{blog.preview}</p>
//                 <p className="text-sofolBlack/40 text-sm mt-6">
//                   {blog.date}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* buttons */}
//         <button
//           onClick={prev}
//           disabled={index === 0}
//           className="absolute -left-6 top-1/2 -translate-y-1/2
//                      rounded-full border-2 p-3 bg-sofolRed text-white
//                      disabled:opacity-40"
//         >
//           <ArrowLeft className="size-5" />
//         </button>

//         <button
//           onClick={next}
//           disabled={index >= relevantBlogs.length - VISIBLE}
//           className="absolute -right-6 top-1/2 -translate-y-1/2
//                      rounded-full border-2 p-3 bg-sofolRed text-white
//                      disabled:opacity-40"
//         >
//           <ArrowRight className="size-5" />
//         </button>

//       </div>
//     </section>
//   )
// }
