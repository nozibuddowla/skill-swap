import React from "react";
import Slider from "../component/Slider";
import PopularSkills from "../component/PopularSkills";
import Providers from "../component/Providers";
import HowItWorks from "../component/HowItWorks";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <Slider></Slider>
      <PopularSkills></PopularSkills>
          <Providers></Providers>
          <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
