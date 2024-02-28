import React from 'react'
import black from '../../assets/images/black.png'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";



const Header =() => {
    // const menuToggle = document.getElementById('menuToggle');
    // const menuItems = document.getElementById('menuItems');

    // menuToggle.addEventListener('click', () => {
    //     menuItems.classList.toggle('hidden');
    // });
    return (
        <div className="lg:border-b">
            <nav className="flex justify-between lg:px-20 md:px-10 px-1 lg:py-10 md:py-5 py-3">

                <div>
                    <img src={black} alt="" className="lg:flex md:flex hidden lg:w-28 md:w-18"/>
                    <button>
                    <RiMenu2Fill className="mt-1 w-6 h-6 lg:hidden md:hidden" id="menuToggle"/>
                    </button>
                </div>

                <div className="lg:flex md:flex hidden lg:justify-between" id="menuItems">
                        <a className="flex flex-col items-center gap-6 lg:flex-row md:flex-row lg:gap-24 md:gap-5">
                        <a href='/HomePage' className="text-blue-700 underline lg:text-xl md:text-sm text-sm lg:-mt-5 md:-mt-6">Home</a>
                        <a href='/ContactPage' className="lg:text-xl md:text-sm text-sm -mt-5">Contact</a>
                        <a href='/AboutPage' className="lg:text-xl md:text-sm text-sm -mt-5">About</a>
                        <a href='/signup' className="lg:text-xl md:text-sm text-sm -mt-5">Sign Up</a>
                    </a>
                </div>

                <div className="relative lg:block md:block hidden">
                    <input 
                    type="search" 
                    placeholder="What are you looking for?"
                    className="bg-[#F5F5F5] lg:h-8 md:h-8 lg:w-64 md:w-56 lg:pl-6 md:pl-2 pl-2 lg:ml-2 ml-3 rounded-md lg:text-md md:text-sm" 
                    />
                    <button className="absolute lg:right-18 top-2 lg:left-56 md:left-48">
                        <IoSearch size={19}/>
                    </button>
                </div>

                <div className="flex justify-around pt-2">
                    <div className="lg:pr-5 md:pr-2">
                      <FiUser className="lg:block md:block hidden w-6 h-6"/>
                      <FaRegHeart className="lg:hidden md:hidden w-4 h-6 " />
                    </div>
                    <div className='ml-2'>
                      <IoCartOutline className="lg:w-7 md:w-7 w-5 lg:h-7 md:h-7 h-6"/>
                    </div>
                </div>

            </nav>

            { <div className="relative lg:hidden md:hidden block mt-4 px-8 pb-2 ">
                    <input 
                    type="search" 
                    placeholder="What are you looking for?"
                    className="bg-[#F5F5F5] w-full rounded-lg py-2 pl-16 text-sm" 
                    />
                    <button className="absolute  left-10 top-2">
                     <IoSearch size={19} className='w-6 h-6'/>
                    </button>
            </div> }
          


        </div>
    )
}

export default Header

