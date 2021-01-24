import React from 'react'
import ToolImage from '../atoms/ToolImage'

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
    <div className='bg-white shadow cursor-pointer hover:shadow-lg rounded-xl project-holder'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <div className='relative p-2 pb-0'>
          <div className='h-64 md:h-96 project-image'></div>
          <div className='absolute top-0 flex flex-col p-2 space-y-1 right-5'>
            <h6 className='text-xs font-light text-right text-white md:text-lg'>
              TECH STACK
            </h6>
            <div className='flex space-x-3'>
              {tools.map((tool, i) => (
                <ToolImage key={i} {...tool} />
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col p-10'>
          <div></div>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <h6 className='pb-4 font-light text-gray-500 md:text-lg '>
              {category}
            </h6>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
