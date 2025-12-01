import React from "react";
import MyContainer from "./MyContainer";

const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div>
      <MyContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: count }).map((__, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-4 bg-base-100 shadow-sm"
            >
              <div className="skeleton h-56 w-full"></div>
              <div className="space-y-2 p-3">
                <div className="skeleton h-6 w-32"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-7 w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default SkeletonLoader;
