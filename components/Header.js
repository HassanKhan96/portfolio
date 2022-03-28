import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="container mx-auto lg:pl-[10rem] lg:pr-[10rem] p-5 flex items-center sm:justify-center md:justify-between lg:justify-between">
      <img src="/signature.svg" width="100" height="50" />

      <div className="ml-[6rem] text-[#007560] columns-3 gap-5">
        <BsTwitter size={25} />
        <BsLinkedin size={25} />
        <BsGithub size={25} />
      </div>
    </div>
  );
};

export default Header;
