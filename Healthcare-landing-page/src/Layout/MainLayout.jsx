import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared/Navbar";
import { Footer } from "../Shared/Footer";

export const MainLayout = () => {
  return (
    <div className=" max-sm:px-2 md:w-4/5 mx-auto">
      {/* navbar */}
      <Navbar />
      <div className="text-[#020043]">
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};
