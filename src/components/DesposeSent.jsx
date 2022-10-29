import React from 'react'

const DesposeSent = () => {
  return (
    <section className="p-2 py-10">
		<div className="grid max-w-screen-xl px-4 pt-5 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12 lg:pt-28">
		  <div className="lg:mt-0 lg:col-span-5 lg:flex">
			<img src="../assets/Police car-rafiki.png" alt="hero" />
		  </div>
		  <div className="mr-auto place-self-center lg:col-span-7 md:text-left text-center">
			<h1
			  className="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl text-blue-500">
			 Your request has been sent and the Agent are on the way</h1>
			<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Please stay calm and stay safe
			</p>
			<div className="space-y-4 sm:flex md:justify-start justify-center sm:space-y-0 sm:space-x-4 py-3">
			  <a href="./dashboard.html" className="button bg-white px-10 py-2 rounded-lg text-blue-500 font-semibold">DONE</a>
			</div>
		  </div>
		</div>
	</section>
  )
}

export default DesposeSent