import { SiReact, SiExpress, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import SkillBox from "./skill/SkillBox";

const SkillSection = () => {
  return (
    <div className="container-fluid mx-auto h-screen p-5 md:p-10">
      <div className="font-poppins text-2xl md:text-4xl font-semibold text-black">
        Skills
      </div>
      <div className="flex flex-col sm:flex-col-reverse md:flex-row md:justify-evenly mt-10 md:mt-20">
        <div className="md:w-3/5 mt-5">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center text-primary">
            <SkillBox
              name="React"
              icon={<SiReact size={50} />}
              rating={7}
            />
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
