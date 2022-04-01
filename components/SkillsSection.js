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

  const { ref: expertiseRef, inView: isExpertiseVisible } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const { ref: frameworksRef, inView: isFrameworksVisible } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const { ref: dbRef, inView: isDbVisible } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <div className="container-fluid mx-auto h-screen p-5 md:p-10">
      <div className="font-poppins text-4xl md:text-6xl text-center font-bold text-primary">
        Skills
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row md:justify-evenly mt-10 md:mt-20">
        <div className="w-full md:w-3/5">
          <div className="mb-7" ref={expertiseRef}>
            <div
              className={`font-poppins text-black font-bold mb-2 text-2xl relative w-fit opacity-0 ${
                isExpertiseVisible ? styles.textAnimation + " opacity-100" : ""
              }`}
            >
              <span className={isExpertiseVisible ? styles.fadeIn : ""}>
                Expertise
              </span>
            </div>
            <div className="flex justify-center md:justify-start">
              <div
                className={`flex gap-x-5 gap-y-5 flex-wrap text-primary opacity-0 transition-all duration-[1s] delay-[100ms] translate-y-10 ${
                  isExpertiseVisible ? "translate-y-0 opacity-100" : ""
                }`}
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

          <div className="mb-7" ref={frameworksRef}>
            <div
              className={`font-poppins text-2xl text-black font-bold mb-2 relative w-fit opacity-0
                ${
                  isFrameworksVisible
                    ? styles.textAnimation + " opacity-100"
                    : ""
                }`}
            >
              <span className={isFrameworksVisible ? styles.fadeIn : ""}>
                Frameworks
              </span>
            </div>
            <div className="flex justify-center md:justify-start">
              <div
                className={`flex gap-x-5 gap-y-5 flex-wrap text-primary opacity-0 transition-all duration-[1s] delay-[100ms] translate-y-10 ${
                  isFrameworksVisible ? "translate-y-0 opacity-100" : ""
                }`}
              >
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

          <div className="mb-7" ref={dbRef}>
            <div
              className={`font-poppins text-2xl text-black font-bold w-fit relative opacity-0 mb-2 ${
                isDbVisible ? styles.textAnimation + " opacity-100" : ""
              }`}
            >
              <span className={isDbVisible ? styles.fadeIn : ""}>
                Databases
              </span>
            </div>
            <div className="flex justify-center md:justify-start">
              <div
                className={`flex gap-x-5 gap-y-5 w-full flex-wrap text-primary opacity-0 transition-all duration-[1s] delay-[100ms] translate-y-10 ${
                  isDbVisible ? "translate-y-0 opacity-100" : ""
                }`}
              >
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
