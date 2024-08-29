// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero from "../Hero/Hero";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen"
      >
        <SwiperSlide>
          <div className="min-h-screen max-h-screen min-w-full">
            <Hero img={img1}></Hero>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-screen max-h-screen min-w-full">
            <Hero img={img2}></Hero>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-screen max-h-screen min-w-full">
            <Hero img={img3}></Hero>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
