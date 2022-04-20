import Link from "next/link";

const ProjectCard = ({ imageUri, techs = [], name = "", url = "" }) => {
  return (
    <div className="sm:w-full sm:h-[22rem] mb-5 md:h-72 md:w-[20rem] lg:h-96 lg:w-[25rem] shadow-[2px_2px_30px_-5px_rgba(60,55,138,0.1)] rounded-md">
      <div className="w-full h-[60%] overflow-hidden">
        <img src={imageUri} className="w-full h-full object-contain" />
      </div>
      <div className="p-1 h-[40%] relative lg:p-5">
        <div className="font-poppins text-primary text-3xl font-bold px-2">
          {name}
        </div>
        <div className="w-full flex flex-wrap">
          {techs.map((tech, i) => {
            return (
              <div
                className="font-poppins text-[#999] px-2 py-1 rounded-2xl bg-bgSecondary m-1 text-sm md:text-xs"
                key={i + Math.random()}
              >
                {tech}
              </div>
            );
          })}
        </div>
        <div className="font-bold px-3 absolute bottom-4 left-1 text-primary hover:underline lg:px-5">
          <Link href={url}>
            <a>Live URL</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
