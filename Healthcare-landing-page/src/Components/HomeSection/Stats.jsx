import statsPic from "../../assets/Group 12.png";
import VideoPic from "../../assets/Group (1).png";
import contract from "../../assets/contract (1) 1.png";
import money from "../../assets/Group.png";

export const Stats = () => {
  return (
    <div className="flex gap-5 max-sm:flex-col">
      <div className=" md:w-1/5">
        <div className=" md:h-[300px] border-2 border-[#02004333] bg-[#FBFBFB] rounded-3xl px-8 py-4 space-y-3">
          <h3 className="text-4xl font-semibold">90%</h3>
          <p className="">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <img src={statsPic} alt="" className="h-28" />
        </div>
      </div>
      <div className="md:w-4/5">
        <div>
          <div>
            <h1 className=" text-3xl max-sm:mb-4 md:text-5xl font-semibold text-center md:px-20">
              Comprehensive Care for Every Patient
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-sm:gap-4 md:gap-7">
            <div className="border-2 a border-[#02004333] bg-orange-50 rounded-3xl px-8 py-1 space-y-3">
              <h3 className="text-4xl font-semibold">500+</h3>
              <p className="">Board-certified doctors</p>
              <div className="flex justify-end">
                <img src={contract} alt="" className="" />
              </div>
            </div>
            <div className="md:h-44 md:mt-7 border-2 border-[#02004333] bg-[#FBFBFB] rounded-3xl px-8 py-1 space-y-3">
              <h3 className="text-4xl font-semibold">4.8</h3>
              <p className="">Over 20,000 Patient</p>
              <div className="flex justify-end">
                <img src={contract} alt="" className="" />
              </div>
            </div>
            <div className="border-2 border-[#02004333] bg-orange-50 rounded-3xl px-8 py-1 space-y-3">
              <h3 className="text-4xl font-semibold">$5000</h3>
              <p className="">Money spend for poor patient</p>
              <div className="flex justify-end">
                <img src={money} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/5 ">
        <div className="md:h-[300px] border-2 border-[#02004333] bg-[#FBFBFB] rounded-3xl px-8 py-4 space-y-3 flex flex-col">
          <h3 className="text-4xl font-semibold">50+</h3>
          <p className="">Free lession video for patient</p>
          <img src={VideoPic} alt="" className="flex-grow" />
        </div>
      </div>
    </div>
  );
};
