import React, { useState } from "react";
import { Link } from "react-router-dom";
import TestiImage4 from "../assets/Hello-rafiki.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      <div className="w-full h-screen">
        <header className="fixed w-full">
          <nav className="border-gray-200 py-2.5">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
              <div className="flex items-center justify-center w-full h-5 mt-3">
                <h1 className="text-xl text-green-700">Treasured Trash</h1>
              </div>
            </div>
          </nav>
        </header>
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={TestiImage4} alt="hero"
        />
        <div className="bg-white fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto text-gray-500 ">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Login</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rouded"
                  type="email"
                  value={email}
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rouded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />

                <Link to="/dashboard">
                  <button className="bg-green-600 w-full text-white py-3 my-6 rounded font-bold">
                    Login
                  </button>
                </Link>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Not on<span className="text-green-700">TreasuredTrash?</span> 
                  </span>
                  <Link to="/signin">Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;





