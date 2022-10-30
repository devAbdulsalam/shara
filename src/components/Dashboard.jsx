import React from "react";
// import UserImg from "../assets/pngwing.com (59).png";
import RecycleBin from "../assets/pngwing.com (76).png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Navbar from "./Navbar";


const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div class="z-[50] h-36 bg-transparent rounded-b-[30%] px-7">
        <Splide className="my-3 p-3 bg-white" aria-label="myimges">
          <SplideSlide>
            <img src={RecycleBin} alt="Img1" />
          </SplideSlide>
          <SplideSlide>
            <img src={RecycleBin} alt="Img2" />
          </SplideSlide>
        </Splide>
      </div>
      <div class="mt-20 md:mx-32 mx-5 py-5">
        <div class="grid grid-cols-2 gap-x-4 gap-y-6">
          <a href="./wasteinfo">
            <div className="bg-[#407BFF] rounded-lg text-white p-2 space-y-5 shadow-xl">
              <div class="">
                <svg
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5714 32.381H3.2381C1.44095 32.381 0 30.9238 0 29.1429L0.0161905 6.47619C0.0161905 4.69524 1.44095 3.2381 3.2381 3.2381H4.85714V0H8.09524V3.2381H21.0476V0H24.2857V3.2381H25.9048C27.6857 3.2381 29.1429 4.69524 29.1429 6.47619V16.1905H25.9048V12.9524H3.2381V29.1429H14.5714V32.381ZM30.9724 24.2695L32.1219 23.12C32.7533 22.4886 32.7533 21.4686 32.1219 20.8371L30.9724 19.6876C30.341 19.0562 29.321 19.0562 28.6895 19.6876L27.54 20.8371L30.9724 24.2695ZM29.8229 25.419L21.2419 34H17.8095V30.5676L26.3905 21.9867L29.8229 25.419Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="font-bold text-sm leading-tight">Despose Waste</p>
            </div>
          </a>
       
          <a href="./.html">
            <div class="bg-white rounded-lg text-[#407BFF] p-2 space-y-5 shadow-xl">
              <div class="">
                <svg
                  width="48"
                  height="48"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z"
                    fill="#407BFF"
                  />
                </svg>
              </div>
              <p class="font-bold text-sm leading-tight">
                Profile Verification
              </p>
            </div>
          </a>
          <a href="./calender.html">
          <div class="bg-white rounded-lg text-[#407BFF] p-4 space-y-5 shadow-xl">
            <div class="">
                <svg width="47" height="47" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"fill="#407BFF"/></svg>
            </div>
            <p class="font-bold text-sm leading-tight">Calender Workout</p>
          </div>
        </a>
          <a href="./location.html">
            <div class="bg-white rounded-lg text-[#407BFF] p-2 space-y-5 shadow-xl">
              <div class="">
                <svg
                  width="48"
                  height="48"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"
                    fill="#407BFF"
                  />
                </svg>
              </div>
              <p class="font-bold text-sm leading-tight">Change Location</p>
            </div>
          </a>
          <a href="../index.html">
            <div class="bg-white rounded-lg text-[#407BFF] p-2 space-y-5 shadow-xl">
              <div class="">
                <svg
                  width="48"
                  height="48"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M352 96h64c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96H352c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-7.5 177.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H160v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"
                    fill="#407BFF"
                  />
                </svg>
              </div>
              <p class="font-bold text-sm leading-tight">LogOut</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
