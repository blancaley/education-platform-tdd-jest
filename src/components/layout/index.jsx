import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar";

const Layout = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <p class=" my-14 text-center text-xs text-gray-500">
        Developed by Blanca
      </p>
    </div>
  );
};

export { Layout };
