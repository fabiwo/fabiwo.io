import ToolImage from '@/atoms/ToolImage'
import Centre from '@/atoms/Centre'
import Image from 'next/image'

export default function ProjectItem({
  title,
  description,
  category,
  image,
  alt,
  href,
  tools,
}) {
  return (
    <div className='transition duration-300 ease-out transform bg-white rounded-md shadow cursor-pointer dark:bg-outer-space-600 dark:border-outer-space-500 hover:-translate-y-1 hover:shadow-lg'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <div className='relative'>
          <div className='absolute top-0 flex flex-col pt-5 right-5'>
            <div className='z-50 flex space-x-1'>
              {tools.map((tool, i) => (
                <ToolImage key={i} {...tool} />
              ))}
            </div>
          </div>
          <Image
            src={image}
            alt=''
            width={900}
            height={500}
            className='object-cover rounded-t-md'
            priority={true}
          />
        </div>
        <div className='flex flex-col p-10'>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <h2 className='pb-4 font-light text-gray-500 md:text-lg dark:text-gray-300'>
              {category}
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
