import React from 'react'
import F1 from "../assets/f1.png"
import Foot from "../assets/footer.png"

function Footer() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 text-light fw-bold fs-1'>
      <div>
        <img src={F1} className='img-fluid' alt="" />
      </div>
      <div>
        <img src={Foot} className='img-fluid' alt="" />
      </div>
    </div>
  )
}

export default Footer
