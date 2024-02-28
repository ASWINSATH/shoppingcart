import React from 'react'
import Favoritecard from '../UI/Favoritecard'
import Rectangle from '../../../../assets/images/Rectangle.png';
import tshirt from '../../../../assets/images/tshirt.png'



function Favoritesection() {
    return (
        <div className="lg:mx-20 mx-10">
            <div className="flex mt-5">
                <img src={Rectangle} alt="" className="lg:w-5 w-2.5 lg:h-10 h-6" />
                <h2 className="text-[#3E56A2] font-bold lg:p-2 p-1  lg:text-base text-xs">Popular</h2>
            </div>

            <div className="grid lg:gap-10 md:gap-5 lg:grid-cols-4 grid-cols-2 mb-36">
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
                <Favoritecard img={tshirt} label="Men's Ice-Dye Pullover Hoodie" price="₹128.97"/>
            </div>
        </div>



    )
}

export default Favoritesection