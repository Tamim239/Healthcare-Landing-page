import { IoArrowUpOutline } from "react-icons/io5";
import offerBanner from "../../assets/Rectangle 32.png";
import logoWhite from '../../assets/logo light.png'

export const OfferBanner = () => {
  return (
    <div
      style={{
        borderRadius: "32px",
        backgroundImage: `radial-gradient(648.07% 142.88% at 98.23% 78.35%, #020043 0%, rgba(2, 0, 67, 0.30) 100%), url('${offerBanner}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"contain",
      }}
      className="my-8 w-full h-[500px]"
    >
        <div className="flex  justify-end">
        <img src={logoWhite} alt="" className="relative top-12 right-12"/>
        </div>
      <div className=" flex flex-col justify-center pt-32 md:py-32 md:px-20 px-5">
      <h1 className="text-4xl font-medium text-white leading-snug">Get Your <br /> First Appointment <br /> at 50% Off!</h1>
      <div className="flex gap-1 sm:gap-4 mt-5">
        <a
          className=" flex items-center gap-1 max-sm:justify-center bg-[#ffc637] rounded-xl px-5 py-2.5 font-medium  shadow"
          href="#"
        >
          Appointment <IoArrowUpOutline className="rotate-45 text-xl" />
        </a>
        <a
          className=" flex items-center gap-1 max-sm:justify-center border border-white text-white rounded-xl px-5 py-2.5 font-medium  shadow"
          href="#"
        >
          Learn more <IoArrowUpOutline className="rotate-45 text-xl" />
        </a>
      </div>
      </div>
    </div>
  );
};
