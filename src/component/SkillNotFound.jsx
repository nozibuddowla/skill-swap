import React from "react";
import NotFound from "../assets/skill-Error.png";
import MyContainer from "./MyContainer";

const SkillNotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <MyContainer>
        <div className="flex flex-col justify-center items-center space-y-8">
          <figure>
            <img src={NotFound} alt="Skill Not Found" />
          </figure>
          {/* Error Message */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Oops, No Skills Found!
          </h2>
        </div>
      </MyContainer>
    </div>
  );
};

export default SkillNotFound;
