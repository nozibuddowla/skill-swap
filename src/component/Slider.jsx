import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../assets/slider1-skill-sharing.jpg";
import slider2 from "../assets/slider2-music-learning.jpg";
import slider3 from "../assets/slider3-language-practice.jpg";
import slider4 from "../assets/slider4-fitness-and-home-workout-guidance.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Keyboard, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, Keyboard]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // pause when the mouse is over the slider
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        aria-live="polite"
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={slider1}
            className="w-full h-[300px] md:h-[420px] lg:h-[500px] object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            className="w-full h-[300px] md:h-[420px] lg:h-[500px] object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider3}
            className="w-full h-[300px] md:h-[420px] lg:h-[500px] object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider4}
            className="w-full h-[300px] md:h-[420px] lg:h-[500px] object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
