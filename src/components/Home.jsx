import React from "react";
import TestiImage4 from "../assets/Hello-rafiki.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-serif">
      <header className="fixed w-full">
        <nav className="border-gray-200 py-2.5">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <div className="flex items-center justify-center w-full h-5 mt-3">
              <h1 className="text-xl text-green-700">Treasured Trash</h1>
            </div>
          </div>
        </nav>
      </header>
      <section className="p-5 py-8 w-full">
        <div className="grid max-w-screen-xl px-4 pt-12 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12 lg:pt-14">
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src={TestiImage4} alt="hero" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7 md:text-left text-center">
            <Link
              to="/signin"
              className="flex bg-green-500 items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-green-600"
            >
              <div className="py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="#FFF"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>

              <h1 className="py-3 w-5/6 text-center text-gray-50 font-bold">
                Sign In
              </h1>
            </Link>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="./login"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <Link
              to="/login"
              className="flex bg-green-500 items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-green-600"
            >
              <div className="py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 512 512"
                  fill="#FFF"
                >
                  <path d="M352 96h64c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96H352c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-7.5 177.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H160v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" />
                </svg>
              </div>
              <h1 className="py-3 w-5/6 text-center text-gray-50 font-bold">
                Login
              </h1>
            </Link>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xs lg:text-sm dark:text-gray-400">
              Together we can make waste removal easy and effortless,<br/> for a cleaner and better planet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
