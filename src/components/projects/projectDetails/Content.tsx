import { allProjects } from "../constants/constants"

export default function Content() {
    const match = window.location.pathname.match(/\/projects\/(\d+)/)
    const id = match ? match[1] : null

    if(!id) return <p>NO id found!</p>
    const project = allProjects[parseInt(id)]
  return (
    <section className="max-w-7xl flex mx-auto max-[1280px]:px-10">
        <div>
            <div className="xl:w-325">
                <img src="/projects-section/details/main.png" alt="main_image" />
            </div>

            <div className="flex my-8 flex-wrap max-md:flex-col">
                <div className="flex-2/3">
                    <h1 className="text-2xl font-semibold capitalize mb-6">{project.heading}</h1>

                    <h3 className="text-lg uppercase font-semibold mt-4 mb-1 text-gray-800">challenges</h3>
                    <p className="text-gray-500 w-5/6">{project.challenges}</p>

                    <h3 className="text-lg uppercase font-semibold mt-4 mb-1 text-gray-800">research</h3>
                    <p className="text-gray-500 w-5/6">{project.research}</p>

                    <h3 className="text-lg uppercase font-semibold mt-4 mb-1 text-gray-800">ideate</h3>
                    <p className="text-gray-500 w-5/6">{project.ideate}</p>
                </div>

                <div className="flex-1/4">
                    <h3 className="text-lg uppercase font-semibold mt-4 mb-1 text-gray-800">project duration</h3>
                    <p className="text-gray-500 w-5/6 text-xs">10th February 2023 - 15th March 2023</p>

                    {/* tools */}
                    
                    <h3 className="text-lg uppercase font-semibold mb-1 text-gray-800 mt-6">tools used</h3>
                    <div className="flex gap-4 flex-wrap">
                        <div className="rounded-4xl shadow-xl cursor-pointer flex gap-2 items-center justify-center px-4 hover:bg-gray-700 hover:text-white duration-500  ">
                            <img src="/public/projects-section/details/figma.svg" alt="figma_svg" className="size-6"/>
                            <span>Figma</span>
                        </div>
                        <div className="rounded-4xl shadow-lg cursor-pointer flex gap-2 items-center justify-center p-4 hover:bg-gray-700 hover:text-white duration-500  ">
                            <img src="/public/projects-section/details/adobe-illustrator.svg" alt="adobe_illustrator" />
                            <span>Figma</span>
                        </div>
                    </div>

                    {/* skillset */}
                    <div className="mt-6">
                        <h3 className="text-lg uppercase font-semibold mt-4 mb-1 text-gray-800">skillsets</h3>
                        <div className="flex flex-wrap gap-2">
                            <p className="rounded-4xl border-2 text-sm hover:bg-sofolBlack hover:text-white duration-500 cursor-pointer px-6 py-3 capitalize">poster design</p>
                            <p className="rounded-4xl border-2 text-sm hover:bg-sofolBlack hover:text-white duration-500 cursor-pointer px-6 py-3 capitalize">email design</p>
                            <p className="rounded-4xl border-2 text-sm hover:bg-sofolBlack hover:text-white duration-500 cursor-pointer px-6 py-3 capitalize">logo design</p>
                        </div>
                    </div>

                    {/* team mates */}
                    <div className="mt-6">
                        <h3 className="text-lg uppercase font-semibold mt-4 mb-1 text-gray-800">Team mates</h3>

                        <div className="flex flex-wrap gap-2">
                            {
                                project.teamMates.map(mate => (
                                    <div className="size-10 cursor-pointer">
                                        <img key={mate} src={mate} alt="Team_mate" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
