import React, {useState} from 'react'
import Navbar from './Navbar'
import { useNavigate} from 'react-router-dom'
import Iframe from "react-iframe";
import Image1 from "../assets/food.png"
import Image2 from "../assets/garbage2.png"
import Image3 from "../assets/waste.png"
import Image4 from "../assets/waste2.png"
import Image5 from "../assets/garbage3.png"
const Location = () => {  
  const navigate = useNavigate()  
  const [text, setText] = useState("");
  const [order, setOrder] = useState(false)
  // const [showModal, setShowModal] = useState(false)
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
  const handleInput = () =>{
    setText("No. 45 Ahmadu Bello way, Kano")
  }
  const handleOrder = ()=>{
    setOrder(true);
    console.log("OPEN ORDER")
    }
  return (
    <div>
      <Navbar />
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.750879136543!2d7.44110051487185!3d9.086444393481067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b87ac56b2c7%3A0xcc65ee493080d513!2sAhmadu%20Bello%20Way!5e0!3m2!1sen!2sng!4v1663838242429!5m2!1sen!2sng"
        width="100%"
        height="100%"
        id=""
        className=""
        display="block"
        position="relative"
      />
      <div className="rounded-3xl  bg-gray-200 p-1 w-full shadow-2xl shadow-inner:shadow-md bottom-0 fixed space-y-5 transition-all duration-50">
        <div className="mx-2 my-2 font-poppins">
            <div
              className="flex justify-between rounded-full bg-white mx-1 shadow-lg"
              id="menu"
            >
              <svg
                className="my-3 mx-2"
                width="25"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                  1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236
                    144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 
                    208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z 
                    "
                  fill="#34D186"
                />
              </svg>
              <input
                autoComplete="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyUp={handleInput}
                className="border text-gray-700 font-bold border-transparent bg-transparent block w-full placeholder:text-gray-600 placeholder:text-sm focus:outline-transparent focus:border-transparent"
                type="text"
                id="search_input"
                placeholder="Location"
              /> 

            <button onClick={handleOrder}>
              <i class="fa-solid fa-paper-plane cursor-pointer pt-4 mr-6 text-green-500"></i>
              </button>
            </div>
        </div>
      </div>
        {order ?
          <div className='bg-black bg-opacity-20 absolute w-full h-full top-0 left-0 flex place-items-center duration-500'>
            <div className="lg:max-w-2xl mx-auto my-5 p-5 flex flex-col justify-center shadow-md bg-white text-gray-800  rounded-xl">
            <div className="mx-auto text-center">
              <h2 className="text-2xl font-semibold text-center">
                Select the type of Waste to sell
              </h2>
              <p className="text-lg text-center m-2">
                You can select multiple option
              </p>
            </div>
            <div className="md:block gap-2">
              <div className='mx-3'>
                <article class="feature2">
                    <input type="checkbox" id="feature2" name="selectedwastes" value="metal" onChange={handleChange} />
                    <div className='flex justify-start space-x-5 px-4'>
                      <img src={Image4} alt="mwaste" className='w-8 h-8' />
                      <h5 class="text-lg font-semibold text-blue-500 dark:text-light">
                          Metal wastes
                        </h5>
                    </div>
                  </article>
                <article class="feature2">
                    <input type="checkbox" id="feature2" name="selectedwastes" value="plastic" onChange={handleChange}/>
                    <div className='flex justify-start space-x-5 px-4'>
                      <img src={Image3} alt="mwaste" className='w-8 h-8' />
                      <h5 class="text-lg font-semibold text-blue-500 dark:text-light">
                          Plastic wastes
                        </h5>
                    </div>
                </article>
                <article class="feature2">
                    <input type="checkbox" id="feature2" name="selectedwastes" value="paper" onChange={handleChange}/>
                    <div className='flex justify-start space-x-5 px-4'>
                      <img src={Image2} alt="mwaste" className='w-8 h-8' />
                      <h5 class="text-lg font-semibold text-blue-500 dark:text-light">
                          Paper wastes
                        </h5>
                    </div>
                </article>
                <article class="feature2">
                    <input type="checkbox" id="feature2" name="selectedwastes" value="organic" onChange={handleChange}/>
                    <div className='flex justify-start space-x-5 px-4'>
                      <img src={Image1} alt="mwaste" className='w-8 h-8' />
                      <h5 class="text-lg font-semibold text-blue-500 dark:text-light">
                          Organic wastes
                        </h5>
                    </div>
                </article>
                <article class="feature2">
                    <input type="checkbox" id="feature2" name="selectedwastes" value="NRWaste" onChange={handleChange}/>
                    <div className='flex justify-start space-x-5 px-4'>
                      <img src={Image5} alt="mwaste" className='w-8 h-8' />
                      <h5 class="text-lg font-semibold text-blue-500 dark:text-light">
                          Non Recyclable wastes
                        </h5>
                    </div>
                </article>
              </div>
              </div>
              <div className="pt-5 w-full mx-auto flex justify-around">
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
          : ""
          }
    </div>
  );
};
      

export default Location
