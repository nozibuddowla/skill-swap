import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MyContainer from "./MyContainer";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    quote:
      "Creative geniuses who listen, understand, and craft captivating visuals - a team that truly understands our needs.",
    name: "Gabrielle Williams",
    title: "CEO, ABC Company",
    avatar: "https://i.ibb.co.com/GvcYHDTj/Gabrielle-Williams.webp",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Exceeded our expectations with innovative lessons that brought our vision to life - a truly remarkable learning experience.",
    name: "Samantha Johnson",
    title: "Founder, LearnWell",
    avatar: "https://i.ibb.co.com/chMp6j6p/Samantha-Johnson.jpg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Their practical approach and friendly instructors gave me the confidence to actually perform in front of others.",
    name: "Isabella Rodriguez",
    title: "Artist",
    avatar: "https://i.ibb.co.com/Gv5fvkRz/Isabella-Rodriguez.jpg",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "From concept to execution, their classes gave me the tools to build a side income doing what I love.",
    name: "Natalie Martinez",
    title: "Freelancer",
    avatar: "https://i.ibb.co.com/6RVxYdbY/Natalie-Martinez.jpg",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "A refreshing and imaginative agency that consistently delivers exceptional results – highly recommended for any project.",
    name: "Victoria Thompson",
    title: "CEO and Co-founder of ABC Company",
    avatar: "https://i.ibb.co.com/d4D0rx19/Victoria-Thompson.webp",
    rating: 4.9,
  },
  {
    id: 6,
    quote:
      "Their team’s artistic flair and strategic approach resulted in stunning campaigns – a reliable creative partner.",
    name: "John Peter",
    title: "CEO and Co-founder of ABC Company",
    avatar: "https://i.ibb.co.com/CpZGy93s/John-Peter.jpg",
    rating: 4.6,
  },
];

const doubledTestimonials = [...testimonials, ...testimonials];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const constraintsRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index >= testimonials.length) {
      // Jump back without animation
      setTimeout(() => {
        setIndex(0);
      }, 300); // Match transition duration
    }
  }, [index]);

  return (
    <section className="py-16 lg:py-24 bg-linear-to-b from-white to-blue-50 overflow-hidden">
      <MyContainer className="px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm mb-6"
          >
            <span className="text-sm font-semibold text-blue-600 gap-2 flex items-center">
              <FaStar className="text-yellow-500" />{" "}
              <span>Rated 4.9 by over 1,400+ users</span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900"
          >
            Words of praise from others
            <br />
            <span className="text-blue-600">about our presence.</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden" ref={constraintsRef}>
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={constraintsRef}
            animate={{ x: -index * 384 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              ease: "linear",
            }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipeThreshold = 100;
              if (offset.x > swipeThreshold)
                setIndex((i) => Math.max(0, i - 1));
              else if (offset.x < -swipeThreshold) setIndex((i) => i + 1);
            }}
            style={{
              x: index >= testimonials.length ? -index * 384 : undefined,
            }}
          >
            {doubledTestimonials.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="flex-none w-full sm:w-80 md:w-96" // Adjust width here
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      <span className="text-6xl text-gray-200 font-bold leading-none">
                        “
                      </span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {t.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Optional Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default Testimonial;
