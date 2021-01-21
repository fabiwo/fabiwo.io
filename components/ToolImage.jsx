import React from 'react'
import Image from 'next/image'

export default function ToolImage({ src, alt }) {
  return <img className='w-7 h-7' src={src} alt={alt} loading='lazy' />
}
