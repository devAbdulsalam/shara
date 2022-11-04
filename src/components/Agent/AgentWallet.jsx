import React from "react";
import Navbar from "./Navbar";
// import Img from '../assets/pngwing.com (78).png'

const Wallet = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#228e01] w-full h-full overflow-auto bg">
        <div className="mx-5 py-28 text-green-900">
          <p className="font-bold">Available Balance</p>
          <p className="text-4xl font-extrabold my-2">$ 18,420.81</p>
          <div className="mx-5 flex gap-5 space-x-2">
            <button className="button">
              <a href="./pay">
                <i className="fa fa-send"></i> PAY
              </a>
            </button>
            <button className="button uppercase">
              <a href="./receive">
                <i className="fa fa-download"> </i> receive{" "}
              </a>
            </button>
          </div>
          <div className="space-y-5 text-sm">
            <p className="font-semibold">History</p>
            <div className="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
              <p className="font-semibold">10th February, 2022</p>
              <p className="font-semibold text-green-500">Successful</p>
            </div>
            <div className="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
              <p className="font-semibold">10th February, 2022</p>
              <p className="font-semibold text-red-500">Failed</p>
            </div>
            <div className="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
              <p className="font-semibold">10th February, 2022</p>
              <p className="font-semibold text-green-500">Successful</p>
            </div>
            <div className="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
              <p className="font-semibold">10th February, 2022</p>
              <p className="font-semibold text-red-500">Failed</p>
            </div>
            <div className="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
              <p className="font-semibold">10th February, 2022</p>
              <p className="font-semibold text-green-500">Successful</p>
            </div>
            {/* <div className="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
          <p className="font-semibold">10th February, 2022</p>
          <p className="font-semibold text-green-500">Successful</p>
        </div>
        <div className="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
          <p className="font-semibold">10th February, 2022</p>
          <p className="font-semibold text-red-500">Failed</p>
        </div>
        <div className="bg-white rounded-lg px-4 py-5 flex justify-between items-center">
          <p className="font-semibold">10th February, 2022</p>
          <p className="font-semibold text-red-500">Failed</p>
        </div> */}
          </div>
        </div>

        {/* <div classNameName="fixed bottom-0 bg-white p-5 h-72 overflow-scroll rounded-2xl shadow-2xl">
            <div classNameName="">
              <img src={Img} alt="" />
              <img src={Img} alt="" />
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Wallet;
