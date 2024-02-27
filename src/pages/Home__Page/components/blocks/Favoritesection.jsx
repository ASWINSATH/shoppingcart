import React from 'react'
import Favoritecard from '../UI/Favoritecard'
import Rectangle from '../../../../assets/images/Rectangle.png';
import tshirt from '../../../../assets/images/tshirt.png'



function Favoritesection() {
    return (
        <div class="lg:mx-20 mx-10">
            <div class="flex mt-5">
                <img src={Rectangle} alt="" class="lg:w-5 w-2.5 lg:h-10 h-6" />
                <h2 class="text-[#3E56A2] font-bold lg:p-2 p-1  lg:text-base text-xs">Popular</h2>
            </div>

            <div class="grid lg:gap-10 md:gap-5 lg:grid-cols-4 grid-cols-2 mb-36">
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