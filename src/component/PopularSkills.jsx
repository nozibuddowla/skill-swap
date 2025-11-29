import React, { useEffect, useState } from "react";
import MyContainer from "./MyContainer";
import PopularSkillCard from "./PopularSkillCard";

const PopularSkills = () => {
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

export default PopularSkills;
