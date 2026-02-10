import { useState } from "react"
import { allProjects } from "./constants/constants"

const departments = [
  'creative designers',
  'marketers',
  'software developers',
  'creative writers',
  'human resources'
]
export default function AllProjects() {
  const [department, setDepartment] = useState<string>(departments[0])
  return (
    <section className="my-20">
      {/* nav buttons */}
      <div className="max-w-5xl flex max-lg:flex-wrap justify-evenly uppercase font-semibold mx-auto ">
        {
          departments.map((dept,i)=>(
            <div key={i} className={`border-b-2 pb-2 w-full text-center cursor-pointer ${department === dept ? 'text-sofolRed border-b-sofolRed' : 'text-sofolBlack'}`} onClick={() => setDepartment(dept)}>{dept}</div>
          ))
        }
      </div>

      {/* images */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 mt-10">
        {
          allProjects
            .filter(proj => proj.category === department)
            .map((proj) => (
              <div
                key={proj.id}
                className="flexshrink-0 size-65 shadow-lg shadow-sofolBlack/20 cursor-pointer rounded-2xl hover:scale-105 transition-transform duration-300"
                onClick={() => window.location.href = `/projects/${proj.id}`}
              >
                <img
                  src={proj.img}
                  alt="proj_image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))
        }
      </div>

    </section>
  )
}
