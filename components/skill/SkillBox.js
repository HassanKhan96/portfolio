import { SiReact, SiExpress, SiMongodb } from "react-icons/si";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';


const SkillBox = ({ icon = '', name = '', rating = 0 }) => {

    const renderStar = () => {
        rating /= 2;
        let stars = []
        for (let i = 1; i <= 5; i++) {
            if (rating === 0.5) {
                stars.push(<BsStarHalf key={i + Math.random()} size={16} />)
                rating -= 0.5
            }
            else if (rating > 0.5) {
                stars.push(<BsStarFill key={i + Math.random()} size={16} />)
                rating--
            }
            else {
                stars.push(<BsStar key={i + Math.random()} size={16} />)
            }
        }
        return stars
    }

    return <div className="w-28 h-[9rem] flex flex-col bg-primary shadow-[-2px_2px_2px_-2px_rgba(0,0,0)] relative 
    before:content-[''] before:absolute before:w-0 before:h-0 before:top-0 before:right-0 before:border-r-[2.3rem] before:border-r-bgColor before:border-b-[2.3rem] before:border-b-primary before:shadow-[-2px_2px_4px_-2px_rgba(77,77,138,0.9)]">
        <div className="text-white mt-3 ml-2">
            {icon}
        </div>
        <div className="flex-auto flex flex-col">
            <div className="text-white flex-auto flex justify-start items-end pb-3 flex-wrap pl-2">{name}</div>
            <div className="text-primaryDark flex flex-wrap gap-[4px] mb-5 justify-center">
                {
                    renderStar()
                    // [...Array(5)].map((star, i) => {
                    //     if ((i + 1) <= fullStar) {
                    //         return <BsStarFill key={i + Math.random()} size={16} />
                    //     }
                    //     else if ((i + 1) > fullStar && halfStar !== 0) {
                    //         return <BsStarHalf key={i + Math.random()} size={16} />
                    //     }
                    //     else {
                    //         return <BsStar key={i + Math.random()} size={16} />
                    //     }
                    // })
                }
            </div>
        </div>
    </div>
}

export default SkillBox;