import React from "react";
import { Link } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, EffectCards, EffectFade } from "swiper/modules";

import slider1 from "../assets/slider1-skill-sharing.jpg";
import slider2 from "../assets/slider2-music-learning.jpg";
import slider3 from "../assets/slider3-language-practice.jpg";
import slider4 from "../assets/slider4-fitness-and-home-workout-guidance.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    img: slider1,
    title: "Learn. Teach. Share.",
    subtitle:
      "Discover local tutors, join workshops, and trade skills with neighbors.",
    ctaText: "Browse Skills",
    ctaLink: "/browse-skills",
  },
  {
    id: 2,
    img: slider2,
    title: "Music Lessons for Everyone",
    subtitle:
      "From beginner guitar to advanced techniques — find your teacher nearby.",
    ctaText: "Find Music Tutors",
    ctaLink: "/categories/music",
  },
  {
    id: 3,
    img: slider3,
    title: "Practice Languages with Locals",
    subtitle:
      "Conversation partners, language exchanges, and friendly practice sessions.",
    ctaText: "Start Practicing",
    ctaLink: "/categories/language",
  },
  {
    id: 4,
    img: slider4,
    title: "Fitness & Wellness at Home",
    subtitle:
      "Guided workouts, yoga classes and personal coaching — no gym needed.",
    ctaText: "View Fitness Classes",
    ctaLink: "/categories/fitness",
  },
];

const Slider = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Autoplay, Keyboard, EffectFade]}
        rewind
        navigation
        effect="fade"
        slidesPerView="1"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        className="mySwiper"
        aria-live="polite"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img
                src={slide.img}
                alt={slide.title}
                loading="lazy"
                className="w-full h-[300px] md:h-[420px] lg:h-[560px] object-cover"
              />

              <div className="absolute inset-0 slider-overlay pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
                <div className="max-w-3xl text-center text-white">
                  <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md slide-text">
                    {slide.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-white/90 slide-text">
                    {slide.subtitle}
                  </p>

                  <div className="mt-6 slide-text translate-y-2.5 opacity-0 transition: all .6s ease-in-out">
                    <Link
                      to={slide.ctaLink}
                      className="inline-block bg-primary text-white px-5 py-2 rounded-full shadow hover:scale-105 transition-transform"
                    >
                      {slide.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
