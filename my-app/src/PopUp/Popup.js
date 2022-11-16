import React from 'react'
import { Link } from 'react-router-dom'
const Popup = ({visible, onClose}) => {
    if(!visible) return null
    const handleOnclick = (e) =>{
        if(e.target.id === "container") onClose()
    }
  return (
    <>
    <div 
    id='container'
    onClick={handleOnclick}
    className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' >
       <div className='bg-white p-2 rounded' >
        <div>Order Summary</div>
        <div className='max-w-lg my-10' >
        <div className='flex justify-between w-[500px] items-center gap-4' >
            <div className='flex justify-evenly w-full' >
                <div>
                    Coke:
                </div>
                <div>
                    2
                </div>
            </div>
            <div className='flex gap-2 w-full' >
                <button className='bg-blue-600 px-4 py-2 rounded-lg text-white' >+</button>
                <button className='bg-pink-600 px-4 py-2 rounded-lg text-white' >-</button>
            </div>
        </div>
        </div>
        <div className='flex justify-end' >
            <Link to="/checkout" >
        <button 
       className='uppercase  text-white text-xs font-extrabold bg-blue-500 px-6 py-1 rounded-md hover:bg-blue-700 active:bg-blue-400'
       >Save And CheckOut</button> 
            </Link>
       <button 
       className=' text-blue-600  font-bold  px-6 py-1 rounded-md text-blue'
       onClick={onClose} >Cancle</button> 
        </div>
       </div>
        </div>
    </>
  )
}

export default Popup