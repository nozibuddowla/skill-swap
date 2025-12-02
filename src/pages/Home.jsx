import React from "react";
import Slider from "../component/Slider";
import PopularSkills from "../component/PopularSkills";
import Providers from "../component/Providers";
import HowItWorks from "../component/HowItWorks";
import Testimonial from "../component/Testimonial";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <Slider></Slider>
      <PopularSkills></PopularSkills>
      <Providers></Providers>
      <HowItWorks></HowItWorks>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
