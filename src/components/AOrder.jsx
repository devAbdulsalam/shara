import React, {useState} from 'react'
import Navbar from './Navbar'
import {useNavigate } from "react-router-dom";
const AOrder = () => { 
  const navigate = useNavigate()
  const [selectedwastes, setSelectedWastes] = useState([]) 
    const handleChange = (event) =>{
        const selectwaste = event.target.value
        const isChecked = event.target.checked;
          if(isChecked){
              setSelectedWastes( prevWaste => ([...selectedwastes, selectwaste]));
          }else{
              let index = selectedwastes.indexOf(selectwaste);
              selectedwastes.splice(index, 1);
              setSelectedWastes([selectwaste ]);
            }
        console.log(selectedwastes)
      }
    const handleSubmit = () =>{  
        navigate("/desposesent");
    }
  return (
    <div>
      <Navbar />
      <div>
      <div className='py-10 m-6 h-screen flex place-items-center'>
        <div className="lg:max-w-2xl mx-auto my-5 p-5 flex flex-col justify-center bg-white text-gray-800  rounded-xl">
            <div className="mx-auto text-center">
              <h2 className="text-2xl font-semibold text-center">
                Select your type of Waste
              </h2>
              <p className="text-lg text-center m-2">
                You can select multiple option
              </p>
            </div>
            <div className="md:block gap-2">
              <div className='mx-3'>
                
                <article class="feature2">
                    <input type="checkbox" id="feature2" name="selectedwastes" value="metal" onChange={handleChange} />
                    <div>
                      <h5 class="text-sm font-semibold text-gray-600 dark:text-light">
                          Metal wastes
                        </h5>
                    </div>
                  </article>
                <article class="feature2">
                    <input type="checkbox" id="feature2" name="selectedwastes" value="metal" onChange={handleChange} />
                    <div>
                      <h5 class="text-sm font-semibold text-gray-600 dark:text-light">
                          Metal wastes
                        </h5>
                    </div>
                  </article>
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
                  <button className="bg-red-700 text-white font-bold py-2 px-8 hover:bg-red-500 rounded-md">
                    Cancle
                  </button>
                </a>
                <button onClick={handleSubmit} className="bg-blue-700 text-white font-bold py-2 px-8 hover:bg-blue-500 rounded-md">
                  Submit
                </button>
            </div> 
        </div>
      </div>
      </div>
    </div>
  )
}

export default AOrder

/* <h2 className="text-2xl px-2 font-semibold ">Enter Your Location</h2>
    <div className="justify-center flex flex-col px-2 gap-2 my-2 items-center">
      <input type="text" id=""
        className="px-3 py-2 text-xl w-full font-normal text-gray-500 bg-clip-padding border-0 border-b-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        value={location} onChange={(e) => setLocation(e.target.value)}
      />
    </div> */