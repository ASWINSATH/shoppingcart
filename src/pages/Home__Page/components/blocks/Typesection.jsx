import React from 'react';
import Rectangle from '../../../../assets/images/Rectangle.png';
import hoodies from '../../../../assets/images/hoodies.png';
import shoes from '../../../../assets/images/shoes.png';
import bags from '../../../../assets/images/bags.png';
import glasses from '../../../../assets/images/glasses.png';
import trousers from '../../../../assets/images/trousers.png';
import Typecard from '../UI/Typecard';

function Typesection() {

    return (

        <div className="lg:mx-20 mx-10 lg:mt-10 mt-4">
            <div className="flex justify-between">
                <div className="flex">
                    <img
                        src={Rectangle}
                        alt=""
                        className="lg:w-5 w-2.5 lg:h-10 h-6"
                    />
                    <h2 className="text-[#3E56A2] font-bold lg:p-2 p-1 lg:text-base text-xs">Categories</h2>
                </div>
                <span className="flex justify-end">See all</span>
            </div>

            <div className="grid lg:gap-20 gap-6 lg:grid-cols-8 grid-cols-5 lg:mt-10 mt-4">
                
                <Typecard 
                img={hoodies} 
                label="Hoodies" 
                />
                <Typecard 
                img={shoes} 
                label="Shoes"
                />
                <Typecard 
                img={bags}
                label="Bags" 
                />
                <Typecard 
                img={glasses} 
                label="Glasses" 
                />
                <Typecard 
                img={trousers} 
                label="Trousers" 
                />
                <div className='lg:inline-block hidden'>
                <Typecard 
                img={hoodies} 
                label="Hoodies" 
                />
                </div>
                <div className='lg:inline-block hidden'>
                <Typecard 
                img={shoes}
                label="Shoes" 
                />
                </div>
                <div className='lg:inline-block hidden'>
                <Typecard 
                img={bags} 
                label="Bags" 
                />
                </div>

            </div>

        </div>

    )
}

export default Typesection