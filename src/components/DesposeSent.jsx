import React from 'react'
import Navbar from './Navbar'
import TestiImage4 from "../assets/Garbagemanagement-cuate.png"

const DesposeSent = () => {
  return (
	<div>
      <Navbar />
      <section className="p-2 mt-12 py-10">
        <div className="grid max-w-screen-xl px-4 pt-5 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12 lg:pt-28">
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src={TestiImage4} alt="hero" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7 md:text-left text-center">
            <h1
            className="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl text-green-500">
            Your request has been sent and Our Agent are on the way</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Stay clean and stay safe
            </p>
            <div className="space-y-4 sm:flex md:justify-start justify-center sm:space-y-0 sm:space-x-4 py-3">
            <a href="./dashboard" className="button bg-white px-10 py-2 rounded-lg text-center text-blue-500 font-semibold">DONE</a>
            </div>
          </div>
        </div>
      </section>
	</div>
  )
}

export default DesposeSent;
