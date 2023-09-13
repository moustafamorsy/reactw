import React from 'react'
import './about.css'

function About() {
  return (
    <>
    <div className='about'>
      <h1 className='head'>ABOUT COMPONENT</h1>
      <div className='stars'>
          <div className="linee"></div>
          <i className="fa-solid fa-star"></i>
          <div className="linee2"></div>
      </div>
    <div className="container">
      <div className="row px-5">
        <div className="col-md-6 ps-md-5"><p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
        </div>
        <div className="col-md-6 pe-5"><p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p></div>
        </div>
    </div>
   
</div>
</>
  )
}



export default About