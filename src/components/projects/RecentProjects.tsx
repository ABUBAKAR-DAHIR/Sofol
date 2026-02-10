import { recentProjects } from "./constants/constants";

export default function RecentProjects() {
  return (
    <section className="max-w-7xl flex flex-col items-center justify-center mx-auto">
        <p className="font-semibold my-4">Recent projects</p>

        <div className="flex flex-wrap gap-3">
            {
                recentProjects.map((proj, i) => (
                    <div key={i} className="size-70">
                        <img src={proj.img} alt="project_image" />
                    </div>
                ))
            }
        </div>
    </section>
  )
}
