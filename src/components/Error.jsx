import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='mt-3 w-100'>
        <p className=' alert alert-danger p-2 w-75 m-auto'>{mensaje}</p>
    </div>
  )
}

export default Error