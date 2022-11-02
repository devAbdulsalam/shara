import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Pay = () => {
  const navigate = useNavigate()
  const [walletNumber, setWalletNumber] = useState('')
  const [walletName, setWalletName] = useState("Tanko Mike")
  const [amount, setAmount] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [payment, setPayment] = useState('')
    useEffect(() => {
      setPayment({walletNumber, walletName, amount})
    }, [walletNumber, walletName, amount])
    
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (walletNumber && walletName && amount) {
      console.log(payment)
      setShowModal(true)
    }
  }
  return (
    <div>
      <Navbar />
        <div className="p-1 mt-8 mx-2 py-10 min-h-screen relative">
          <h3 className='text-center text-2xl font-semibold m-4'>Pay</h3>
          <form onSubmit={handleSubmit}>
            <h5 className='font-semibold text-lg'>Enter Wallet Number</h5>
            <input type="number"
              className="px-3 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={walletNumber} onChange={(e) => setWalletNumber(e.target.value)}  />
            <h5 className='font-semibold text-lg mt-2'>Wallet Name</h5>
            <input type="text"
              className="px-3 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={walletName} onChange={(e) => setWalletName(e.target.value)}  />
            <h5 className='font-semibold text-lg mt-2'>Amount</h5>          
            <input type="number"                           
              className="px-3 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={amount} onChange={(e) => setAmount(e.target.value)} />
              <div className='mt-2'>
                <button className="button" type='submit'>Pay</button>
              </div>
         </form>
         {showModal ?
          <div className='absolute w-full h-full top-0 flex place-items-center duration-500'>
            <div className='text-center text-lg bg-white w-72 p-4 mx-auto rounded-md shadow-md'>
              <ion-icon name="good" size="large"></ion-icon>
              <p className='p-2'>payment sucessfull</p>
              <button className='bg-green-500 px-8 text-white py-2 mt-2 hover:bg-green-400 rounded-md' onClick={() => navigate('/dashboard')}>Ok</button>
            </div>
          </div>
          : ""
          }
        </div>
    </div>
  )
}

export default Pay
