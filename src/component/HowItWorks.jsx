import React from "react";
import MyContainer from "./MyContainer";
import { MdSurroundSound } from "react-icons/md";
import {
  FaArrowRight,
  FaArrowTrendUp,
  FaRegClock,
  FaRegUser,
} from "react-icons/fa6";
import { BsBook } from "react-icons/bs";

const HowItWorks = () => {
  const steps = [
    {
      number: "STEP ONE",
      title: "Create Your Profile",
      subtitle: "Easy Debiturn!",
      icon: <FaRegUser size={44} className="text-indigo-600" />,
      animation: "fadeInUp",
      delay: 200,
    },
    {
      number: "STEP TWO",
      title: "Choose Skills",
      subtitle: "Super Fast!",
      icon: <FaRegClock size={44} className="text-indigo-600" />,
      animation: "fadeInUp",
      delay: 500,
    },
    {
      number: "STEP THREE",
      title: "Learn & Teach",
      subtitle: "Smahhhrt!",
      icon: <BsBook size={44} className="text-indigo-600" />,
      animation: "fadeInUp",
      delay: 800,
    },
    {
      number: "STEP FOUR",
      title: "Grow Together",
      subtitle: "Easy Process!",
      icon: <FaArrowTrendUp size={44} className="text-indigo-600" />,
      animation: "fadeInUp",
      delay: 1100,
    },
  ];

  return (
    <div className="py-8 lg:py-16 px-4 bg-linear-to-b from-gray-50 to-white">
      <MyContainer>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <div className="w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full">
              <MdSurroundSound
                size={16}
                className="text-gray-600 animate-pulse"
              />
            </div>

            <span className="font-medium text-gray-700 uppercase tracking-wide">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight max-w-4xl mx-auto px-2">
            Start In Four Steps And Grow With
          </h2>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight max-w-4xl mx-auto px-2">
            Local Skill-Sharing Community.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-1">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex-1 min-w-0">
                <div
                  className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full
                    animate__animated animate__${step.animation}`}
                  style={{ animationDelay: `${step.delay}ms` }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                    style={{
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 30px rgba(15,23,42,0.03)",
                    }}
                  />

                  <div className="relative z-10">
                    <p className="font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      {step.number}
                    </p>

                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5">
                      {step.title}
                    </h3>

                    <div className="mx-auto mb-6 flex items-center justify-center w-full h-40 md:h-44 rounded-xl bg-gray-50">
                      <div className="transform transition-transform duration-300 group-hover:scale-105">
                        {step.icon}
                      </div>
                    </div>

                    <p className="text-gray-600 text-center">{step.subtitle}</p>
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div
                  className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm -mx-3 z-20"
                  style={{ animationDelay: `${step.delay + 300}ms` }}
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100">
                    <FaArrowRight className="text-indigo-600" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default HowItWorks;
