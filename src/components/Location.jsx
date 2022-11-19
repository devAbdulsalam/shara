import React, {useState} from 'react'
import Navbar from './Navbar'
import { useNavigate} from 'react-router-dom'
import Maps from "./Map";        
import SearchBox from "./SearchBox";
import Image1 from "../assets/food.png"
import Image2 from "../assets/garbage2.png"
import Image3 from "../assets/waste.png"
import Image4 from "../assets/waste2.png"
import Image5 from "../assets/garbage3.png"

// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFViOFNNaThJM3I5aWJ5UUE5aGhxQmU1Q205QXxBQ3Jtc0ttS3JDTVMySDFBajRjTjV5OFE5NnlFZjBBdmMzMWp4WlhyNEVwblF2RkpGa1huMEpFaWpkaFBxcXVjSFBabndVWWhkVFRNd2UweDdNUkJ3dnRpUFZTTWRqU3RJSkdIYl9yYTJ4T2ZXVTBod0U2a1pGcw&q=https%3A%2F%2Fgithub.com%2Fwebstylepress&v=fKzctFQkkbc
const Location = () => {  
  const navigate = useNavigate()  
  const [order, setOrder] = useState(false)
  // const [showModal, setShowModal] = useState(false)
  const [selectPosition, setSelectPosition] = useState(null);
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
    <div className='h-screen w-full relative'>
      <Navbar />
      <div className="w-full h-full pt-12">
        <div className="w-full h-full pt-5">        
          <Maps selectPosition={selectPosition} />
        </div>
        <div className='absolute z-[999] top-0 left-0 w-full'>
          <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition} setOrder={setOrder}/>
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
                      <h5 className="text-lg font-semibold text-blue-500 dark:text-light">
                          Metal wastes
                        </h5>
                    </div>
                  </article>
                <article class="feature2">
                    <input type="checkbox" id="feature2" name="selectedwastes" value="plastic" onChange={handleChange}/>
                    <div className='flex justify-start space-x-5 px-4'>
                      <img src={Image3} alt="mwaste" className='w-8 h-8' />
                      <h5 className="text-lg font-semibold text-blue-500 dark:text-light">
                          Plastic wastes
                        </h5>
                    </div>
                </article>
                <article class="feature2">
                    <input type="checkbox" id="feature2" name="selectedwastes" value="paper" onChange={handleChange}/>
                    <div className='flex justify-start space-x-5 px-4'>
                      <img src={Image2} alt="mwaste" className='w-8 h-8' />
                      <h5 className="text-lg font-semibold text-blue-500 dark:text-light">
                          Paper wastes
                        </h5>
                    </div>
                </article>
                <article class="feature2">
                    <input type="checkbox" id="feature2" name="selectedwastes" value="organic" onChange={handleChange}/>
                    <div className='flex justify-start space-x-5 px-4'>
                      <img src={Image1} alt="mwaste" className='w-8 h-8' />
                      <h5 className="text-lg font-semibold text-blue-500 dark:text-light">
                          Organic wastes
                        </h5>
                    </div>
                </article>
                <article class="feature2">
                    <input type="checkbox" id="feature2" name="selectedwastes" value="NRWaste" onChange={handleChange}/>
                    <div className='flex justify-start space-x-5 px-4'>
                      <img src={Image5} alt="mwaste" className='w-8 h-8' />
                      <h5 className="text-lg font-semibold text-blue-500 dark:text-light">
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
