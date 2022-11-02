import React, {useState} from 'react'
import Navbar from './Navbar'

const Pay = () => {
  const [walletNumber, setWalletNumber] = useState('')
  const [amount, setAmount] = useState('')
  return (
    <div>
      <Navbar />
        <div className="p-1 mt-8 mx-2 py-10">
          <h3>Pay</h3>
          <form >
            <h5 className='font-semibold text-lg'>Enter Recipiant Wallet Number</h5>
            <input type="number" value={walletNumber} onChange={(e) => setWalletNumber(e.value.target)} />
            <div>
              <h5 className='font-semibold text-lg'>Wallet Name</h5>
                <h3>Musa Tanko</h3>
            </div>
            <h5 className='font-semibold text-lg'>Amount</h5>          
            <input type="number" value={amount} onChange={(e) => setAmount(e.value.target)} />
            <button className="button">Pay</button>
         </form>
        </div>
    </div>
  )
}

export default Pay
