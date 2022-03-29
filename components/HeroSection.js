import Header from "./Header";
import { BsArrowDown } from "react-icons/bs";
import HeroGraphics from "./graphics/hero_graphics";
import TypewriterComponent from "typewriter-effect";
const HeroSection = () => {
  return (
    <div className="h-screen bg-cover bg-none bg-no-repeat md:bg-[url('/bg_circle.svg')]">
      <Header />
      <div className="h-full text-center flex flex-col-reverse md:flex-row justify-center md:justify-evenly items-center font-poppins text-black sm:text-xl md:text-2xl lg:text-4xl">
        <div className="h-fit pt-12 md:pt-0">
          <div>
            Hello, I'm{" "}
            <span className="text-primary font-semibold">Muhammad Hassan</span>.
          </div>
          <div>I'm a MERN-stack developer.</div>
          <div className="font-normal sm:text-lg md:text-xl lg:text-2xl mt-5 text-darkBlack">
            <TypewriterComponent
              options={{
                strings: [
                  "React JS",
                  "Next JS",
                  "Node JS",
                  "MongoDB",
                  "Express JS",
                  "Nest JS",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="mt-10 sm:text-lg md:text-xl lg:text-2xl font-normal flex justify-center items-center text-primary">
            <span className="mr-0 animate-bounce">
              <BsArrowDown size={20} />
            </span>
            <div className="w-fit cursor-pointer flex items-center before:transition-all before:ease-in-out before:delay-150 relative before:content-[''] before:absolute before:left-0 before:right-full before:bottom-0 hover:before:right-0 before:border-b-2 before:border-black">
              <span>Skills</span>
            </div>
            {/* <button className="bg-primary hover:bg-white hover:text-primary text-white px-5 py-2 border-primary border-2 rounded-md shadow-md hover:shadow shadow-primary">
              Skills
            </button> */}
          </div>
        </div>
        <div className="w-40 md:w-50 lg:w-80 opacity-90">
          {/* <img
            src="/hero_graphics.svg"
            className="w-40 md:w-50 lg:w-80 opacity-90"
          /> */}
          <HeroGraphics />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
