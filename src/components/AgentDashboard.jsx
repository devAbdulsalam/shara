import React from "react";
// import UserImg from "../assets/pngwing.com (59).png";

import RecycleBin from "../assets/pngwing.com (76).png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Navbar from "./Navbar";
import Bot from "./Bot";

const AgentDashboard = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <div className="h-36 bg-transparent rounded-b-[30%] px-7">
        <Splide className="mt-16 p-3" aria-label="myimges">
          <SplideSlide>
            <img src={RecycleBin} alt="Img1" />
          </SplideSlide>
          <SplideSlide>
            <img src={RecycleBin} alt="Img2" />
          </SplideSlide>
        </Splide>
      </div>
      <div className="mt-10 md:mx-32 mx-5 py-5">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          <a href="./alocation">
            <div className="bg-[#228e01] rounded-lg text-white p-2 space-y-3 shadow-lg">
              <div className="">
                <svg
                  width="50"
                  height="55"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="font-bold text-lg leading-tight">View Request</p>
            </div>
          </a>

          <a href="./acalculate">
            <div className="bg-white rounded-lg text-[#228e01] hover:bg-green-200 p-2 space-y-3 shadow-lg">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="55"
                  fill="#228e01"
                  class="bi bi-calculator"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                </svg>
              </div>
              <p className="font-bold text-lg leading-tight">
                Waste Calculator
              </p>
            </div>
          </a>
          <a href="./aprofile">
            <div className="bg-white rounded-lg text-[#228e01] hover:bg-green-200 p-4 space-y-2 shadow-lg">
              <div className="">
                <svg
                  width="50"
                  height="55"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z"
                    fill="#228e01"
                  />
                </svg>
              </div>
              <p className="font-bold text-lg leading-tight">My profile</p>
            </div>
          </a>
          <a href="./awallet">
            <div className="bg-white rounded-lg text-[#228e01] hover:bg-green-200  p-4 space-y-2 shadow-lg">
              <div className="">
                <svg
                  width="50"
                  height="55"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 336c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
                    fill="#228e01"
                  />
                </svg>
              </div>
              <p className="font-bold text-lg leading-tight">Wallet</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
