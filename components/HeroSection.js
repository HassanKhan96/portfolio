const HeroSection = () => {
  return (
    <div className="w-screen h-screen bg-cover bg-none bg-no-repeat md:bg-[url('/bg_circle.svg')]" >
      <div className="h-full flex flex-col-reverse md:flex-row justify-center md:justify-evenly items-center font-poppins text-textColor lg:text-4xl text-2xl">
        <div className="h-fit pt-12 md:pt-0">
          <div>
            Hello, I'm{" "}
            <span className="text-primary font-semibold">
              Muhammad Hassan
            </span>
            .
          </div>
          <div>I'm a MERN-stack developer.</div>
        </div>
        <div>
          <img src="/hero_graphics.svg" className="w-60 lg:w-80 opacity-90" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
