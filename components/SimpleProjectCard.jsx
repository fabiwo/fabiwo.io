import Link from 'next/link'

const SimpleProjectCard = ({ id, title, description, img }) => {
  return (
    <Link href={`/projects/${id}`}>
      <div className='cursor-pointer flex flex-col p-4 rounded border border-gray-200 focus-within:border-gray-300 hover:border-gray-300'>
        <img className='w-8 h-8 mb-4' src={img} alt='' />
        <div>
          <h4 className='text-xl font-bold tracking-tight text-gray-900 mb-2'>
            {title}
          </h4>
          <p className='leading-5 text-gray-700'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default SimpleProjectCard
