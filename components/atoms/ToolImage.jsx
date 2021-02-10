import Image from 'next/image'

export default function ToolImage({ src, alt }) {
  return (
    <img
      className='w-5 h-5 md:w-7 md:h-7'
      src={src}
      alt={alt}
      loading='lazy'
      width={20}
      height={20}
    />
  )
}
