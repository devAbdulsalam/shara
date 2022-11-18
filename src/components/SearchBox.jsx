import React, {useState} from 'react'
import limage from "../assets/placeholder.png"

const SearchBox = (props) =>{
  const { setSelectPosition} = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [locations, setLocations] = useState(false);

  const handleOrder = ()=>{
    fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${searchText}`)
    .then((response) => response.text())
    .then((result) => {
        setLocations(true);
        // console.log(JSON.parse(result));
        setListPlace(JSON.parse(result));
      })
      .catch((err) => {
        // console.log("err: ", err)
        console("Network error");
      });
      }
  return (
      <div className="bg-gray-200 w-full shadow-2xl shadow-inner:shadow-md bottom-0 fixed space-y-2 transition-all duration-50">
        {locations &&  <div className='space-y-2 p-2'>
            {listPlace.map((item) => {
              return (
                <div key={item?.place_id}>
                  <div
                    className ="flex place-items-center p-2 hover:bg-gray-50 cursor-pointer"
                    button
                    onClick={() => {
                      setSelectPosition(item);
                      setLocations(false);
                    }}
                  >
                    <span>
                      <img
                        src={limage}
                        alt="Placeholder"
                        style={{ width: 38, height: 38 }}
                      />
                    </span>
                    <h2>{item?.display_name}</h2>
                  </div> 
                </div>
              );
            })}
          </div>}
        <div className="mx-2 pb-5 font-poppins">
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
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={()=> {setLocations(true)}}
                className="border text-gray-700 font-bold border-transparent bg-transparent block w-full placeholder:text-gray-600 placeholder:text-sm focus:outline-transparent focus:border-transparent"
                type="text"
                id="search_input"
                placeholder="Location"
              /> 

            <button onClick={handleOrder}>
              <i className="fa-solid fa-paper-plane cursor-pointer pt-4 mr-6 text-green-500"></i>
              </button>
            </div>
        </div>   
      </div>
  )
}

export default SearchBox