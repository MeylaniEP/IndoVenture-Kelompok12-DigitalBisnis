import React from 'react'
import Testimony from './testimony/Testimony'

function Reviews() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 text-dark fw-bold fs-1'>
      <div>
        <h1>Review Clients</h1>
      </div>
      <div>
        <Testimony />
      </div>
    </div>
  )
}

export default Reviews
