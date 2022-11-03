import React, {useState} from 'react'
import MapContainer from './MapContainer'
import Navbar from './Navbar'
// import {useNavigate } from "react-router-dom";
const Order = () => { 
  // const navigate = useNavigate()
  // const [location, setLocation] = useState("");
  // const [selectedwastes, setSelectedWastes] = useState([]) 
  //   const handleChange = (event) =>{
  //       const selectwaste = event.target.value
  //       const isChecked = event.target.checked;
  //         if(isChecked){
  //             setSelectedWastes( prevWaste => ([...selectedwastes, selectwaste]));
  //         }else{
  //             let index = selectedwastes.indexOf(selectwaste);
  //             selectedwastes.splice(index, 1);
  //             setSelectedWastes([selectwaste ]);
  //           }
  //       console.log(selectedwastes)
  //     }
  //   const handleSubmit = () =>{  
  //       navigate("/desposesent");
  //   }
  return (
    <div>
      <Navbar />
      <MapContainer />
      <img src="https://www.pexels.com/photo/recyclable-plastic-bottles-in-tote-bags-7772006/" 
        class="w-screen h-screen portrait:w-10" alt="" />
      {/* <div className='py-10 m-6'>
        <div className="lg:max-w-2xl mx-auto my-5 p-5 flex flex-col justify-center bg-green-500 text-gray-50 rounded-xl">
            <div className="mx-auto text-center">
              <h2 className="text-2xl font-semibold text-center p">
                Order for our service
              </h2>
              <p className="text-lg text-center">
                our Agent will be there soon
              </p>
            </div>
            <div className="md:block gap-2">
              <h2 className="text-2xl px-2 font-semibold ">Enter Your Location</h2>
              <div className="justify-center flex flex-col px-2 gap-2 my-2 items-center">
                <input type="text" id=""
                  className="px-3 py-2 text-xl w-full font-normal text-gray-500 bg-clip-padding border-0 border-b-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  value={location} onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <h2 className="text-gray-50 text-2xl my-3 px-2 font-semibold ">
                Select the Type of Waste
                <span className='px-2 text-lg'>(You can select multiple option)</span> 
              </h2>
              <div className='mx-3'>
                <input type="checkbox" name="selectedwastes" value="metal" onChange={handleChange}/>
                <label htmlFor="waste1" className='text-xl p-2 mt-2'>Metal wastes</label><br />
                <input type="checkbox" name="selectedwastes" value="plastic" onChange={handleChange}/>
                <label htmlFor="waste2" className='text-xl p-2 mt-2'>Plastic wastes</label><br />
                <input type="checkbox" name="selectedwastes" value="general" onChange={handleChange}/>
                <label htmlFor="waste3" className='text-xl p-2 mt-2'>General wastes</label><br />
                <input type="checkbox" name="selectedwastes" value="organic" onChange={handleChange}/>
                <label htmlFor="waste4" className='text-xl p-2 mt-2'>Organic wastes</label><br />
                <input type="checkbox" name="selectedwastes" value="NRWaste" onChange={handleChange}/>
                <label htmlFor="waste5" className='text-xl p-2 mt-2'>Non Recyclable wastes</label>
                <br />
              </div>
              </div>
              <div className="pt-5 w-full mx-auto flex justify-between">
                <a href="./dashboard">
                  <button className="bg-red-700 text-white font-bold py-4 px-8 hover:bg-red-500 rounded-xl">
                    Cancle
                  </button>
                </a>
                <button onClick={handleSubmit} className="bg-blue-700 text-white font-bold py-4 px-8 hover:bg-blue-500 rounded-xl">
                  Submit
                </button>
            </div> 
        </div>
      </div> */}
    </div>
  )
}

export default Order