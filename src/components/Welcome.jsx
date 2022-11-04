import React from "react";
import Logo from "../assets/logo.png";
import TestiImage3 from "../assets/Inbox cleanup-rafiki.svg";
import TestiImage1 from "../assets/Inbox cleanup-pana.svg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const Welcome = () => {
  return (
    <div>
      <header class="fixed w-full">
        <nav class=" border-gray-200 py-2.5">
          {/* <div className="flex items-center justify-center w-full h-5 mt-16">
              <img className="w-32 mt-8" src={Logo} alt="" />
          </div> */}
        </nav>
      </header>
      {/* <Swiper
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
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
      <section className="mySwiper p-3">
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
          modules={[Autoplay]}
          className="mySwiper p-3 grid max-w-screen-xl px-5 mx-3 lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12 lg:pt-28"
        >
          <SwiperSlide className="">
            <div class="lg:mt-0 lg:col-span-5 lg:flex flex justify-center md:mt-5 py-8">
              <img src={Logo} className="w-64" alt="hero" />
            </div>
            <div class="mr-auto place-self-center lg:col-span-7 md:text-left text-center mt-10">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-[#228e01] xl:text-6xl dark:text-[#228e01]">
              A Clean, Healthy and Wealthy City for All
            </h1>
              <p className="max-w-2xl mb-6 mt-1 font-light text-gray-700 lg:mb-8 text-sm dark:text-gray-600">
                Together we can make waste removal easy and effortless, for a
                cleaner and better planet.
              </p>
              <div class="space-y-4 sm:flex md:justify-start justify-center sm:space-y-0 sm:space-x-4 py-1">
                <Link
                  to="/home"
                  class="button bg-white px-10 py-2 rounded-lg text-green-500 font-semibold"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="lg:mt-0 lg:col-span-5 lg:flex">
              <img src={TestiImage3} alt="hero" />
            </div>
            <div class="mr-auto place-self-center lg:col-span-7 md:text-left text-center">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-[#228e01] xl:text-6xl dark:text-[#228e01]">
                A Clean, Healthy and Wealthy City for All
              </h1>
              <p className="max-w-2xl mb-6 mt-1 font-light text-gray-700 lg:mb-8 text-sm dark:text-gray-600">
                Together we can make waste removal easy and effortless, for a
                cleaner and better planet.
              </p>
              <div class="space-y-4 sm:flex md:justify-start justify-center sm:space-y-0 sm:space-x-4 py-1">
                <Link
                  to="/home"
                  class="button bg-white px-10 py-2 rounded-lg text-green-500 font-semibold"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div class="lg:mt-0 lg:col-span-5 lg:flex">
              <img src={TestiImage1} alt="hero" />
            </div>
            <div class="mr-auto place-self-center lg:col-span-7 md:text-left text-center">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-[#228e01] xl:text-6xl dark:text-[#228e01]">
                A Clean, Healthy and Wealthy City for All
              </h1>
              <p className="max-w-2xl mb-6 mt-1 font-light text-gray-700 lg:mb-8 text-sm dark:text-gray-600">
                Together we can make waste removal easy and effortless, for a
                cleaner and better planet.
              </p>
              <div class="space-y-4 sm:flex md:justify-start justify-center sm:space-y-0 sm:space-x-4 py-1">
                <Link
                  to="/home"
                  class="button bg-white px-10 py-2 rounded-lg text-green-500 font-semibold"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Welcome;
