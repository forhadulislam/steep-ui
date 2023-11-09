import React, {useState} from "react";

import "./navbar.css";
import logo from "../../logo.svg";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='navbar_logo'>
                <img src={logo} alt='logo' width='128' />
            </div>
            <ul className='navbar_menu'>
                <li onClick={()=>{setMenu("shop")}} className='selected'>Home</li>
                <li onClick={()=>{setMenu("about")}}>About</li>
                <li onClick={()=>{setMenu("contact")}}>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;