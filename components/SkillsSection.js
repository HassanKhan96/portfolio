import { useInView } from "react-intersection-observer";
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
import SkillBg from "./graphics/SkillBg";

const SkillSection = () => {
  const iconSize = 26;

  const { ref: skillRef, inView: isSkillVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className="container-fluid mx-auto relative h-fit px-5 md:px-5"
      ref={skillRef}
    >
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 z-0 sm:opacity-0
        transition-all delay-500 duration-[1000ms] ${
          isSkillVisible
            ? "translate-x-0 lg:opacity-20"
            : "translate-x-20 opacity-0"
        }
      `}
      >
        <SkillBg />
      </div>
      <div
        className={`flex flex-col sm:flex-col-reverse lg:flex-row lg:justify-evenly mt-10 md:mt-20 z-10
        transition-all delay-75 duration-[1500ms] ${
          isSkillVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }
      `}
      >
        <div className="w-full md:gap-x-20 lg:w-2/4">
          <div className="mb-12">
            <div className="font-poppins text-black font-bold text-3xl relative w-fit">
              <span className="underline underline-offset-8">Expertise</span>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="flex w-full pt-8 gap-x-5 gap-y-5 flex-wrap text-primary">
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
          </div>

          <div className="mb-12">
            <div className="font-poppins text-3xl text-black font-bold relative w-fit">
              <span className="underline-offset-8 underline">Frameworks</span>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="flex gap-x-5 gap-y-5 flex-wrap w-full pt-8 text-primary">
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
          </div>

          <div className="mb-12">
            <div className="font-poppins text-3xl text-black font-bold w-fit relative">
              <span className="underline underline-offset-8">Databases</span>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="flex gap-x-5 gap-y-5 w-full pt-8 flex-wrap text-primary">
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
        </div>

        <div className="w-full lg:w-2/4 flex flex-col px-2 lg:px-10 mb-5 items-center">
          <div className="text-center mb-5">
            <h1 className="font-poppins font-bold text-black text-3xl underline underline-offset-8">
              About Me
            </h1>
          </div>
          <div className="w-[250px] h-[250px] my-10 rounded-full overflow-hidden">
            <img src="/avatar.jpeg" className="w-full h-full object-cover" />
          </div>
          <div className="w-full font-normal xl:px-8 text-center">
            I am a MERN stack developer with 2 years of overall experience in
            React Native, React JS, Node JS and MongoDB. I have created complex
            projects and worked on apps with more than 20k lines of code. I am
            constantly working on new projects and learning new skills. I have
            worked with dozens of JavaScript libraries and frameworks.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
