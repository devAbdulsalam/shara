import React, {useState} from 'react'
import Navbar from './Navbar'
import Img from '../assets/userImage.png'

const Profile = () => {
  const [phone, setPhoneNumber] = useState(''); 
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center">
        <div class="lg:mt-0 lg:col-span-5 lg:flex rounded-full p-10">
              <img className='py-5' src={Img} alt="hero" />
            </div>
            <div class="mr-auto place-self-center lg:col-span-7 md:text-left text-center">
            <input
                  onChange={(e) => setName(e.target.value)}
                  className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  value={name}
                  placeholder="Name"
                  autoComplete="text"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="phone"
                  placeholder="Phone Number"
                  autoComplete="phone"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              <div class="space-y-4 sm:flex md:justify-start justify-center sm:space-y-0 sm:space-x-4 py-1">
              
              </div>
            </div>
      </div>
    </div>
  )
}

export default Profile
