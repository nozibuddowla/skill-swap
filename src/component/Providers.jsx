import React, { useEffect, useState } from "react";
import MyContainer from "./MyContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProviderCard from "./ProviderCard";

const Providers = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("./providers.json")
      .then((res) => res.json())
      .then((data) => setProviders(data || []))
      .catch((err) => {
        console.error("Failed loading skills:", err);
        setProviders([]);
      });
  }, []);

  return (
    <div className="py-8 px-7 sm:px-14 md:px-20 lg:px-[110px] xl:px-[130px] 2xl:px-[145px]">
      <MyContainer>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-6">
          Top Rated Providers
        </h2>
        <div className="py-5">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            grabCursor={true}
            slidesPerView={3}
            loop={providers.length > 3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {providers.map((provider) => (
              <SwiperSlide key={provider.providerId}>
                <ProviderCard provider={provider}></ProviderCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MyContainer>
    </div>
  );
};

export default Providers;
