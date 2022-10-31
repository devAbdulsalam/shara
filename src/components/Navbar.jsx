import React, { useState} from "react";
import {menuLinks} from "../Data";
import UserImg from "../assets/userImage.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <nav
      className={`w-full left-0 top-0 z-[999] absolute bg-gray-800 shadow-lg text-white}`}>
      <div className="flex items-center justify-between">
        <div onClick={() => setOpen(!open)} className={`z-[999] ${open ? "text-gray-900" : "text-gray-100"} cursor-pointer text-3xl  m-5`}>
          <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.75 16H24V13.3333H17.75V16ZM0 0V2.66667H7.75V0H0ZM0 9.33333H24V6.66667H0V9.33333Z"
                fill="#407BFF"
              />
            </svg>
        </div>
        <div className="mx-7">
          <h4 className={`text-lg md:text-3xl uppercase font-bold  ${open ? "text-green-500" : "text-green-700"} text-blue-600`}>
            Treasured<span className="text-green-500"> Trash</span>
          </h4>
        </div>
        <div  className={`text-white absolute w-2/3 md:w-2/6 h-screen px-7 py-2 font-medium bg-gray-50 top-0 duration-300 ${open ? "left-0" : "left-[-100%]" }`}>
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            <div className="mt-5">
              <div class="flex items-center m-2 justify-center">        
                <img src={UserImg} alt="" class="w-14 h-14 rounded-full" />
                <div className="p-3 text-green-500">
                  <h5 className="text-xl font-medium">John Doe</h5>
                  <p className="text-lg">balance: $ 150.0</p>
                </div>
              </div>
              <hr className=""/>
            </div>
            {menuLinks.map((menu, i) => (

              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 text-green-600 rounded-xl hover:bg-green-500 hover:text-white"
              >
                <a href={menu?.link} className="flex p-3 place-items-center gap-4 space-x-4">
                  <ion-icon name={menu.icon} size="large" className="m-2"></ion-icon>
                  <p>{menu?.name}</p>
                  </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

