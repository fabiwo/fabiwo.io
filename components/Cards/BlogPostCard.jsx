import Link from 'next/link'
import Date from '@/components/Date'
import Image from 'next/image'

export default function BlogPostCard({
  id,
  title,
  description,
  image,
  date,
  alt,
}) {
  return (
    <Link href={`/blog/${id}`}>
      <li className='flex flex-col w-full bg-white border rounded-md shadow cursor-pointer md:flex-row hover:shadow-md'>
        <div className='relative h-56 md:w-56 md:h-auto'>
          <Image
            src={image || '/static/images/placeholder.svg'}
            alt={alt || 'Placeholder'}
            className='object-cover rounded-t-md md:rounded-tl-md md:rounded-bl-md md:rounded-tr-none'
            layout='fill'
          />
        </div>
        <div className='flex flex-col max-w-sm py-6 px-7'>
          <h2 className='text-lg font-bold '>{title}</h2>
          <p className='my-2 text-sm text-gray-500'>{description}</p>
          <Date dateString={date} />
        </div>
      </li>
    </Link>
  )
}

export function SimpleBlogPost({ id, title, description, date }) {
  return (
    <Link href={`/blog/${id}`}>
      <li className='cursor-pointer'>
        <Date dateString={date} />
        <h2 className='my-1.5 text-xl text-gray-800 font-medium'>{title}</h2>
        <p className='text-gray-600'>{description}</p>
      </li>
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
}) {
  return (
    <Link href={`/blog/${id}`}>
      <article className='relative flex flex-col w-full mb-5 bg-white border rounded-md shadow cursor-pointer hover:shadow-lg'>
        <Image
          width={700}
          height={400}
          className='object-cover w-full rounded-t-md '
          src={image || '/static/images/placeholder.svg'}
          alt={alt || 'Placeholder'}
        />
        <p className='absolute left-0 px-5 py-1 text-white bg-red-600 rounded-r-md text-md text-bold top-5'>
          NEW! 🔥
        </p>
        <ul className='absolute left-0 flex flex-col space-y-1 top-16'>
          {tags.map((tag) => (
            <li
              key={tag}
              className='px-4 py-1 text-white bg-black rounded-r-md text-md'
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
