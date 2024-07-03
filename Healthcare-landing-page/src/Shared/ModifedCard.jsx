import { IoIosArrowRoundForward } from "react-icons/io";

export const ModifedCard = ({image, title, description}) => {
  return (
    <div>
        <img src={image} alt="" className="rounded-3xl w-full"/>
            <div className='h-36 md:w-96 rounded-3xl bg-[#343268] bg-opacity-80 px-8 py-3 space-y-2 absolute md:right-1/3 bottom-3'>
                <h1 className='text-2xl font-medium text-white'>{title}</h1>
                <p className='text-gray-400 pr-6'>{description}</p>
                <div className="flex justify-end relative bottom-7">
                <IoIosArrowRoundForward className="-rotate-45 text-xl size-7 bg-[#FFC637] text-white rounded-full"/>
                </div>
            </div>
    </div>
  )
}
