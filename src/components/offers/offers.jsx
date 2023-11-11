import React from "react";
import './offers.css';

const saleImgUrl = 'https://images.pexels.com/photos/6127105/pexels-photo-6127105.jpeg';
const Offers = () => {
    return (
        <div className='offers'>
            <div className='offers-left'>
                <div className='offers-left-text'>
                    <h1>Exclusive</h1>
                    <h1>Offers for you</h1>
                    <p>Offers for you</p>
                    <p>Bestseller products</p>
                    <button>Check Now</button>
                </div>
            </div>
            <div className='offers-right'>
                <div className='offers-right-text'>
                    <img src={saleImgUrl} alt={"Sale offers"} width='300px' />
                </div>
            </div>
        </div>
    );
}

export default Offers;