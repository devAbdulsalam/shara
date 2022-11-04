import React from "react";

const Bot = () => {
  return (
    <a href="./chat" rel="noopener noreferrer">
      <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-[#228e01] hover:bg-green-400  w-16 h-16 flex transition-all items-center justify-center rounded-full animate-bounce">
        <ion-icon name="chatbubble-ellipses"></ion-icon>
      </div>
    </a>
  );
};

export default Bot;
