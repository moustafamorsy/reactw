import React, { useState } from 'react'
import './portfolio.css'
import a from '../img/poert1.png'
import b from '../img/port2.png'
import d from '../img/port3.png'
import Lightbox from '../modals/Lightbox'
function Portfolio() {

  const [show , setShow] = useState(false)
  const [img , setImg] = useState('')

function lightBox(img) {
console.log('hi');
   setShow(prev => !prev)
    setImg(img) 
  console.log(img);
}
function close() {
  console.log('hi');
     setShow(prev => !prev)
}

  return (
    <>
  

    <div className='container portfolio'>
        <h1>PORTFOLIO COMPONENT</h1>
        <div className='star'>
            <div className="line"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line2"></div>
        </div>
      <div className='row g-3'>
        <div className='col-md-6 col-lg-4'>
          <div className='position-relative item'> 
            <img  src={a} alt="red" className='position-relative w-100 image rounded-3' />
            <div onClick={() => lightBox(a)} className='overlay text-center'>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-4'>
          <div className='position-relative item'>
            <img  src={b} alt="white" className='position-relative  w-100 image rounded-3' />
            <div onClick={() => lightBox(b) } className='overlay text-center'>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-4'>
          <div className='position-relative item'>
              <img  src={d} alt="blue" className='position-relative  w-100 image rounded-3' />
              <div onClick={() => lightBox(d) } className='overlay text-center'>
                <i className='text-white fa-solid fa-plus fa-6x'></i>
              </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-4'>
          <div className='position-relative item'>
            <img  src={a} alt="white" className='position-relative  w-100 image rounded-3' />
            <div onClick={() => lightBox(a) } className='overlay text-center'>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-4'>
          <div className='position-relative item'>
            <img  src={b} alt="blue" className='position-relative  w-100 image rounded-3' />
            <div onClick={() => lightBox(b) } className='overlay text-center'>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-4'>
          <div className='position-relative item'>
            <img  src={d} alt="red" className='position-relative w-100 image rounded-3' />
            <div onClick={() => lightBox(d) } className='overlay text-center'>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {show ? <Lightbox close={close} img={img}/> : null}
    </>
  )
}

export default Portfolio