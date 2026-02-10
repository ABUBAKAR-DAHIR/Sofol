import { allBlogs, categories, tags } from "../constants/constants";

export default function Detail() {
  const match = window.location.pathname.match(/\/blogs\/(\d+)/);
  const id = match ? match[1] : null;
  if(!id) return <p>null id</p>

  const blog = allBlogs[parseInt(id)]

  return (
    <section className="max-w-7xl mx-auto flex items-center justify-center" aria-label={blog.heading}>
      <div className="w-full max-[1280px]:px-10 mx-auto flex max-md:flex-col gap-12 items-center justify-between">
        <div className="flex-[70%]">
          <img src={blog.img} alt="blog_image" />
          <h1 className="font-semibold text-xl my-4">{blog.heading}</h1>
          <p className="text-gray-600">{blog.body}</p>
        </div>
        {/* category list */}
        <div className="my-auto max-md:mx-auto md:flex-[30%] max-md:flex-[60%] max-md:justify-between max-md:w-full max-md:h-fit">
          <div className="my-auto max-md:mx-auto max-md:flex-1 max-md:w-full">
              <p className="font-semibold capitalize my-4 mb-8">category list</p>
              <div className="flex flex-col justify-between h-90 max-md:flex-1">
                  {
                      categories.map(category => (
                          <div key={category} className="">
                              <p className="text-sofolBlack/50 cursor-pointer hover:text-sofolBlack duration-300">{category}</p>
                          </div>
                      ))
                  }
              </div>
          </div>
          
          <div className="">
            <h1 className="font-semibold text-xl capitalize my-4">tags</h1>
            <div className="flex flex-wrap">
              {
                tags.map(tag => (
                  <div key={tag} className="m-2">
                    <p className="border-2 rounded-full p-3 text-sm cursor-pointer hover:bg-gray-600 hover:text-white duration-500">{tag}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
