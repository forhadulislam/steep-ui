import React, {useState} from "react";

import "./navbar.css";
import logo from "../../logo.svg";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='navbar_logo'>
                <img src={logo} alt='logo' width='128' />
            </div>
            <ul className='navbar_menu'>
                <li onClick={()=>{setMenu("shop")}} className='selected'><Link to='/'>Shop</Link></li>
                <li onClick={()=>{setMenu("categories")}}><Link to='/categories'>Categories</Link></li>
                <li onClick={()=>{setMenu("cart")}}><Link to='/cart'>Cart</Link></li>
            </ul>
            <div className='navbar_search'>
                <Link to='/login'><button>Login</button></Link>
            </div>
        </div>
    );
}

export default Navbar;