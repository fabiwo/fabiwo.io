import Link from 'next/link'
import Date from '@/atoms/Date'
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
      <li className='flex flex-col w-full bg-white border rounded-md shadow cursor-pointer dark:bg-outer-space-600 dark:border-outer-space-500 md:flex-row hover:shadow-md'>
        <div className='relative h-56 md:w-56 md:h-auto'>
          <Image
            src={image ? image : '/static/images/placeholder.svg'}
            alt={alt ? alt : 'Placeholder'}
            className='object-cover rounded-t-md md:rounded-tl-md md:rounded-bl-md md:rounded-tr-none'
            layout='fill'
          />
        </div>
        <div className='flex flex-col max-w-sm py-6 px-7'>
          <h2 className='text-lg font-bold '>{title}</h2>
          <p className='my-2 text-sm text-gray-500 dark:text-gray-300'>
            {description}
          </p>
          <Date dateString={date} />
          {/* &#8226;{views} */}
        </div>
      </li>
    </Link>
  )
}

export function SimpleBlogPost({
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
      <li className='cursor-pointer'>
        <h2 className='mb-1 text-xl font-medium'>{title}</h2>
        <p className='text-gray-500 dark:text-outer-space-300'>{description}</p>
        <Date dateString={date} />
        {/* &#8226;{views} */}
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
  date,
  views,
}) {
  return (
    <Link href={`/blog/${id}`}>
      <article className='relative flex flex-col w-full mb-5 bg-white border rounded-md shadow cursor-pointer hover:shadow-lg'>
        <Image
          width={700}
          height={400}
          className='object-cover w-full rounded-t-md '
          src={image ? image : '/static/images/placeholder.svg'}
          alt={alt ? alt : 'Placeholder'}
        />
        <p className='absolute left-0 px-5 py-1 text-white bg-red-600 rounded-r-md text-md text-bold top-5'>
          NEW! 🔥
        </p>
        <ul className='absolute left-0 flex flex-col space-y-1 top-16'>
          {tags.map((tag, i) => (
            <li
              key={i}
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
