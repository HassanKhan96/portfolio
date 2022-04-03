import { useState, useEffect, useRef } from "react";
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
import styles from "../styles/Animation.module.css";

const SkillSection = () => {
  const iconSize = 26;

  const { ref: skillRef, inView: isSkillVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });


  return (
    <div className="container-fluid mx-auto h-screen px-5 md:px-5" ref={skillRef}>
      <h1
        className={`font-poppins text-4xl w-fit font-bold md:text-6xl mx-auto text-black relative  ${isSkillVisible ? styles.textAnimation : ""}
      `}>
        <span className={`underline underline-offset-8 opacity-0 ${isSkillVisible ? styles.fadeIn : null}`}> Skills</span>
      </h1>
      <div
        className={`flex flex-col sm:flex-col md:flex-row md:justify-evenly mt-10 md:mt-20 
        transition-all delay-100 duration-[1500ms] ${isSkillVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
      `}>
        <div className="w-full md:w-full md:flex md:flex-wrap md:gap-x-20">
          <div className="mb-7">
            <div
              className="font-poppins text-black font-bold mb-2 text-2xl relative w-fit"
            >
              <span>
                Expertise
              </span>
            </div>
            <div className="flex justify-center md:justify-start">
              <div
                className="flex w-full gap-x-5 gap-y-5 flex-wrap text-primary"
              >
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

          <div className="mb-7">
            <div
              className="font-poppins text-2xl text-black font-bold mb-2 relative w-fit"
            >
              <span>
                Frameworks
              </span>
            </div>
            <div className="flex justify-center md:justify-start">
              <div
                className="flex gap-x-5 gap-y-5 flex-wrap w-full text-primary">
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

          <div className="mb-7">
            <div
              className="font-poppins text-2xl text-black font-bold w-fit relative mb-2">
              <span>
                Databases
              </span>
            </div>
            <div className="flex justify-center md:justify-start">
              <div
                className="flex gap-x-5 gap-y-5 w-full flex-wrap text-primary">
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

        {/* <div className="hidden md:w-2/5 md:flex justify-center">
          <div className="w-20 md:w-40">
            <img src="/skill_graphics.svg" className="w-full h-full" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SkillSection;
