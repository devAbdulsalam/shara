import React from "react";
import Navbar from "./Navbar";

const ANotification = () => {
  return (
    <div>
      <Navbar />
      <>
        <div className="bg-white absolute my-10 top-0 left-0 h-screen overflow-scroll side-menu sm:w-[60%] md:w-[40%] text-green-400 py-7 px-4 shadow-xl z-[20]">
          <div className="flex justify-end items-center cursor-pointer">
            {/* <i
              className="fa-solid fa-xmark close fixed"
              onclick="closeMenu()"
            ></i> */}
          </div>
          <ul className="space-y-3">
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-green-200 text-green-700">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-green-300">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </>
    </div>
  );
};

export default ANotification;
