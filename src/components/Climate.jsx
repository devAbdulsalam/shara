import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SyncLoader from 'react-spinners/SyncLoader'
import Navbar from './Navbar'
// import {LocalStorage} from './LocalStorage'

const Climate = () => {
    // const momentumUser = LocalStorage()
    const location = "Kano"
  const [data, setData] = useState("")
  const [isLoading, setIsLoading] = useState(true)
    useEffect(() =>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=062183c9cb6dd20fe2ce2ea4f552730d`)
        .then((response) =>{
            setData(() => response.data)
            setIsLoading(false)
        }).catch((error) => console.log(error))
    },[])

    console.log(data)
  return (
    <div>
        <Navbar />
        <div className='p-4 mt-10 h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-500'>
            <div className='text-center text-white text-xl font-bold m-3 p-4 '>
            {isLoading ? <SyncLoader  color="#36d7b7" size={6} /> : 
            <div>
                <p className='font-bold'><ion-icon name="location" size="large"></ion-icon> {data.name}<span> {data.sys.country}.</span></p>
                <div className='flex flex-col justify-around items-center'>
                    <div className='p-2 m-4 debug'>
                        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} className="w-28 h-28 object-fit" alt="icon"></img>
                    </div>
                    <p className="my-4'">Its {data.weather[0].description[0].toUpperCase() + data.weather[0].description.substring(1)}</p>
                    <p className='text-7xl text-center p-5 my-4'>{data.main.temp.toFixed(0)}<span className='text-blue-300'>&deg;<sup>c</sup></span></p>
                </div>
                <div className='flex justify-between items-center text-center gap-4 mt-16'>
                    <div className='flext flex-col justify-center'>                       
                        <img src="https://img.icons8.com/fluency/48/000000/partly-cloudy-day.png"className=' mx-auto' alt="icon"></img>
                        <p>{data.main.pressure}</p>
                        <p>Sun</p>
                    </div>
                    <div className='flext flex-col justify-center '>
                        <img src="https://img.icons8.com/emoji/48/000000/cloud-with-rain-emoji.png" className=' mx-auto' alt="icon"></img>
                        <p>{data.main.humidity}</p>
                        <p>Humidity</p>
                    </div>
                    <div className='flext flex-col justify-center'>         
                        <img src="https://img.icons8.com/fluency/48/000000/torrential-rain.png" className='mx-auto' alt="icon"></img>
                        <p>{data.wind.speed}</p>
                        <p>Wind</p>
                    </div>
                </div>
            </div>
            }
            </div>
        </div>
    </div>
  )
}

export default Climate