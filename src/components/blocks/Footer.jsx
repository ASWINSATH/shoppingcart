import React from 'react'
import Qrcode from '../../assets/images/Qrcode.png'
import gpay from '../../assets/images/gpay.png'
import appstore from '../../assets/images/appstore.png'
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";  
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { PiPaperPlaneRightLight } from "react-icons/pi";



function Footer() {
  return (
    <div>
        
    <footer>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:pt-14 pt-2 text-white bg-black lg:px-20 px-2 lg:mt-10 mt-8">

            <div className='md:pb-10 lg:pb-20 pb-10'>
                <h1 className="lg:text-xl text-large">Exclusive</h1>
                <div className="lg:text-sm text-xs lg:pt-5 pt-2">
                    <h3 className="lg:py-2 py-1 pt-2">Subscribe</h3>
                    <h3 className="lg:py-2 py-1 pt-2">Get 10 % your first order</h3>
                    <div className="relative lg:pt-2 pt-2">
                        <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="border-2 border-white bg-black lg:text-sm text-xs lg:w-52 md:w-40 w-36 lg:h-8 h-7 lg:px-2 px-1"
                        />
                        <button className="absolute lg:left-44 md:left-32 left-28 lg:pt-2 pt-1">
                        <PiPaperPlaneRightLight size={19}/>
                        </button>
                    </div>
                </div>
            </div>

            <div className='md:pb-10 lg:pb-20 pb-10'>
                <h1 className="lg:text-xl text-large">Support</h1>
                <div className="lg:text-sm text-xs lg:pt-5 pt-2">
                    <h3 className="lg:py-2 py-1 pt-2">111 Bijoy sarani,Dhaka,DH <span class="block">1515,Bangladesh</span></h3>
                    <h3 className="lg:py-2 py-1 pt-2">exclusive@gmail.com</h3>
                    <h3 className="lg:py-2 py-1 pt-2">+88015-88888-9999</h3>
                </div>
            </div>

            <div className='md:pb-10 lg:pb-20 pb-10'>
                <h1 className="lg:text-xl text-large lg:ml-7">Account</h1>
                <div className="lg:text-sm text-xs lg:pt-5 pt-2 lg:ml-7">
                    <h3 className="lg:py-2 py-1">My Account</h3>
                    <h3 className="lg:py-2 py-1">Login / Register</h3>
                    <h3 className="lg:py-2 py-1">Cart</h3>
                    <h3 className="lg:py-2 py-1">Wishlist</h3>
                    <h3 className="lg:py-2 py-1">Shop</h3>
                </div>
            </div>

            <div className='md:pb-10 lg:pb-20 pb-10'>
                <h1 className="lg:text-xl text-large lg:ml-2">Quick Link</h1>
                <div className="lg:text-sm text-xs lg:pt-5 pt-2 lg:ml-2">
                    <h3 className="lg:py-2 py-1">Privacy Policy</h3>
                    <h3 className="lg:py-2 py-1">Terms Of Use</h3>
                    <h3 className="lg:py-2 py-1">FAQ</h3>
                    <h3 className="lg:py-2 py-1">Contact</h3>
                </div>
            </div>

            <div className="md:pb-10 lg:pb-20 pb-10">
                <h1 className="lg:text-xl text-sm">Download App</h1>
                <div className="lg:text-sm text-xs lg:pt-5 pt-2">
                    <h3 className="lg:py-2 py-1">Save $3 with App New User only</h3>
                    <div className="flex lg:mt-2 mt-1">
                        <div className='mr-5'>
                            <img src={Qrcode} alt=""/>
                        </div>
                        <div>
                            <div>
                                <img src={gpay} alt=""/>
                            </div>
                            <div>
                                <img src={appstore} alt="" className="lg:mt-3 mt-3"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex lg:mt-8 mt-3">
                    <div><SlSocialFacebook size={24}/></div>
                    <div><CiTwitter size={24} className='ml-3'/></div>
                    <div><FaInstagram size={24} className='ml-3'/></div>
                    <div><RiLinkedinLine size={24} className='ml-3'/></div>
                </div>
            </div>

        </div>

        <div class="attribution text-slate-500 bg-black lg:text-center md:text-center">
          <h2>ERE Business Solutions 2023. All right reserved</h2>
        </div>
    </footer>
    </div>
  )
}

export default Footer