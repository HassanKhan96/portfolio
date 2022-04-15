import ProjectCard from "./porjects/ProjectCard"
import { useInView } from "react-intersection-observer";


const Projects = () => {

    const { ref: porjectsRef, inView: isProjectsVisible } = useInView({
        triggerOnce: true,
    })

    return (
        <div className={`font-poppins px-5 mt-5 transition-all delay-75 duration-[1500ms] ${isProjectsVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`} ref={porjectsRef}>
            <div className="text-4xl text-black font-bold underline underline-offset-8">Projects</div>
            <div className="mt-10 flex flex-wrap gap-y-5 gap-x-5">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects;

