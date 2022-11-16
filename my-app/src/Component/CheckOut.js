import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { BsFillCartFill } from "react-icons/bs";
const CheckOut = () => {
  return (
    <>
       <div className='text-white font-bold text-xl bg-blue-700 p-4 flex px-4 gap-2 items-center justify-between' >
            <div className='text-white font-bold text-xl flex px-4 gap-2 items-center' >
            <span><ImSpoonKnife/></span>
            Food's Restaurant
            </div>
        </div>

<div className='w-9/12 mx-auto' >
    <div className='flex justify-center items-center my-20 flex-col' >
        <div className='text-3xl font-semibold' >CheckOut</div>
    </div>
        <div>Thank You for Your Order</div>
<br></br>
<br></br>
<hr className='h-1 border bg-black' ></hr>
</div>
    </>
  )
}

export default CheckOut