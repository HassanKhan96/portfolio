
const ProjectCard = () => {
    const arr = ["React", "Node", "MongoDB", "Dailogflow"]
    return (
        <div className="w-full h-[22rem] mb-5 md:h-96 md:w-[25rem] shadow-[2px_2px_30px_-5px_rgba(60,55,138,0.1)] rounded-md">
            <div className="w-full h-[60%] overflow-hidden">
                <img
                    src="/dermabot.png"
                    className="w-full h-full object-contain"

                />
            </div>
            <div className="p-1 h-[40%] relative md:p-5">

                <div className="font-poppins text-primary text-3xl font-bold px-2">Dermabot</div>
                <div className="w-full flex flex-wrap">
                    {
                        arr.map((tech, i) => {
                            return (
                                <div className="font-poppins text-[#999] px-2 py-1 rounded-2xl bg-bgSecondary m-1 text-sm" key={i + Math.random()}>
                                    {tech}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="font-bold px-3 absolute bottom-4 left-1 text-primary hover:underline md:px-5">Live URL</div>
            </div>
        </div>
    )
}

export default ProjectCard;