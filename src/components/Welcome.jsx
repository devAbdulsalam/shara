import React from "react";
import TestiImage3 from "../assets/Inbox cleanup-rafiki.svg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <header class="fixed w-full">
        <nav class=" border-gray-200 py-2.5">
          <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"></div>
        </nav>
      </header>
      <section class="p-3">
        <div class="grid max-w-screen-xl px-4 pt-20 mx-3 lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12 lg:pt-28">
          <div class="lg:mt-0 lg:col-span-5 lg:flex">
            <img src={TestiImage3} alt="hero" />
          </div>
          <div class="mr-auto place-self-center lg:col-span-7 md:text-left text-center">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-[#16a34a] xl:text-6xl dark:text-[#16a34a]">
              A Clean and Wealth City for All
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              maxime.
            </p>
            <div class="space-y-4 sm:flex md:justify-start justify-center sm:space-y-0 sm:space-x-4 py-3">
              <Link
                to="/home"
                class="button bg-white px-10 py-2 rounded-lg text-green-500 font-semibold"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
