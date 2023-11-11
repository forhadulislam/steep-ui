import React from "react";
import "./newsletter.css";

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>Get exclusive offers on your inbox</h1>
            <p>Subscribe to our newsletter and get 10% off your first purchase</p>
            <div className='newsletter-form'>
                <input type='email' placeholder='Your email address' />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default Newsletter;

