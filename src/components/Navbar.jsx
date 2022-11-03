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
            <ion-icon name="menu" color="#16a34a" size="large"></ion-icon>
        </div>
        <div className="mx-7">
          <h4 className={`text-lg md:text-3xl uppercase font-bold  ${open ? "text-green-500" : "text-green-700"} text-blue-600`}>
            Sha<span className="text-green-500">ra</span>
          </h4>
        </div>
        <div  className={`text-white fixed overflow-scroll w-2/3 md:w-2/6  min-h-screen px-7 py-2 font-medium bg-gray-50 top-0 duration-300 ${open ? "left-0" : "left-[-100%]" }`}>
          <ul className="flex flex-col justify-around gap-10 py-2 text-lg">
            <div className="mt-5">
              <div className="flex items-center justify-center">        
                <img src={UserImg} alt="" className="w-14 h-14 rounded-full" />
                <div className="p-1 text-green-500">
                  <h5 className="text-lg font-bold">John Doe</h5>
                  <p className="text-sm">Bal:&#8358; 18,420.81</p>
                </div>
              </div>
              <hr className="bg-black"/>
            </div>
           <div className="space-y-3">
           {menuLinks.map((menu, i) => (
            <li
              onClick={() => setOpen(false)}
              key={i}
              className="px-6 text-green-600 rounded-xl hover:bg-green-500 hover:text-white"
            >
              <a href={menu?.link} className="flex p-3 place-items-center gap-3 space-x-2">
                <ion-icon name={menu.icon} size="large" className="m-2"></ion-icon>
                <p>{menu?.name}</p>
                </a>
            </li>
            ))}
           </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

