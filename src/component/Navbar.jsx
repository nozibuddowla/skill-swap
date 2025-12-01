import React, { useState, useRef, useEffect, useContext } from "react";
import MyContainer from "./MyContainer";
import skillSwapLogo from "../assets/skill-swap-icon.png";
import { Link } from "react-router";
import MyLink from "./MyLink";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { user, logOut } = useContext(AuthContext);

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

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.info("Sign-out successful.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-8 h-8 rounded-full object-cover"
              />
              {/* Desktop logout */}
              <button
                onClick={handleSignOut}
                className="btn btn-outline btn-error btn-sm hidden lg:inline-flex"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login" className="btn btn-ghost btn-sm hidden lg:flex">
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-primary btn-sm hidden lg:flex"
              >
                Sign Up
              </Link>
            </div>
          )}

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
            <AnimatePresence>
              {open && (
                <motion.div
                  key="navbar-menu"
                  initial={{ opacity: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 p-3"
                >
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
                    <li>
                      {user ? (
                        <div className="mt-3">
                          <button
                            onClick={handleSignOut}
                            className="btn btn-outline btn-error btn-sm w-full"
                          >
                            Logout
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="mt-3">
                            <Link
                              to="/signup"
                              className="btn btn-primary btn-sm w-full"
                              onClick={() => setOpen(false)}
                            >
                              Sign Up
                            </Link>
                          </div>
                          <div className="mt-3">
                            <Link
                              to="/login"
                              className="btn btn-ghost btn-sm w-full"
                              onClick={() => setOpen(false)}
                            >
                              Login
                            </Link>
                          </div>
                        </>
                      )}
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
