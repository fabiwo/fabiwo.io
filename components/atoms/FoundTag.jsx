import React from 'react'

const FoundTag = ({ number }) => {
  return (
    <div className='mx-auto mb-3 text-white bg-gray-900 rounded shadow px-7 text-md'>
      <strong className='text-red-600'>{number}</strong> Posts
    </div>
  )
}

export default FoundTag
