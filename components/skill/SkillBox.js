import { SiReact, SiExpress, SiMongodb } from "react-icons/si";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';


const SkillBox = ({ icon = '', name = '', rating = 0 }) => {
    let fullStar = rating / 2;
    let halfStar = rating % 2;

    return <div className="w-32 h-40 md:w-36 md:h-44 flex flex-col justify-center items-center bg-primary border-0 p-0 relative before:content-[''] before:absolute before:w-0 before:h-0 before:top-0 before:right-0 before:border-r-[2rem] before:border-r-bgColor before:border-b-[2rem] before:border-b-primaryDark before:shadow-[-1px_2px_2px_-5px_rgba(0,0,0)]">
        <div className="text-white">
            {icon}
        </div>
        <div className="text-white text-xl">{name}</div>
        <div className="text-primaryDark flex mt-3">
            {
                [...Array(5)].map((star, i) => {
                    if ((i + 1) <= fullStar) {
                        return <BsStarFill key={i + Math.random()} size={20} />
                    }
                    else if ((i + 1) > fullStar && halfStar !== 0) {
                        return <BsStarHalf key={i + Math.random()} size={20} />
                    }
                    else {
                        return <BsStar key={i + Math.random()} size={20} />
                    }
                })
            }
        </div>
    </div>
}

export default SkillBox;