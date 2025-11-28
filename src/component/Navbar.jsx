import MyContainer from "./MyContainer";
import skillSwapLogo from "../assets/skill-swap-icon.png";
import { Link } from "react-router";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainer className="flex items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <MyLink to="/">Home</MyLink>
              </li>
              <li>
                <MyLink to="/profile">My Profile</MyLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2.5">
            <figure>
              <img src={skillSwapLogo} className="w-10" />
            </figure>
            <span className="text-xl font-bold">SkillSwap</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <MyLink to="/">Home</MyLink>
            </li>
            <li>
              <MyLink to="/profile">My Profile</MyLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <button className="btn btn-outline btn-error btn-sm hidden lg:flex">
            Logout
          </button>
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost btn-sm hidden lg:flex">
              Login
            </button>
            <Link
              to="/signup"
              className="btn btn-primary btn-sm hidden lg:flex"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
