import React from 'react'

export default function User() {
  return (
    <div className='d-flex align-items-center py-2 my-2 user'>
        <div className='w-25 d-flex justify-content-center'>
            <div className='profileimage'></div>
        </div>
        <div>
            <p>Username</p>
            <small>last message</small>
        </div>
    </div>
  )
}
