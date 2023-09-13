import React from 'react'
import './lightbox.css'

function Lightbox(props) {
  return (
<>

<div onClick={props.close} className='over'/>
<div className='display'>
<img src={props.img} alt="props" />
</div>




</>


    )
}

export default Lightbox