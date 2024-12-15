import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="duration-500 dark:bg-slate-800  dark:text-white">
      <header>
        <Navbar></Navbar>
      </header>

      <main className="min-h-[44vh]">
        <Outlet></Outlet>
      </main>

      <footer className="bg-[#f9f9f9] dark:bg-slate-700">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
