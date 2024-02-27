import React from 'react';
import apple from '../../../../assets/images/apple.png';
import iphone from '../../../../assets/images/iphone.png';
import { IoMdArrowForward } from "react-icons/io";

function Logosection() {
  return (
        <div class="grid lg:grid-cols-2 md:grid-cols-2 bg-black lg:mx-20 md:mx-10 mx-5 lg:mt-8 mt-4  text-white lg:py-16 md:py-12 py-10 lg:rounded-none rounded-md">
            <div className=" lg:ml-40 md:ml-20 ml-10 lg:mt-10">
                <div className="flex text-white">
                    <img  
                   className="lg:w-14 lg:h-14 w-8 h-8"
                    src={apple} 
                    alt=""/>
                    <h1 class="pl-3 lg:pt-4 pt-2 lg:text-base text-sm">iphone 14 Series</h1>
                </div>
                <h3 
                   className="pt-5 lg:text-6xl md:text-4xl text-2xl font-medium tracking-wider ">
                   Up to 10% <span class="block mt-3">off Voucher</span>
                </h3>
                <div  className="lg:pt-8 pt-4 underline underline-offset-4 flex ">Shop Now
                  <IoMdArrowForward className='w-8 h-8'/>
                </div>
            </div>
            
            <div>
                <div class="lg:mt-8 mt-5 lg:ml-28 ml-4">
                    <img 
                    className="lg:w-[496px] lg:h-[352px] md:w-[410px] md:h-[230px] h-48"
                    src={iphone}
                    alt=""/>
                </div>
                
            </div>
            
        </div>


  )
}

export default Logosection