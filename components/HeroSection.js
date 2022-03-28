const HeroSection = () => {
  return (
    <div className="container mx-auto mt-[5rem]">
      <div className="grid md:grid-cols-3">
        <div className="flex justify-center items-center">
          <img
            src="/avatar.jpeg"
            className="rounded-full object-cover w-[15rem] h-[15rem]"
          />
        </div>
        <div className="md:col-span-2 p-5 flex justify-center items-center lg:justify-start  font-sans text-[#2F4858] lg:text-4xl text-xl">
          <div className="h-fit">
            <div>
              Hello, I'm{" "}
              <span className="text-[#007560] font-semibold">
                Muhammad Hassan
              </span>
              .
            </div>
            <div>I'm a MERN-stack developer.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
