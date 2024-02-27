import React from 'react'
import black from '../../assets/images/black.png'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";



const Header =() => {
    const menuToggle = document.getElementById('menuToggle');
    const menuItems = document.getElementById('menuItems');

    menuToggle.addEventListener('click', () => {
        menuItems.classList.toggle('hidden');
    });
    return (
        <div>
            <nav className="flex justify-between lg:px-20 md:px-10 px-1 lg:py-10 md:py-5 py-3">

                <div>
                    <img src={black} alt="" className="lg:flex md:flex hidden lg:w-28 md:w-18"/>
                    <button onClick={menuToggle}>
                    <RiMenu2Fill className="mt-1 w-6 h-6 lg:hidden md:hidden" id="menuToggle"/>
                    </button>
                </div>

                <div className="lg:flex md:flex hidden lg:justify-between" id="menuItems">
                        <a href='' className="flex flex-col items-center gap-6 lg:flex-row md:flex-row lg:gap-8">
                        <a href='' className="text-blue-700 underline lg:text-xl md:text-xl text-md lg:-mt-5">Home</a>
                        <a href='' className="lg:text-xl md:text-xl text-md -mt-5">Contact</a>
                        <a href='' className="lg:text-xl md:text-xl text-md -mt-5">About</a>
                        <a href='' className="lg:text-xl md:text-xl text-md -mt-5">Sign Up</a>
                    </a>
                </div>

                <div className="relative lg:block md:block hidden">
                    <input 
                    type="search" 
                    placeholder="What are you looking for?"
                    className="bg-[#F5F5F5] h-8 w-72 lg:pl-2 pl-2 lg:ml-2 ml-3 rounded-md" 
                    />
                    <button class="absolute lg:right-16 right-5 top-2 left-56">
                        <IoSearch size={19}/>
                    </button>
                </div>

                <div className="flex justify-around pt-2">
                    <div className="pr-5">
                      <FiUser className="lg:block md:block hidden w-6 h-6"/>
                      <FaRegHeart className="lg:hidden md:hidden w-5 h-5" />
                    </div>
                    <div className='mr-4'>
                      <IoCartOutline className="w-6 h-6"/>
                    </div>
                </div>

            </nav>

            { <div className="relative lg:hidden md:hidden block mt-4 px-8 pb-2 ">
                    <input 
                    type="search" 
                    placeholder="What are you looking for?"
                    className="bg-[#F5F5F5] w-full rounded-lg py-2 pl-16 text-sm" 
                    />
                    <button class="absolute  left-10 top-2">
                     <IoSearch size={19} className='w-6 h-6'/>
                    </button>
            </div> }
          


        </div>
    )
}

export default Header

