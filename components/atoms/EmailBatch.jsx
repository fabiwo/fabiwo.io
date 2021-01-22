import React from 'react'

export default function EmailBatch({ email }) {
  return (
    <a className='p-5 text-lg font-bold text-center text-white bg-red-600 rounded-xl'>
      {email}
    </a>
  )
}
