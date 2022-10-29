import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src=''
        alt='/'
      />
      <div className='bg-white fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto text-gray-500 '>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <form
              className='w-full flex flex-col py-4'
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-700 rouded'
                type='email'
                placeholder='Email'
                autoComplete='email'
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-700 rouded'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
              />
             
              <Link to="/dashboard">
              <button className='bg-blue-600 w-full text-white py-3 my-6 rounded font-bold'>              
                Login
              </button>
              </Link>
              
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600'>
                  Already subscribed to Waste2Wealth?
                </span>{' '}
                <Link to='/signin'>Signin</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login
