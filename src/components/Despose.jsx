import React, {useState} from 'react'
import { plasticWRate, metalWRate, generalWRate, organicWRate, NonRWRate } from '../Data';
import Navbar from './Navbar';

const Despose = () => {
const [location, setLocation] = useState("");
const [plasticWaste, setPlasticWaste] = useState("0");
const [metalWaste, setMetalWaste] = useState("0");
const [organicWaste, setOrganicWaste] = useState("0");
const [generalWaste, setGeneralWaste] = useState("0");
const [nonRMaterialWaste, setNRMaterialWaste] = useState("0");
const [total, setTotal] = useState(0);

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
  };
  return (
    <div>
        <Navbar />
        <div className="mt-3 w-full">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden justify-around gap-3 mx-auto min-w-sm lg:w-10/12">
                <div className="hidden lg:block lg:w-1/2 bg-cover" style={{backgroundImage: `url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')`}}></div>
                <div className="lg:max-w-lg my-5 px-3 flex flex-col justify-center text-center">
                    <div className="mx-auto">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center p">Select Your Waste</h2>
                        <p className="text-lg text-gray-600 text-center">Green total balance means you would be paid and red means you are to pay us for the service renderd</p> 
                    </div>
                    <div className="py-3">
                        <div className="">
                            <div className='flex gap-2 my-2 items-center justify-center'>
                                <h2 className='text-xl font-semibold'>Address</h2>
                                <input type="text" 
                                    id="locattion" 
                                    className="px-3 py-1.5 text-lg w-full font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"                                
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)} 
                                />
                            </div>
                            <div className='text-gray-500 md:flex gap-2'>
                                <div className='flex text-xl gap-2 my-2 items-center'>
                                    <h2 className='font-semibold'>Metal Waste</h2>
                                    <span className=''>1KG = {metalWRate}$</span>
                                </div>
                                <div className='flex gap-2 my-2 items-center'>
                                    <input type="number" id="" 
                                        className="px-3 py-1.5 text-lg w-28 font-normal text-gray-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"                                
                                        value={metalWaste}
                                        onChange={(e) => setMetalWaste(e.target.value)} 
                                        onKeyUp={calculateTotal} 
                                    />
                                    <p className='text-xl ml-3'>EARN {Number(metalWaste) * metalWRate}</p>
                                </div>
                            </div>
                            <div className='text-blue-500 md:flex gap-2'>
                                <div className='flex text-xl gap-2 my-2 items-center'>
                                    <h2 className='font-semibold'>Plastic Waste</h2>
                                    <span className=''>1KG = {plasticWRate}$</span>
                                </div>
                                <div className='flex gap-2 my-2 items-center'>
                                    <input type="number" id="" 
                                        className="px-3 py-1.5 text-lg w-28 marker:font-normal text-blue-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"                                
                                        value={plasticWaste}
                                        onChange={(e) => setPlasticWaste(e.target.value)} 
                                        onKeyUp={calculateTotal} 
                                    />
                                    <p className='text-xl ml-3'>EARN {Number(plasticWaste) * plasticWRate}</p>
                                </div>
                            </div>
                            <div className='text-green-500 md:flex gap-2'>
                                <div className='flex text-xl gap-2 my-2 items-center'>
                                    <h2 className='font-semibold'>Organic Waste</h2>
                                    <span className=''>1KG = {organicWRate}$</span>
                                </div>
                                <div className='flex gap-2 my-2 items-center'>
                                    <input type="number" id="" 
                                        className="px-3 py-1.5 text-lg w-28 font-normal text-green-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"                                
                                        value={organicWaste}
                                        onChange={(e) => setOrganicWaste(e.target.value)} 
                                        onKeyUp={calculateTotal} 
                                    />
                                    <p className='text-xl ml-3'>EARN {Number(organicWaste) * organicWRate}</p>
                                </div>
                            </div>
                            <div className='text-yellow-500 md:flex gap-2'>
                                <div className='flex text-xl gap-2 my-2 items-center'>
                                    <h2 className='font-semibold'>General Waste</h2>
                                    <span className=''>1KG = {generalWRate}$</span>
                                </div>
                                <div className='flex gap-2 my-2 items-center'>
                                    <input type="number" id="" 
                                        className="px-3 py-1.5 text-lg w-28 font-normal text-yellow-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        value={generalWaste} 
                                        onChange={(e) => setGeneralWaste(e.target.value)}
                                        onKeyUp={calculateTotal} 
                                    />
                                    <p className='text-xl ml-3'>EARN {Number(organicWaste) * generalWRate}</p>
                                </div>
                            </div>
                            <div className='text-red-500 md:flex gap-2'>
                                <div className='flex text-xl gap-2 my-2 items-center'>
                                    <h2 className='font-semibold'>Material Waste</h2>
                                    <span className=''>1KG = {NonRWRate}$</span>
                                </div>
                                <div className='flex gap-2 my-2 items-center'>
                                    <input type="number" id="" 
                                        className="px-3 py-1.5 text-lg w-28 font-normal text-red-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"                                
                                        value={nonRMaterialWaste} 
                                        onChange={(e) => setNRMaterialWaste(e.target.value)}
                                        onKeyUp={calculateTotal} 
                                    />
                                    <p className='text-xl ml-3'>PAY {Number(nonRMaterialWaste) * NonRWRate}</p>
                                </div>
                            </div>
                        </div>
                        <div className={`text-2xl ml-9 ${total >= 0 ? "text-green-500 " : "text-red-500"}`}>
                        { total >= 0 ? <p className=''>TO EARN : <span className=''>{total}</span></p> : <p className=''>TO PAY : <span className=''>{total}</span></p>}</div>
                    </div>
                    <div className="pt-5 w-full md:w-1/2 mx-auto flex justify-between">
                    <a href="./dashboard">
                        <button className="bg-red-700 text-white font-bold py-2 px-6 hover:bg-red-500 rounded-xl">Cancle</button>
                    </a>
                    <a href="./desposesent">
                        <button className="bg-blue-700 text-white font-bold py-2 px-6 hover:bg-blue-500 rounded-xl">Continue</button>
                    </a>
                </div>              
            </div>
        </div>
        </div>
    </div>
  );
};

export default Despose;
