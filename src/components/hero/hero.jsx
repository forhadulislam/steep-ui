import React from "react";
import "./hero.css";

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>New Arrivals</h2>
                <div className='hero-left-products'>
                  <div>
                      <div>
                          <p>New collections</p>
                          <p>for everyone</p>
                      </div>
                  </div>
                </div>
                <div className='hero-latest-button'>
                    <div>Latest collection</div>
                </div>
            </div>
            <div className='hero-right'>

            </div>
        </div>
    );
}

export default Hero;