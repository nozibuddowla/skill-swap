import React, { useEffect, useRef, useState } from "react";
import MyContainer from "./MyContainer";
import PopularSkillCard from "./PopularSkillCard";
import SkillErrorPage from "./SkillErrorPage";
import useSkills from "../hooks/useSkills";
import SkeletonLoader from "./SkeletonLoader";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularSkills = () => {
  const { skills, loading, error } = useSkills();
  const aosInitialized = useRef(false);

  // Initialize AOS
  useEffect(() => {
    if (!aosInitialized.current) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 200,
        easing: "ease-in-out-back",
        disable: window.innerWidth < 768,
      });
      aosInitialized.current = true;
    }
  }, []);

  // Refresh AOS on skills load
  useEffect(() => {
    if (!loading && skills.length > 0) {
      requestAnimationFrame(() => {
        AOS.refresh();
      })
    }
  }, [loading, skills.length]);

  if (error) {
    return (
      <SkillErrorPage>
        {`An error occurred while fetching skill details: ${error.message}`}
      </SkillErrorPage>
    );
  }

  const popularSkills = skills.slice(0, 6);

  //   console.log(skills);

  return (
    <div className="py-8 px-7 sm:px-14 md:px-20 lg:px-[110px] xl:px-[130px] 2xl:px-[145px] ">
      <MyContainer>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-6">
          Popular Skills
        </h2>

        <p className="text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-8">
          Browse top-rated local skill providers — from music & languages to
          coding and fitness. Filter, view details, and book a slot.
        </p>

        <div>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularSkills.map((skill, index) => (
                <div
                  key={skill.skillId}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={index * 100}
                >
                  <PopularSkillCard skill={skill} />
                </div>
              ))}
            </div>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default PopularSkills;
