import Link from 'next/link'

const SnippetCard = ({ id, title, description, icon }) => {
  return (
    <Link href={`/snippets/${id}`}>
      <div className='flex flex-col p-4 border border-gray-200 rounded cursor-pointer focus-within:border-gray-300 hover:border-gray-300'>
        <img className='object-contain w-8 h-8' src={icon} alt='' />
        <h4 className='mb-1 text-xl font-bold tracking-tight text-gray-900'>
          {title}
        </h4>
        <p className='leading-5 text-gray-700'>{description}</p>
      </div>
    </Link>
  )
}

export default SnippetCard
