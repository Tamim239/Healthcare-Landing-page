import { NavLink } from "react-router-dom";
import logoDark from "../assets/logo dark.png";
import { IoArrowUpOutline } from "react-icons/io5";

export const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Service</NavLink>
      </li>
      <li>
        <NavLink to="/">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/">About Us</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white">
  <div className="">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <img src={logoDark} alt="" className=" w-20 md:h-8 md:w-28"/>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm text-black">
            {navLinks}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className=" flex items-center gap-1 border border-black rounded-xl px-5 py-2.5 text-sm font-medium text-black shadow"
            href="#"
          >
           Appointment <IoArrowUpOutline className="rotate-45 text-xl"/>
          </a>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
};
