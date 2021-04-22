import Link from 'next/link'

const SimpleProjectCard = ({ id, title, description, img }) => {
  return (
    <Link href={`/projects/${id}`}>
      <div className='flex items-center p-4 bg-white border border-gray-200 rounded shadow cursor-pointer dark:border-gray-800 dark:bg-outer-space-600 hover:shadow-md'>
        <img className='w-10 h-10 mr-4 min-w-sm' src={img} alt='' />
        <div>
          <h4 className='text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100'>
            {title}
          </h4>
          <p className='leading-5 text-gray-700 dark:text-gray-300'>
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default SimpleProjectCard
