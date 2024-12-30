import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div className="duration-500 dark:bg-[#010313]  dark:text-white">
      <header>
        <Navbar></Navbar>
      </header>

      <main className="min-h-[45vh]">
        <Outlet></Outlet>
      </main>

      <footer className="bg-[#f9f9f9] dark:bg-[#0a1020]">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
