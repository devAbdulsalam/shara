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

  return (
    <div>
        <Navbar />
        <div className='p-4 mt-10'>
            <div className='text-center text-blue-500 text-xl font-bold m-3 shadow-md p-4'>
            {isLoading ? <SyncLoader  color="#36d7b7" size={6} /> : <>
                <div className='flex justify-around items-center'>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="icon"></img>
                    <p className='text-xl'>{data.main.temp.toFixed(0)}&deg;C</p>
                    <p className="">{data.weather[0].description[0].toUpperCase() + data.weather[0].description.substring(1)}</p>
                </div>
                <p className='font-bold'>{data.name}</p>
                </>
            }
            </div>
        </div>
    </div>
  )
}

export default Climate