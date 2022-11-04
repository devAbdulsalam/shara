import React, {useState} from "react";
import{useNavigate } from 'react-router-dom'
import {
  plasticWRate,
  metalWRate,
  generalWRate,
  organicWRate,
  NonRWRate,
} from "../Data";
import Navbar from "./Navbar";

const Calculate = () => {
  const navigate = useNavigate()
  const [plasticWaste, setPlasticWaste] = useState("0");
  const [metalWaste, setMetalWaste] = useState("0");
  const [organicWaste, setOrganicWaste] = useState("0");
  const [generalWaste, setGeneralWaste] = useState("0");
  const [nonRMaterialWaste, setNRMaterialWaste] = useState("0");  
  const [alert, setAlert] = useState('invisible')
  const [total, setTotal] = useState(null);
  const [active, setActive] = useState(false)  
  const [payment, setPayment] = useState(false)
  const showDesc = id =>{
    if(active === id){
       return setActive(null)
    }
      setActive(id)
  }

  const calculateTotal = () => {
    const GeneralWprice = Number(generalWaste) * generalWRate;
    const OrganicWprice = Number(organicWaste) * organicWRate;
    const PlasticWprice = Number(plasticWaste) * plasticWRate;
    const MetalWprice = Number(metalWaste) * metalWRate;
    const NonRecycleWprice = Number(nonRMaterialWaste) * NonRWRate;
    setTotal(
      PlasticWprice +
        MetalWprice +
        OrganicWprice +
        GeneralWprice -
        NonRecycleWprice
    );
    if (total === 0){
      setAlert("visible")
      setTimeout(() => {
        setAlert('invisible')
      }, 2000);
    }else{
      setPayment(true)
    }
  };
  const handlePay = () =>{
    if(total < 0){
      navigate(`/pay/${total.toString().substring(1)}`)
    }
  }
  const closePayment = () =>{
    setPayment(false)
  }
  return (
    <div>
      <Navbar />
      <div className="mt-14 py-8 mx-2 relative">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden justify-around gap-3 mx-auto min-w-sm lg:w-10/12">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: `url('https://www.pexels.com/photo/piled-plastic-containers-6591429/')`,
            }}
          ></div>
          <div className="lg:max-w-lg my-5 px-3 flex flex-col justify-center text-center">
            <div className="mx-auto">
              <h2 className="text-2xl font-semibold text-gray-700 text-center p">
                Select Your Waste
              </h2>
              <p className="text-sm text-gray-600 text-center">
                Green total balance means you would be paid and red means you
                are to pay us for the service renderd
              </p>
            </div>
            <div className="py-3 ">
              <div className="">
                    <div className="text-gray-700 md:block gap-2 bg-gray-200 rounded-xl">
                      <div onClick={() => showDesc("metal")} className="justify-center cursor-pointer text-gray-50 bg-gray-500 p-2 rounded-xl flex text-xl gap-2 my-2 items-center">
                        <h2 className="font-semibold">Metal Waste</h2>
                        <span className="">1KG = {metalWRate}&#8358;</span>
                      </div>
                     <div className={`${active === "metal" ? "block" : "hidden"}`}>
                     <div className="justify-center flex flex-col gap-2 my-2 items-center">
                        <input
                          type="number"
                          id=""
                          className="px-3 py-1.5 text-lg w-56 font-normal text-gray-500 rounded-b-[1rem] bg-clip-padding border-0 border-b-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          value={metalWaste}
                          onChange={(e) => setMetalWaste(e.target.value)}                          
                        />
                      </div>
                      <p className="text-xl ml-3">EARN</p>
                      <p className="text-3xl ml-3 font-bold">
                        &#8358;{Number(metalWaste) * metalWRate}
                      </p>
                     </div>
                    </div>

                  <div className="text-blue-600 md:block gap-2 bg-gray-200 rounded-xl">
                  <div onClick={() => showDesc("plastic")} className="justify-center text-gray-50 cursor-pointer bg-gray-500 p-2 rounded-xl flex text-xl gap-2 my-2 items-center">
                    <h2 className="font-semibold">Plastic Waste</h2>
                    <span className="">1KG = {plasticWRate}&#8358;</span>
                  </div>
                <div className={`${active === "plastic" ? "block" : "hidden"}`}>
                    <div className="justify-center flex flex-col gap-2 my-2 items-center">
                        <input
                        type="number"
                        id=""
                        className="px-3 py-1.5 text-lg w-56 font-normal text-blue-500 rounded-b-[1rem] bg-clip-padding border-0 border-b-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        value={plasticWaste}
                        onChange={(e) => setPlasticWaste(e.target.value)}                        
                        />
                    </div>
                    <p className="text-xl ml-3">EARN</p>
                    <p className="text-3xl ml-3 font-bold">
                        &#8358;{Number(plasticWaste) * plasticWRate}
                        </p>
                    </div>
                </div>

                <div className="text-green-600 md:block gap-2 bg-gray-200 rounded-xl">
                  <div onClick={() => showDesc("organic")} className="justify-center text-gray-50 cursor-pointer bg-gray-500 p-2 rounded-xl flex text-xl gap-2 my-2 items-center">
                    <h2 className="font-semibold">Organic Waste</h2>
                    <span className="">1KG = {organicWRate}&#8358;</span>
                  </div>
                 <div className={`${active === "organic" ? "block" : "hidden"}`}>
                 <div className="justify-center flex flex-col gap-2 my-2 items-center">
                    <input
                      type="number"
                      id=""
                      className="px-3 py-1.5 text-lg w-56 font-normal text-green-500 rounded-b-[1rem] bg-clip-padding border-0 border-b-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      value={organicWaste}
                      onChange={(e) => setOrganicWaste(e.target.value)}                      
                    />
                  </div>
                  <p className="text-xl ml-3">EARN</p>
                  <p className="text-3xl ml-3 font-bold">
                    &#8358;{Number(organicWaste) * organicWRate}
                    </p>
                 </div>
                </div>
                <div className="text-yellow-600 md:block gap-2 bg-gray-200 rounded-xl">
                  <div onClick={() => showDesc("general")} className="justify-center text-gray-50 cursor-pointer bg-gray-500 p-2 rounded-xl flex text-xl gap-2 my-2 items-center">
                    <h2 className="font-semibold">Paper Waste</h2>
                    <span className=""> 1 KG = {generalWRate}&#8358;</span>
                  </div>
                 <div className={`${active === "general" ? "block" : "hidden"}`}>
                 <div className="justify-center flex flex-col gap-2 my-2 items-center">
                    <input
                      type="number"
                      id=""
                      className="px-3 py-1.5 text-lg w-56 font-normal text-yellow-500 rounded-b-[1rem] bg-clip-padding border-0 border-b-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      value={generalWaste}
                      onChange={(e) => setGeneralWaste(e.target.value)}                      
                    />
                  </div>
                  <p className="text-xl ml-3">EARN</p>
                  <p className="text-3xl ml-3 font-bold">
                    &#8358;{Number(organicWaste) * generalWRate}
                    </p>
                 </div>
                </div>
                <div className="text-red-600 md:block gap-2 bg-gray-200 rounded-xl">
                  <div onClick={() => showDesc("material")} className="justify-center text-gray-50 cursor-pointer bg-gray-500 p-2 rounded-xl flex text-xl gap-2 my-2 items-center">
                    <a href="https://www.flaticon.com/free-icons/plastic" title="plastic icons"></a>
                    <h2 className="font-semibold">General Waste</h2>
                    <span className="">1KG = {NonRWRate}&#8358;</span>
                  </div>
                <div className={`${active === "material" ? "block" : "hidden"}`}>
                <div className="justify-center flex flex-col gap-2 my-2 items-center">
                    <input
                      type="number"
                      id=""
                      className="px-3 py-1.5 text-lg w-56 font-normal text-red-500 rounded-b-[1rem] bg-clip-padding border-0 border-b-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      value={nonRMaterialWaste}
                      onChange={(e) => setNRMaterialWaste(e.target.value)}                      
                    />
                  </div>
                  <p className="text-xl ml-3">PAY</p>
                    <p className="text-3xl ml-3 font-bold">
                      &#8358;{Number(nonRMaterialWaste) * NonRWRate}
                    </p>
                </div>
                </div>
            <p className={`text-lg text-red-500 ${alert}`}>Add waste Value</p>
              </div>
            </div>            
            <div className="pt-5 w-full mx-auto flex justify-around">
              <a href="./dashboard">
                <button className="bg-red-600 text-white min-w-36 font-bold py-3 px-12 hover:bg-red-500 rounded-md">
                  Cancle
                </button>
              </a>
                <button onClick={calculateTotal} className="bg-blue-600 min-w-36 text-white font-bold py-3 px-10 hover:bg-blue-500 rounded-md">
                  Calculate
                </button>
                
            </div>
          </div>
        </div>
        {payment ?
          <div className='bg-black bg-opacity-20 absolute w-full h-full top-0 left-0 flex place-items-center duration-500'>
            <div className='text-center text-lg bg-green-50 w-11/12 p-4 mx-auto rounded-md shadow-md'>
              <h5 className='font-semibold text-2xl mt-2'>Total Waste</h5>
               <div
                className={`text-3xl ml-3 font-bold pt-3 ${
                  total >= 0 ? "text-green-500 " : "text-red-500"
                }`}
              >
                {total >= 0 ? (
                  <p className="">
                    EARN : <span className="">{total}&#8358;</span>
                  </p>
                ) : (
                  <p className="">
                    PAY : <span className="">{total.toString().substring(1)}&#8358;</span>
                  </p>
                )}
              </div>
              {total >= 0 ? <p className="py-3 text-lg">You Earn {total}&#8358; for your waste</p> : <p className="py-3 text-lg">You are to pay {total.toString().substring(1)}&#8358; for your waste</p>}
              <button className='bg-red-500 px-8 min-w-32 text-white py-2 mt-2 mx-2 font-bold hover:bg-red-400 rounded-md' onClick={closePayment}>Cancel</button>
              {total >= 0 ? 
                  (<button onClick={() => navigate("/receive")} className="bg-blue-600 min-w-32 text-white font-bold py-2 px-8 hover:bg-blue-500 rounded-md">
                  Receive
                </button>
              ) : ( <button onClick={handlePay} className="bg-blue-600 min-w-32 text-white font-bold py-2 px-16 hover:bg-blue-500 rounded-md">
                  Pay
                </button>
              )}
            </div>
          </div>
          : ""
          }
      </div>
    </div>
  );
};

export default Calculate;
