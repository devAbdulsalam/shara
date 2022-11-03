import React, { useState } from "react";
import Iframe from "react-iframe";
import Map from "../assets/map.png";

const MapContainer = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.750879136543!2d7.44110051487185!3d9.086444393481067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b87ac56b2c7%3A0xcc65ee493080d513!2sAhmadu%20Bello%20Way!5e0!3m2!1sen!2sng!4v1663838242429!5m2!1sen!2sng"
        width="100%"
        height="100%"
        id=""
        className=""
        display="block"
        position="relative"
      />
      <div className="rounded-3xl  bg-gray-200 p-1 w-full shadow-2xl shadow-inner:shadow-md bottom-0 fixed space-y-5 transition-all duration-50">
        <div className="mx-2 my-2 font-poppins">
            <div
              className="flex justify-between rounded-full bg-white mx-1 shadow-lg"
              onclick="openslideMenu()"
              id="menu"
            >
              <svg
                className="my-3 mx-2"
                width="25"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                  1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236
                    144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 
                    208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z 
                    "
                  fill="#34D186"
                />
              </svg>
              <input
                autoComplete="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border text-gray-700 font-bold border-transparent bg-transparent block w-full placeholder:text-gray-600 placeholder:text-sm focus:outline-transparent focus:border-transparent"
                type="text"
                id="search_input"
                placeholder="Location"
              />
            </div>
          <a href="#" className="block py-4">
            <div className="flex space-x-4">
              <div className="relative flex-shrink-0">
                <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-primary text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    fill="#fff"
                    className="w-7 h-7"
                    stroke="currentColor"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                  </svg>
                </span>
                <div className="absolute h-24 -mt-3 -ml-px bg-primary-50 left-1/2"></div>
              </div>
              <div className="flex-1 overflow-hidden">
                <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                  Kurna, Alasawa Road
                </h5>
                <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                  Looks like there might be a new theme soon
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="block py-1">
            <div className="flex space-x-4">
              <div className="relative flex-shrink-0">
                <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-primary text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    fill="#fff"
                    className="w-7 h-7"
                    stroke="currentColor"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                  </svg>
                </span>
                <div className="absolute h-24 -mt-3 -ml-px bg-primary-50 left-1/2"></div>
              </div>
              <div className="flex-1 overflow-hidden">
                <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                  Ahmadu Bello way, Kano
                </h5>
                <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                  Looks like there might be a new theme soon
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <img src={Map} className="w-full h-screen" alt="map" />
    </div>
  );
};

export default MapContainer;
