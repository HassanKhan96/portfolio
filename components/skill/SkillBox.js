import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const SkillBox = ({ icon = "", name = "", rating = 0 }) => {
  const renderStar = () => {
    rating /= 2;
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating === 0.5) {
        stars.push(<BsStarHalf key={i + Math.random()} className="w-3" />);
        rating -= 0.5;
      } else if (rating > 0.5) {
        stars.push(<BsStarFill key={i + Math.random()} className="w-3" />);
        rating--;
      } else {
        stars.push(<BsStar key={i + Math.random()} className="w-3" />);
      }
    }
    return stars;
  };

  return (
    <div
      className="w-24 h-[7.7rem] flex flex-col bg-primary shadow-[-2px_2px_2px_-2px_rgba(0,0,0)] relative 
    before:content-[''] before:absolute before:w-0 before:h-0 before:top-0 before:right-0 before:border-r-[1.7rem] before:border-b-[1.7rem] before:border-r-bgColor before:border-b-primary before:shadow-[-2px_2px_4px_-2px_rgba(77,77,138,0.9)]"
    >
      <div className="text-white mt-3 ml-2">{icon}</div>
      <div className="flex-auto flex flex-col">
        <div className="text-white flex-auto text-[14px] flex ml-[5px] mb-[5px] items-end flex-wrap">
          {name}
        </div>
        <div className="text-white mb-auto justify-center">
          <span className="flex flex-wrap gap-[4px] mb-3 justify-center">
            {renderStar()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
