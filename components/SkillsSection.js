import { SiReact, SiExpress, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const SkillSection = () => {
  return (
    <div className="container mx-auto h-screen p-5 md:p-10">
      <div className="font-poppins text-2xl md:text-4xl font-semibold text-black">
        Skills
      </div>
      <div className="flex flex-col sm:flex-col-reverse md:flex-row md:justify-evenly mt-20">
        <div className="md:w-3/5">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 border justify-center text-primary">
            <span className="w-fit">
              <SiReact size={70} />
            </span>
            <span className="w-fit">
              <DiNodejs size={70} />
            </span>
            <span className="w-fit">
              <SiExpress size={70} />
            </span>
            <span className="w-fit border">
              <SiMongodb size={70} />
            </span>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <div className="w-20 md:w-40">
            <img src="/skill_graphics.svg" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
