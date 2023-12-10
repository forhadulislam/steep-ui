import React from "react";

import "./css/login-signup.css";

const LoginSignup = () => {
    return (
        <div className='login-signup'>
            <div className="login-signup-container">
                <h1>Signup</h1>
                <div className='login-signup-fields'>
                    <input type="text" placeholder="Your name"/>
                    <input type="email" placeholder="Your email"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="login-signup-login">Already have an account? <span>Login here</span></p>
                <div className='login-signup-agree'>
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, you agree to accept our Privacy Policy & Terms of Service.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;