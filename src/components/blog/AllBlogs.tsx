import { allBlogs } from "./constants/constants";

export default function AllBlogs() {
  return (
    <section>
        <div className="max-w-5xl mx-auto">
            <p className="font-semibold capitalize">all blogs</p>
            {/* blogs */}
            <div className="flex flex-wrap items-center justify-center gap-8 relative">
                {
                    allBlogs.map(blog => (
                        <div key={blog.img} className="w-80 flex justify-center items-center flex-col p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_12px_30px_rgba(0,0,0,0.18)] rounded-2xl hover:scale-105 duration-300 cursor-pointer">
                            <img src={blog.img} alt="blog_image" width={270} height={350}/>
                            <p className="font-semibold my-3">{blog.heading}</p>
                            <p className="text-sofolBlack/50 text-sm">{blog.preview}</p>
                            <p className="text-sofolBlack/40 text-sm mt-6  w-full">{blog.date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
