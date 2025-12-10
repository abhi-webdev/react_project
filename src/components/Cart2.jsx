import React, { useState } from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/CartSlice';
import { toast } from 'react-toastify';

function Cart2({name, id, price, image, qty}) {

    let dispatch = useDispatch()

  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
        {/* // left */}
        <div className='w-[60%] h-full flex gap-[20px]'>
            <div className='w-[50%] h-full overflow-hidden'>
                <img src={image} alt=""  className='object-cover rounded-lg'/>
            </div>
            <div className='w-[40%] h-full flex flex-col gap-5 '>
                <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                <div className='w-[120px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg  font-semibold border-2 border-green-400 text-xl '>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200' onClick={()=>{dispatch(DecrementQty(id))}}>-</button>
                    <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center'>{qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200' onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
                </div>
            </div>
        </div>

        {/* //right */}
        <div className='flex flex-col justify-between p-4'>
            <span className='text-lg font-semibold text-green-400'>Rs {price}</span>
            <button className='ml-4 text-[28px] text-red-400 cursor-pointer' onClick={()=>{dispatch(RemoveItem(id))}}><RiDeleteBinLine /></button>
        </div>
    </div>
  )
}

export default Cart2