import React from 'react'

export default function ResponsiveSectionHeading({ text }) {
  return (
    <h1 className='px-10 py-2 mb-10 text-3xl bg-black rounded shadow text-blue-50 center'>
      {text}
    </h1>
  )
}
