import React from 'react'
import './form.css'
function Form() {
  return (
   <>

   <div className='container form-sec'>
      <h1>CONATCT SECTION</h1>
      <div className='star'>
          <div className="line"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line2"></div>
      </div>
      <div class=' d-flex justify-content-center align-items-center'>
          <div class="row ps-3 pe-3 mt-5">
                    <div className="col-md-12 col-lg-12">
                        <input type="text" class="form-control rounded-2 mb-3" id="exampleFormControlInput1" placeholder="userName" />
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <input type="email" class="form-control rounded-2 mb-3" id="exampleFormControlInput1" placeholder="userAge" />
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <input type="email" class="form-control rounded-2 mb-3" id="exampleFormControlInput1" placeholder="userEmail" />
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <input type="email" class="form-control rounded-2 mb-3" id="exampleFormControlInput1" placeholder="userpassowrd" />
                    </div>
                    <div className="col-md-10 sub-btn mt-3">
                        <button type="button" class="btn btnn rounded-1">Send Message</button>
                    </div>
          </div>
      </div>
   </div>



        
   
   </>
  )
}

export default Form