import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <>
    <div>
        <div className='text-white font-bold text-xl bg-blue-700 p-4 flex px-4 gap-2 items-center' >
            <span><ImSpoonKnife/></span>
            Food's Restaurant
        </div>
        <div className='flex justify-center items-center gap-10 flex-col mt-20  text-center' >
            <div className='text-5xl font-light flex flex-col gap-3 ' >
                Welcom's To Foods 
                <div>
                Kitchens
                </div>
            </div>
            <div>
                <Link to="/secondpage" >
                <button className='text-sm p-1 px-3  rounded-md text-white bg-blue-700 hover:bg-blue-400 active:bg-blue-500' >Go To Menu</button>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainPage