import React, {useState} from "react";

const GreenChat = () => {  
  const [language, setLanguage] = useState(false)
  const handleLanguage = () => {
    setLanguage(!language)
  }

  return (
    <div className="h-screen overflow-scroll relative">
      <div class="relative">
        <div class="flex justify-between px-5 py-4 text-xl items-center bg-green-500 text-white fixed top-0 w-full">
          <div class="space-x-5 flex items-center">
            <a href="./dashboard">
              <i class="fa-solid fa-arrow-left"></i>
            </a>
            <p>Chat Forum</p>
          </div>
          <div class="space-x-5">
            <i class="fa-solid fa-phone cursor-pointer"></i>
            <i class="fa-solid fa-video-camera cursor-pointer"></i>
            <i class="fa-solid fa-language language cursor-pointer" onClick={handleLanguage}></i>
          </div>
          <div class={`absolute bg-white px-5 rounded py-3 text-green-600 text-sm right-5 top-14 language-bar ${language ? `block` : `hidden`}`}>
            <ul class="space-y-3">
              <li className="hover:text-green-400 cursor-pointer">Hausa</li>
              <li className="hover:text-green-400  cursor-pointer">English</li>
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
              Hi Mike Monday 
            </div>
          </div>
          <div class="mb-1 flex justify-start mx-4">
            <div class="w-[90%] lg:w-1/2 bg-gray-100 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-600">
              What are the categories of waste that can be sold?
            </div>
          </div>
          <div class="mb-1 flex justify-end mx-4">
            <div class="w-[90%] lg:w-1/2 bg-green-500 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-200">
              You can sell most recycleble waste such as Papers, plastic, metal etc
            </div>
          </div>
          <div class="mb-1 flex justify-start mx-4">
            <div class="w-[90%] lg:w-1/2 bg-gray-100 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-600">
              What are the payment systems?
            </div>
          </div>
          <div class="mb-1 flex justify-end mx-4">
            <div class="w-[90%] lg:w-1/2 bg-green-500 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-200">
              Transcations and payment can be made through your wallet and also in cash
            </div>
          </div>
          <div class="mb-1 flex justify-start mx-4">
            <div class="w-[90%] lg:w-1/2 bg-gray-100 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-600">
              How soon will your Agent arrive to pick up my waste as soon as a place order
            </div>
          </div>
          <div class="mb-1 flex justify-end mx-4">
            <div class="w-[90%] lg:w-1/2 bg-green-500 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-200">
              As soon as possible, Our agent are located accross each local government so the nearest would be there as soon as possible"
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
            <i class="fa-solid fa-paper-plane cursor-pointer"></i>
            <i class="fa-solid fa-microphone-lines cursor-pointer"></i>
            <i class="fa-solid fa-microphone-lines cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenChat;
