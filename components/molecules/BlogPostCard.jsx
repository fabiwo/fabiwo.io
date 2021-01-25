import React from 'react'
import Link from 'next/link'
import Date from '../atoms/Date'
import Image from 'next/image'

export default function BlogPostCard({
  id,
  title,
  description,
  image,
  tags,
  date,
  alt,
  views,
}) {
  return (
    <Link href={`/blog/${id}`}>
      <article className='flex flex-col w-full mb-3 bg-white bg-opacity-50 rounded-lg shadow cursor-pointer md:flex-row hover:shadow-md hover:bg-opacity-100'>
        <img
          className='object-cover rounded-t-lg max-h-52 md:rounded-l-lg md:rounded-t-none md:w-64 md:max-h-full'
          src={image ? image : '/static/images/placeholder.svg'}
          alt={alt ? alt : 'Placeholder'}
          loading='lazy'
        />
        <div className='flex flex-col max-w-sm py-7 px-7'>
          <h2 className='text-xl font-bold '>{title}</h2>
          <p className='my-2 text-gray-500 '>{description}</p>
          <ul className='flex mb-5 space-x-1'>
            {tags.map((tag, i) => (
              <li
                key={i}
                className='text-sm rounded py-0.5 px-2 text-white bg-gray-900'
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className='mt-auto text-sm text-gray-500'>
            <Date dateString={date} />
            {/* &#8226;{views} */}
          </p>
        </div>
      </article>
    </Link>
  )
}

export function NewestBlogPostCard({
  id,
  title,
  description,
  tags,
  image,
  alt,
  date,
  views,
}) {
  return (
    <Link href={`/blog/${id}`}>
      <article className='relative flex flex-col w-full mb-5 bg-white rounded-lg shadow cursor-pointer hover:shadow-lg'>
        <Image
          width={700}
          height={400}
          className='object-cover w-full rounded-t-lg '
          src={image ? image : '/static/images/placeholder.svg'}
          alt={alt ? alt : 'Placeholder'}
        />
        <p className='absolute left-0 px-5 py-1 text-white bg-red-600 rounded-r text-md text-bold top-5'>
          NEW! 🔥
        </p>
        <ul className='absolute left-0 flex flex-col space-y-1 top-16'>
          {tags.map((tag, i) => (
            <li
              key={i}
              className='px-4 py-1 text-white bg-black rounded-r text-md'
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className='flex flex-col flex-grow p-10'>
          <h1 className='text-2xl font-bold mb-0.5'>{title}</h1>
          <h3 className='mb-1 text-lg text-gray-600'>{description}</h3>
        </div>
      </article>
    </Link>
  )
}
