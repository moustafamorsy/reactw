import React from 'react'
import avatar from '../img/avataaars.svg'
import './hero.css'
function Hero() {
  return (
    <>
    
    <div className='hero row'>
        <div className='col-md-12 text-center'>
          <img src={avatar} alt="person" className='imag' />
          <h1 className='head'>ABOUT COMPONENT</h1>
          <div className='stars'>
              <div className="linee"></div>
              <i className="fa-solid fa-star"></i>
              <div className="linee2"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    
    </>
  )
}

export default Hero