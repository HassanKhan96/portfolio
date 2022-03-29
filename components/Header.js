import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="columns-3 container mx-auto text-primary gap-8 flex justify-center md:justify-end p-5 absolute top-0 left-0 right-0">
      <BsTwitter size={25} />
      <BsLinkedin size={25} />
      <BsGithub size={25} />
    </div>
  );
};

export default Header;
