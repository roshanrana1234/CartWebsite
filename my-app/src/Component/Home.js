import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
        <div className='flex  items-center p-3 bg-blue-500 text-white font-black text-3xl' >
            Food Restaurant
        </div>
    <div className='flex justify-center items-center  bg-[#ffffff] mt-10' >
        <Outlet/>
    </div>
    </div>
    </>
  )
}

export default Home