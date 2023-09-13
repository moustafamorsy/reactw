import React from 'react'
import './footer.css'
function Footer() {
  return (
    <>

    
      <div className='footer-content row g-0 gy-5'>
          <div className='col-md-6 col-lg-4'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className='col-md-6 col-lg-4'>
            <h3>AROUND THE WEB</h3>
            <div className='icons'>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-solid fa-globe"></i>
            </div>
          </div>

          <div className='col-md-6 col-lg-4'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed</p>
            <p>Bootstrap theme created by Route</p>
          </div>
      </div>
      <p  className='footer'>
      Copyright © Your Website 2021
      </p>
    </>
  )
}

export default Footer