import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared/Navbar";
import { Footer } from "../Shared/Footer";

export const MainLayout = () => {
  return (
    <div className="w-4/5 mx-auto">
      {/* navbar */}
      <Navbar />
      <div>
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};
