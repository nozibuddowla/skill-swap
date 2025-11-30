import React, { useEffect, useState } from "react";
import MyContainer from "../component/MyContainer";
import PopularSkillCard from "../component/PopularSkillCard";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("./skill-listing-data.json")
      .then((res) => res.json())
      .then((data) => setSkills(data || []))
      .catch((err) => {
        console.error("Failed loading skills:", err);
        setSkills([]);
      });
  }, []);
  return (
    <div className="px-10 sm:px-16 md:px-20 lg:px-28 xl:px-32 py-12">
      <title>Skills</title>
      <MyContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.length === 0
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-base-100 h-80 rounded-lg"
                />
              ))
            : skills.map((skill) => (
                <PopularSkillCard key={skill.skillId} skill={skill} />
              ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default Skills;
