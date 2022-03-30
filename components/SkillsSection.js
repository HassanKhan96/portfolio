import { SiReact, SiExpress, SiMongodb, SiNodedotjs, SiNextdotjs, SiNestjs } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import SkillBox from "./skill/SkillBox";

const SkillSection = () => {
  const iconSize = 26
  return (
    <div className="container-fluid mx-auto h-screen p-5 md:p-10">
      <div className="font-poppins text-2xl md:text-4xl font-semibold text-black">
        Skills
      </div>
      <div className="flex flex-col sm:flex-col-reverse md:flex-row md:justify-evenly mt-10 md:mt-20">
        <div className="md:w-2/5 flex justify-center">
          <div className="w-20 md:w-40">
            <img src="/skill_graphics.svg" className="w-full h-full" />
          </div>
        </div>
        <div className="md:w-3/5 mt-5">
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center text-primary"> */}
          <div className="flex gap-5 flex-wrap justify-center md:justify-start text-primary">
            <SkillBox name="React JS" icon={<SiReact size={iconSize} />} rating={10} />
            <SkillBox name="React Native" icon={<SiReact size={iconSize} />} rating={7} />
            <SkillBox name="Node JS" icon={<SiNodedotjs size={iconSize} />} rating={7} />
            <SkillBox name="Express JS" icon={<SiExpress size={iconSize} />} rating={7} />
            <SkillBox name="Nest JS" icon={<SiNestjs size={iconSize} />} rating={7} />
            <SkillBox name="Next JS" icon={<SiNextdotjs size={iconSize} />} rating={7} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillSection;
