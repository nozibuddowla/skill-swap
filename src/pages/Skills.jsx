import React, { useEffect, useState } from "react";
import MyContainer from "../component/MyContainer";
import PopularSkillCard from "../component/PopularSkillCard";
  import SkillNotFound from "../component/SkillNotFound";
import SkillErrorPage from "../component/SkillErrorPage";
import SkeletonLoader from "../component/SkeletonLoader";
import useSkills from "../hooks/useSkills";

const Skills = () => {
  const { skills, loading, error } = useSkills();

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
              {skills.map((skill) => (
                <PopularSkillCard key={skill.skillId} skill={skill} />
              ))}
            </div>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Skills;
