import {
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMaterialui,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import SkillBox from "./skill/SkillBox";

const SkillSection = () => {
  const iconSize = 26;
  return (
    <div className="container-fluid mx-auto h-screen p-5 md:p-10">
      <div className="font-poppins text-4xl md:text-6xl text-center font-bold text-darkBlack">
        Skills
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row md:justify-evenly mt-10 md:mt-20">
        <div className="w-full md:w-3/5">
          <div className="mb-7">
            <div className="font-poppins text-2xl text-black font-bold mb-2">
              Expertise
            </div>
            <div className="flex gap-x-5 gap-y-5 flex-wrap justify-center md:justify-start text-primary">
              <SkillBox
                name="React JS"
                icon={<SiReact size={iconSize} />}
                rating={10}
              />
              <SkillBox
                name="React Native"
                icon={<SiReact size={iconSize} />}
                rating={7}
              />
              <SkillBox
                name="Node JS"
                icon={<SiNodedotjs size={iconSize} />}
                rating={7}
              />
              <SkillBox
                name="TypeScript"
                icon={<SiTypescript size={iconSize} />}
                rating={6}
              />
              <SkillBox
                name="HTML"
                icon={<SiHtml5 size={iconSize} />}
                rating={7}
              />
              <SkillBox
                name="CSS"
                icon={<SiCss3 size={iconSize} />}
                rating={7}
              />
            </div>
          </div>

          <div className="mb-7">
            <div className="font-poppins text-2xl text-black font-bold mb-2">
              Frameworks
            </div>
            <div className="flex gap-x-5 gap-y-5 flex-wrap justify-center md:justify-start text-primary">
              <SkillBox
                name="Express JS"
                icon={<SiExpress size={iconSize} />}
                rating={7}
              />
              <SkillBox
                name="Nest JS"
                icon={<SiNestjs size={iconSize} />}
                rating={7}
              />
              <SkillBox
                name="Next JS"
                icon={<SiNextdotjs size={iconSize} />}
                rating={7}
              />
              <SkillBox
                name="Material UI"
                icon={<SiMaterialui size={iconSize} />}
                rating={6}
              />
            </div>
          </div>

          <div className="mb-7">
            <div className="font-poppins text-2xl text-black font-bold mb-2">
              Databases
            </div>
            <div className="flex gap-x-5 gap-y-5 flex-wrap justify-center md:justify-start text-primary">
              <SkillBox
                name="MongoDB"
                icon={<SiMongodb size={iconSize} />}
                rating={7}
              />
              <SkillBox
                name="MySql"
                icon={<SiMysql size={iconSize} />}
                rating={6}
              />
            </div>
          </div>
        </div>

        <div className="hidden md:w-2/5 md:flex justify-center">
          <div className="w-20 md:w-40">
            <img src="/skill_graphics.svg" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
