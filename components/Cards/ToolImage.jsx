import Image from 'next/image'

export default function ToolImage({ src, alt }) {
  return (
    <div>
      <Image src={src} alt={alt} loading='lazy' width={20} height={20} />
    </div>
  )
}
