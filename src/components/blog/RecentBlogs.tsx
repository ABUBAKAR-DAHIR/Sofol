import { categories, recentBlogs } from "./constants/constants";

export default function RecentBlogs() {
  return (
    <section className="my-20">
        <div className="container flex flex-col justify-center items-center mx-auto">
            <p className="capitalize text-sofolRed">blogs</p>
            <p className="font-semibold text-2xl text-sofolBlack max-md:text-center max-md:px-2">Stay up to date with our latest news</p>
            <div className="flex gap-2 my-2">
            <div className="h-[3.5px] w-25 bg-sofolRed rounded-full" />
            <div className="h-[3.5px] w-25 bg-sofolRed rounded-full" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-8 flex flex-wrap gap-16 items-center justify-between">
            {/* recent blogs */}
            <div>
                <p className="font-semibold capitalize my-4 max-md:text-center">recent blogs</p>
                
                {/* blogs */}
                <div className="flex flex-wrap items-center justify-center gap-8 relative">
                    {
                        recentBlogs.map(blog => (
                            <div key={blog.img} className="w-80 flex justify-center items-center flex-col p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_12px_30px_rgba(0,0,0,0.18)] rounded-2xl cursor-pointer hover:scale-105 duration-300">
                                <img src={blog.img} alt="blog_image" width={270} height={350}/>
                                <p className="font-semibold my-3">{blog.heading}</p>
                                <p className="text-sofolBlack/50 text-sm">{blog.preview}</p>
                                <p className="text-sofolBlack/40 text-sm mt-6  w-full">{blog.date}</p>
                            </div>
                        ))
                    }
            {/* divider */}
            <div className="w-px absolute top-0 bottom-0 -right-15 bg-sofolBlack/50 max-lg:hidden"/>
                </div>
            </div>

            {/* category list */}
            <div className="my-auto max-md:mx-auto">
                <p className="font-semibold capitalize my-4 mb-8">category list</p>
                <div className="flex flex-col justify-between h-90">
                    {
                        categories.map(category => (
                            <div className="">
                                <p className="text-sofolBlack/50 cursor-pointer hover:text-sofolBlack duration-300">{category}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
