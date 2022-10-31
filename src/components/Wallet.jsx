import React from 'react'
import Navbar from './Navbar'
import Img from '../assets/pngwing.com (78).png'

const Wallet = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-green-600 w-full h-full overflow-auto bg">
        <div className="mx-5 py-28 text-green-900">
          <p className="font-bold">Available Balance</p>
          <p className="text-4xl font-extrabold my-2">$ 18 420.81</p>
          <div className="mx-5 flex gap-5">
            <button className="button"><i className='fa fa-send'> </i>  PAY</button>
            <button className="button uppercase"><i className='fa fa-download'> </i> receive</button>
          </div>
          <div class="space-y-5 text-sm">
        <p class="font-semibold">History</p>
        <div class="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
          <p class="font-semibold">10th February, 2022</p>
          <p class="font-semibold text-green-500">Successful</p>
        </div>
        <div class="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
          <p class="font-semibold">10th February, 2022</p>
          <p class="font-semibold text-red-500">Failed</p>
        </div>
        <div class="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
          <p class="font-semibold">10th February, 2022</p>
          <p class="font-semibold text-green-500">Successful</p>
        </div>
        <div class="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
          <p class="font-semibold">10th February, 2022</p>
          <p class="font-semibold text-red-500">Failed</p>
        </div>
        <div class="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
          <p class="font-semibold">10th February, 2022</p>
          <p class="font-semibold text-green-500">Successful</p>
        </div>
        {/* <div class="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
          <p class="font-semibold">10th February, 2022</p>
          <p class="font-semibold text-green-500">Successful</p>
        </div>
        <div class="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
          <p class="font-semibold">10th February, 2022</p>
          <p class="font-semibold text-red-500">Failed</p>
        </div>
        <div class="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
          <p class="font-semibold">10th February, 2022</p>
          <p class="font-semibold text-red-500">Failed</p>
        </div> */}
      </div>
        </div>
       
        {/* <div className="fixed bottom-0 bg-white p-5 h-72 overflow-scroll rounded-2xl shadow-2xl">
            <div className="">
              <img src={Img} alt="" />
              <img src={Img} alt="" />
            </div>
          </div> */}
      </div>
    </div>
  )
}

export default Wallet
