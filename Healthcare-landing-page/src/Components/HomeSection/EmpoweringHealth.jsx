import { IoArrowUpOutline } from "react-icons/io5";
import image1 from "../../assets/Rectangle 27-2.png";
import image2 from "../../assets/Rectangle 27-1.png";
import image3 from "../../assets/Rectangle 27.png";
import { ModifedCard } from "../../Shared/ModifedCard";

export const EmpoweringHealth = () => {
  return (
    <div className="bg-[#FFFFF5] rounded-3xl md:my-28">
      <div>
        <div className="bg-[#FBFBFB] flex max-sm:flex-col justify-between items-center gap-6 my-6">
          {/* left side */}
          <div className="md:w-1/2 space-y-4">
            <div className="border border-[#343268] rounded-full inline-block py-2 px-4 ">
              <p>Service</p>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold">
                Empowering Health, <br /> Enriching Lives
              </h1>
              <p className="text-balance">
                We are committed to providing high-quality, compassionate care
                to every patient we serve. Whatever your healthcare needs may
                be, you can trust us to be your partner in health and wellness.
              </p>

              <div className="sm:flex sm:gap-4">
                <a
                  className=" flex items-center gap-1 max-sm:justify-center bg-[#ffc637] rounded-xl px-5 py-2.5 font-medium  shadow"
                  href="#"
                >
                  Appointment <IoArrowUpOutline className="rotate-45 text-xl" />
                </a>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="md:w-1/2 relative">
            {/* <img src={image1} alt="" className="rounded-3xl"/>
            <div className='h-36 w-96 rounded-3xl bg-[#343268] bg-opacity-80 px-8 py-3 space-y-2 absolute right-1/3 bottom-3 '>
                <h1 className='text-2xl font-medium text-white'>Advanced Technology</h1>
                <p className='text-gray-400 pr-6'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                <div className="flex justify-end relative bottom-7">
                <IoIosArrowRoundForward className="-rotate-45 text-xl size-7 bg-[#FFC637] text-white rounded-full"/>
                </div>
            </div> */}
            <ModifedCard
              image={image1}
              title={"Advanced Technology"}
              description={
                "Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
              }
            />
          </div>
        </div>
      </div>
      <div className="flex max-sm:flex-col justify-between items-center gap-6">
        <div className="md:w-1/2 relative">
            <ModifedCard image={image2} title={"Online Doctor Meet"} description={
                "Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
              }/>
        </div>
        <div className="md:w-1/2 relative">
            <ModifedCard  image={image3} title={"Consultancy your health"} description={
                "Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
              }/>
        </div>
      </div>
    </div>
  );
};
