import React from "react";
import { NavLink } from "react-router";

const SkillErrorPage = ({ children }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="max-w-2xl w-full flex flex-col justify-center items-center space-y-8 py-10">
        <div className="max-w-2xl w-full flex flex-col justify-center items-center space-y-8">
          <p className="text-xl sm:text-lg text-[#627382] text-center">
            {children
              ? children
              : "The app you are looking for does not exist or has been moved."}
          </p>

          <NavLink
            to="/skills"
            className="btn bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] text-white"
          >
            Go to Skills!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SkillErrorPage;
