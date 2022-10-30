import React from "react";

const GreenChat = () => {
  return (
    <div className="h-screen overflow-scroll relative">
      <div class="relative">
        <div class="flex justify-between px-5 py-4 text-xl items-center bg-green-500 text-white fixed top-0 w-full">
          <div class="space-x-5 flex items-center">
            <a href="./home.html">
              <i class="fa-solid fa-arrow-left"></i>
            </a>
            <p>Chat Forum</p>
          </div>
          <div class="space-x-5">
            <i class="fa-solid fa-phone"></i>
            <i class="fa-solid fa-video-camera"></i>
            <i class="fa-solid fa-language language" onclick="languages()"></i>
          </div>
          <div class="absolute bg-white px-5 rounded py-3 text-green-600 text-sm right-5 top-14 language-bar hidden">
            <ul class="space-y-3">
              <li>Hausa</li>
              <li>English</li>
            </ul>
          </div>
        </div>
        <div class="text-xl space-y-5 pt-20 md:pb-32 pb-24">
          <div class="mb-1 flex justify-start mx-4">
            <div class="w-[90%] lg:w-1/2 bg-gray-100 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-600">
              Hello there
            </div>
          </div>
          <div class="mb-1 flex justify-end mx-4">
            <div class="w-[90%] lg:w-1/2 bg-green-500 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nihil nostrum magni molestias, porro sed blanditiis{" "}
            </div>
          </div>
          <div class="mb-1 flex justify-start mx-4">
            <div class="w-[90%] lg:w-1/2 bg-gray-100 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-600">
              Hello there
            </div>
          </div>
          <div class="mb-1 flex justify-end mx-4">
            <div class="w-[90%] lg:w-1/2 bg-green-500 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nihil nostrum magni molestias, porro sed blanditiis{" "}
            </div>
          </div>
          <div class="mb-1 flex justify-start mx-4">
            <div class="w-[90%] lg:w-1/2 bg-gray-100 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-600">
              Hello there
            </div>
          </div>
          <div class="mb-1 flex justify-end mx-4">
            <div class="w-[90%] lg:w-1/2 bg-green-500 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nihil nostrum magni molestias, porro sed blanditiis{" "}
            </div>
          </div>
          <div class="mb-1 flex justify-start mx-4">
            <div class="w-[90%] lg:w-1/2 bg-gray-100 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-600">
              Hello there
            </div>
          </div>
          <div class="mb-1 flex justify-end mx-4">
            <div class="w-[90%] lg:w-1/2 bg-green-500 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nihil nostrum magni molestias, porro sed blanditiis{" "}
            </div>
          </div>
        </div>
        <div class="flex space-x-5 justify-around px-5 bg-white py-2 items-center fixed bottom-0 w-full border-y-green-500">
          <div class="md:w-[90%] w-[70%]">
            <textarea
              class=" w-full border border-green-500 rounded-xl px-5 py-1"
              cols="1"
            ></textarea>
          </div>
          <div class="md:space-x-10 space-x-3 text-green-500 text-xl">
            <i class="fa-solid fa-paper-plane hidden"></i>
            <i class="fa-solid fa-microphone-lines"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenChat;
