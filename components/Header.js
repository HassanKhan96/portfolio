import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="columns-3 container mx-auto text-primary gap-8 flex justify-center md:justify-end p-5 absolute top-0 left-0 right-0">
      <BsTwitter size={25} />
      <BsLinkedin
        size={25}
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/muhammad-hassan-khan-6b964a210/",
            "_blank"
          );
        }}
      />
      <BsGithub
        size={25}
        onClick={() => {
          window.open("https://github.com/HassanKhan96", "_blank");
        }}
      />
    </div>
  );
};

export default Header;
