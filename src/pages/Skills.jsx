import React, { useEffect, useRef, useState } from "react";
import MyContainer from "../component/MyContainer";
import PopularSkillCard from "../component/PopularSkillCard";
import SkillErrorPage from "../component/SkillErrorPage";
import SkeletonLoader from "../component/SkeletonLoader";
import useSkills from "../hooks/useSkills";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
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
      });
    }
  }, [loading, skills.length]);

  if (error) {
    return (
      <SkillErrorPage>
        {`An error occurred while fetching skill details: ${error.message}`}
      </SkillErrorPage>
    );
  }

  return (
    <div className="px-10 sm:px-16 md:px-20 lg:px-28 xl:px-32 py-12">
      <title>Skills</title>
      <MyContainer>
        <div>
          {loading ? (
            <SkeletonLoader count={12} />
          ) : skills.length === 0 ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-base-100 h-80 rounded-lg"
              />
            ))
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
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

export default Skills;
