import React from 'react'
import { FaRegHeart } from "react-icons/fa";



const Favoritecard = ({ img, label, price }) => {
  return (

    <div className='mt-10 bg-gray-100 lg:w-[310px] md:w-[280px] w-[150px] rounded-lg'>
       <div className='pt-3 pr-3 flex justify-end'>
         <FaRegHeart className='lg:w-5 md:w-5 w-4 lg:h-5 md:h-5 h-4'/>
       </div>

      <div className="flex justify-center">
        <img
          src={img}
          alt={label}
          className=" lg:w-36 md:w-28 w-20 lg:h-48 md:h-34 h-26" 
          />
      </div>
      <p className='ml-3 mt-3 lg:text-base md:text-base text-sm '>{label}</p>
      <p className='ml-3 my-3 lg:text-base md:text-base text-sm'>{price}</p>

    </div>
  )
}

export default Favoritecard