import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <h1>Steep</h1>
                <p>Steep is a fictional brand created by</p>
            </div>
            <ul className='footer-links'>
                <li><a href='/'>Home</a></li>
                <li><a href='/shop'>Shop</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
            <div className='footer-social'>
                <a href='https://www.facebook.com/'><i className='fab fa-facebook-f'></i></a>
                <a href='https://www.instagram.com/'><i className='fab fa-instagram'></i></a>
                <a href='https://www.twitter.com/'><i className='fab fa-twitter'></i></a>
                <a href='https://www.youtube.com/'><i className='fab fa-youtube'></i></a>
            </div>
            <div className='footer-copyright'>
                <p>© 2023 Steep UI. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;