import React, { useState, useRef, useEffect } from "react";
import MyContainer from "./MyContainer";
import skillSwapLogo from "../assets/skill-swap-icon.png";
import { Link } from "react-router";
import MyLink from "./MyLink";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <MyContainer className="flex items-center justify-between">
        <div className="navbar-start flex items-center gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <figure>
              <img src={skillSwapLogo} alt="SkillSwap" className="w-10" />
            </figure>
            <span className="text-xl font-bold">SkillSwap</span>
          </Link>
        </div>

        {/* Desktop links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <MyLink to="/">Home</MyLink>
            </li>
            <li>
              <MyLink to="/skills">Skills</MyLink>
            </li>
            <li>
              <MyLink to="/profile">My Profile</MyLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2">
          <div className="lg:hidden relative" ref={menuRef}>
            <button
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="btn btn-ghost p-2"
            >
              {open ? (
                <FaRegWindowClose size={24} />
              ) : (
                <CgMenuGridR size={24}></CgMenuGridR>
              )}
            </button>

            {/* Dropdown menu */}
            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 p-3">
                <ul className="space-y-2">
                  <li>
                    <MyLink to="/" onClick={() => setOpen(false)}>
                      Home
                    </MyLink>
                  </li>
                  <li>
                    <MyLink to="/skills" onClick={() => setOpen(false)}>
                      Skills
                    </MyLink>
                  </li>
                  <li>
                    <MyLink to="/profile" onClick={() => setOpen(false)}>
                      My Profile
                    </MyLink>
                  </li>
                </ul>
                <div className="mt-3">
                  <Link
                    to="/signup"
                    className="btn btn-primary btn-sm w-full"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>

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
