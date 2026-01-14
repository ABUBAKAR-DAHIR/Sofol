import { useState } from "react"
import { designerImages } from "./constants/constants"

const departments = [
  'creative designers',
  'marketers',
  'software developers',
  'creative writers',
  'human resources'
]
export default function Departments() {
  const [department, setDepartment] = useState<string>('')
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
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 mt-10">
        {
          designerImages.map(designer => (
            <div className="shadow-lg shadow-sofolBlack/20 rounded-xl cursor-pointer hover:scale-105 transform-all duration-300 p-10 group">
              <img src={designer.img} alt="designer_image" className="size-40"/>
              <p className="text-sofolBlack font-semibold text-center uppercase mt-6 mb-1 group-hover:text-sofolRed">{designer.name}</p>
              <p className="text-sofolBlack/75 capitalize text-center">{designer.job}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
