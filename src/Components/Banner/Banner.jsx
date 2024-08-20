// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
        className="mySwiper w-11/12 lg:w-full mx-auto"
      >
        <SwiperSlide>
          <div>
            <img
              src="https://www.shutterstock.com/image-photo/happy-woman-during-successful-psychotherapy-600nw-2044804919.jpg"
              alt=""
              className="min-h-screen"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20220603/pngtree-happy-teacher-holding-page-showing-counselling-courses-classroom-mental-health-career-photo-image_13798634.jpg"
            alt=""
            className="min-h-screen"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
