import React from 'react'
import Navbar from './Navbar'
import Img from '../assets/userImage.png'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center">
        <div className="rounded-full"><img src={Img} alt="" /></div>
      </div>
    </div>
  )
}

export default Profile
