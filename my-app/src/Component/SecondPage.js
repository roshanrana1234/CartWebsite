import React,{useEffect} from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { fetchItems } from '../features/Cart/CartSlice';
import Data from '../data/feed.json'
import { add ,remove} from '../features/Cart/DataSlice';

const SecondPage = () => {
    const items = useSelector((state)=>state.data)
    const dispatch = useDispatch()
// const items = useSelector((state)=> state.items)

    useEffect(() => {
    //  dispatch(fetchItems())
    },[])
    
    if(Data) {
        console.log(Data)
    }
    const handleAdd = (product) =>{
      dispatch(add(product))
    }
    const handleRemove = (productId) =>{
        dispatch(remove(productId))
      }
  return (
    <>
     <div>
        <div className='text-white font-bold text-xl bg-blue-700 p-4 flex px-4 gap-2 items-center justify-between' >
            <div className='text-white font-bold text-xl flex px-4 gap-2 items-center' >
            <span><ImSpoonKnife/></span>
            Food's Restaurant
            </div>
            <Link to="/cartlist" >
            <div className='text-white  flex items-center ' >
             <BsFillCartFill/>
             <span className='text-white font-bold text-xs ' >{items.length}</span>
            </div>
            </Link>
        </div>

<div className='max-w-lg mx-auto p-4' >
    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' >
        {
            Data.map((value,index)=>{
                return (
                    <div key={index} >
                        <div className='bg-gray-200 flex flex-col gap-2 p-3' >
                          <div className='w-full  h-54  flex justify-center items-center ' > 
                            <img className='w-full object-contain h-full' 
                            src={value.image} alt="image" />
                            {/* src="https://m.media-amazon.com/images/I/71tTYGmAMGL._SX522_.jpg" alt="image" /> */}
                          </div>
                          <div> {value.name} </div>
                          <div className='text-xs' > Price:{value.price} </div>
                          <div className='flex gap-2' >
                            <button 
                            onClick={ ()=> handleAdd(value)}
                            className='text-white font-bold bg-blue-500 px-6 py-1 rounded-md hover:bg-blue-700 active:bg-blue-400' >+</button>
                            <button 
                            onClick={ ()=> handleRemove(value.id)}
                            className='text-white font-bold bg-gray-500 px-6 py-1 rounded-md hover:bg-gray-700 active:bg-gray-400' >-</button>
                          </div>
                          </div>
                    </div>
                )
            })
        }
    </div>
</div>

        {/* <div>
            {items.loading && <div> Loading... </div> }
            {!items.loading && items.error ? <div> Error : {items.error} </div>:null }
            {!items.loading && items.data.length ? (
                <ul>
                    {
                        items.data.map((value,index)=>{
                            return (
                                <div key={index} >
                                    {value.img}
                                </div>
                            )
                        })
                    }
                </ul>
            ):null }
        </div> */}
        
      
    </div>
    </>
  )
}

export default SecondPage