import React, {useState, useEffect, useCallback} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Pay = () => {
  const navigate = useNavigate()  
  const {amount}  = useParams()
  const [walletNumber, setWalletNumber] = useState('')
  const [walletName, setWalletName] = useState('')
  // const [amount, setAmount] = useState('')
  const [confirmPin, setConfirmPin] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [confirmPayment, setConfirmPayment] = useState(false)
  const [alert, setAlert] = useState('invisible')
  const [payment, setPayment] = useState('')
  const [pin, setPin] = useState('')
  const confirmWallet = useCallback(() => {
    console.log(typeof walletNumber)
    if(walletNumber === "0123456789"){
        setWalletName("Tanko Mike")
      }
  }, [walletNumber])
    useEffect(() => {
      confirmWallet()
      setPayment({walletNumber, walletName})
    }, [walletNumber, walletName, confirmWallet])
    
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (walletNumber === "") {
      setAlert("visible")
        setTimeout(() => {
          setAlert('invisible')
        }, 2000);
    }else{
      setConfirmPayment(true)
      console.log(payment)
    }
  }
  const handlePayment = ()=>{
    setConfirmPin(true)
    setConfirmPayment(false)
  }
  const handlePin = ()=>{
    if (pin) {
      console.log(pin)
      setShowModal(true)
      setConfirmPin(false)
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
            <p className={`text-lg text-red-500 ${alert}`}>Invalid Wallet Number</p>
            <h5 className='font-semibold text-lg mt-2'>Wallet Name</h5>
            <input type="text" disabled
              className="px-3 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={walletName} />
            <h5 className='font-semibold text-lg mt-2'>Amount</h5>          
            <input type="number"   disabled                           
              className="px-3 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={amount}/>
              <div className='mt-2'>
                <button className="button" type='submit'>Pay</button>
              </div>
         </form>
         {confirmPayment ?
          <div className='absolute w-full h-full top-0 flex place-items-center duration-500'>
            <div className='text-center text-lg bg-green-50 w-10/12 p-4 mx-auto rounded-md shadow-md'>
              <h5 className='font-semibold text-lg mt-2'>Confirm payment</h5>
              <p className='my-1 p-0'>You are about to send {amount}&#8358; to {walletName}</p>
              <button className='bg-red-500 px-8 text-white py-2 mt-2 mx-2 hover:bg-red-400 rounded-md' onClick={() => navigate('/dashboard')}>Cancel</button>
              <button className='bg-green-500 px-8 text-white py-2 mt-2 mx-2 hover:bg-green-400 rounded-md' onClick={handlePayment}>Confirm</button>
            </div>
          </div>
          : ""
          }
         {confirmPin ?
          <div className='absolute w-full h-full top-0 flex place-items-center duration-500'>
            <div className='text-center text-lg bg-green-50 w-72 p-4 mx-auto rounded-md shadow-md'>
              <h5 className='font-semibold text-lg mt-2'>Input Your Pin</h5>
               <input type="number" max="4"                          
              className="px-3 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={pin} onChange={(e) => setPin(e.target.value)} />
              <p className={`text-lg text-red-500 ${alert}`}>Pin is not correct</p>
              <button className='bg-green-500 px-8 text-white py-2 mt-2 hover:bg-green-400 rounded-md' onClick={handlePin}>Ok</button>
            </div>
          </div>
          : ""
          }
         {showModal ?
          <div className='absolute w-full h-full top-0 flex place-items-center duration-500'>
            <div className='text-center text-lg bg-green-50 w-72 p-4 mx-auto rounded-md shadow-md'>
              <div className='text-yellow-300'>
                <ion-icon name="happy" size="large" ></ion-icon>
              </div>
              <p className='p-2'>Payment sucessfull</p>
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
