import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import ContextAPI from "../Auth/ContextAPI";

const Navbar = () => {
  // useContext
  const { users, logout } = useContext(ContextAPI);

  // handleSignOut
  const handleSignOut = () => {
    logout()
      .then(() => {
        toast.success("Sign Out Successfully");
      })
      .catch((error) => toast.error(error.message));
  };



  const links = (
    <>
      <li className="text-lg font-bold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink to={"/route2"}>Route2</NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink to={"/route3"}>Route3</NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink to={"/route4"}>Route4</NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink to={"/route5"}>Route5</NavLink>
      </li>

      {users?.email ? (
        ""
      ) : (
        <>
          <div className="divider divider-start sm:hidden m-0"></div>
          <li className="text-lg font-bold sm:hidden">
            <NavLink to={"/login"}>
              <span>Sign In</span>
            </NavLink>
          </li>
          <li className="text-lg font-bold sm:hidden">
            <NavLink to={"/register"}>
              <span>Sign Up</span>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar sm:w-11/12 mx-auto py-6 px-3">
        {/* start */}
        <div className="navbar-start">
          <Link to={"/"}>
            <h2 className="text-4xl font-bold">Logo</h2>
          </Link>
        </div>

        {/* center */}
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        {/* end */}
        <div className="navbar-end gap-2">
          

          {users?.email ? (
            <div className="relative rounded-full profilePhoto">
              <img
                src={`${users?.photoURL}`}
                alt="profile photo"
                className="h-12 w-12 rounded-[50%] cursor-pointer object-cover"
              />

              <ul className="border z-30 bg-white hidden absolute w-44 text-center -right-14 top-[98%] px-2 py-5 rounded-xl text-base font-bold space-y-3">
                <li className="px-3 border-b pb-4">{users?.displayName}</li>
                <li className="px-3">
                  <button
                    onClick={handleSignOut}
                    className="btn dark:bg-slate-700 dark:border-slate-700 dark:text-white text-lg font-bold min-w-28"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="sm:flex gap-2.5 hidden">
              <Link to={"/login"}>
                <button className="btn dark:bg-slate-700 dark:border-slate-700 dark:text-white text-lg font-bold min-w-28">
                  Sign In
                </button>
              </Link>

              <Link to={"/register"}>
                <button className="btn dark:bg-slate-700 dark:border-slate-700 dark:text-white text-lg font-bold min-w-28">
                  Sign Up
                </button>
              </Link>
            </div>
          )}

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="z-20 dark:bg-slate-700 right-2 py-4 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-2"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
