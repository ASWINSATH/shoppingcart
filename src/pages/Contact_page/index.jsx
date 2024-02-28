import React from 'react';
import lap from '../../assets/images/lap.png';
import Header from '../../components/blocks/Header';
import Footer from '../../components/blocks/Footer';
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";


function Contact() {
    return (

        <div>
            <Header/>
            <div className="lg:h-screen lg:px-20 px-5">
                <div className="grid lg:grid-cols-2 mt-5">
                    <img src={lap} alt="" className='lg:w-[650px] lg:h-[450px] md:w-[730px] md:h-[450px] w-[360px] h-[270px]'/>
                    <div className=" ml-10">
                        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold mt-10">Contact us</h2>
                        <div className="flex mt-14">
                            <div >
                                <p className="font-semibold text-[#3951a1] text-xl">Visit us</p>
                                <p className="mt-3">
                                    2972 Westheimer Rd.
                                    <br /> Santa Ana, Illinois
                                    <br /> 85486
                                </p>
                            </div>
                            <div className="lg:ml-20 md:ml-10 ml-5">
                                <p className="font-semibold text-[#3951a1] text-xl">Contact</p>
                                <p className="mt-3">contact@company.com</p>
                                <p>(406)555-0120</p>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <Input
                                type="password"
                                placeholder="Email"
                                
                            />
                            <div
                                className="bg-[#324fab] rounded-full lg:font-semibold lg:text-lg md:text-lg text-sm lg:mt-7 md:mt-8 mt-6 ml-1 lg:h-[45px] md:h-[40px] h-[35px] lg:w-[140px] md:w-[130px] w-[70px] ">
                               <button className='text-center text-white lg:mt-2 lg:ml-7 md:mt-2 md:ml-7 mt-1 ml-2 '>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Contact