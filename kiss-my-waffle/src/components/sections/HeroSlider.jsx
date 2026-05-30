import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";

const slides = [hero1, hero2, hero3];

export default function HeroSlider() {
  return (
    <section
      id="hero-slider"
      className="w-full h-[85vh] bg-white"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[85vh] flex items-center justify-center bg-white">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="
                  w-full
                  h-full
                  object-contain
                "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}