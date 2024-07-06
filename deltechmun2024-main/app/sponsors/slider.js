"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

const cards = [
  { img: "/img/sponsors/1.png", title: "" },
  { img: "/img/sponsors/2.png", title: "" },
  { img: "/img/sponsors/3.png", title: "" },
  { img: "/img/sponsors/4.png", title: "" },
  { img: "/img/sponsors/5.png", title: "" },
  { img: "/img/sponsors/6.png", title: "" },
  { img: "/img/sponsors/7.png", title: "" },
  { img: "/img/sponsors/8.png", title: "" },
  { img: "/img/sponsors/9.png", title: "" },
  { img: "/img/sponsors/10.png", title: "" },
  { img: "/img/sponsors/11.png", title: "" },
  { img: "/img/sponsors/12.png", title: "" },
  { img: "/img/sponsors/13.png", title: "" },
  { img: "/img/sponsors/14.png", title: "" },
  { img: "/img/sponsors/15.png", title: "" },
];

const Slider = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col mb-16">
        <div className="max-w-[100%] relative !mx-10">
          {/* Swiper container */}
          <Swiper
            modules={[FreeMode, Navigation, Pagination, Autoplay]}
            loop={true}
            pagination={{ clickable: true }}
            grabCursor={true}
            autoplay={{
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            }}
            freeMode={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              0: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              468: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              768: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              1024: {
                spaceBetween: 15,
                slidesPerView: 3,
              },
              1280: {
                spaceBetween: 15,
                slidesPerView: 4,
              },
            }}
          >
            {cards.map((card, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center">
                    <div
                      className="flex flex-col justify-center items-center my-20 relative text-white bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-150 border border-[#C5C5C5] shadow-md 
    hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] h-[200px] w-[400px] overflow-hidden cursor-pointer"
                    >
                      <Image
                        className="inset-0 !h-48 !w-auto p-5 m-auto"
                        fill
                        priority={true}
                        src={card.img}
                        alt="sponsor"
                      />

                      {/* <div className="relative flex flex-col gap-3">
                        <h1 className="text-xl text-center font-serif lg:text-5xl text-black pt-8">
                          {card?.title}
                        </h1>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-button-next m-5 bg-slate-500/40 p-8 rounded-full"></div>
          <div className="swiper-button-prev m-5 bg-slate-500/40 p-8 rounded-full"></div>
        </div>
      </div>
      {/* <div className="swiper-pagination pt-20"></div> */}
    </div>
  );
};

export default Slider;
