import Link from 'next/link'

const SimpleProjectCard = ({ dir, id, title, description, img }) => {
  return (
    <Link href={`/${dir}/${id}`}>
      <div className='bg-white cursor-pointer flex flex-col p-4 rounded border border-zinc-200 focus-within:border-zinc-300 hover:border-zinc-300'>
        <img className='w-8 h-8 mb-4' src={img} alt='' />
        <div>
          <h4 className='text-xl font-bold tracking-tight text-zinc-900 mb-2'>
            {title}
          </h4>
          <p className='leading-5 text-zinc-700'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export const ExternalProjectCard = ({ href, title, description, img }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-white cursor-pointer flex flex-col p-4 rounded border border-zinc-200 focus-within:border-zinc-300 hover:border-zinc-300'
    >
      <img className='w-8 h-8 mb-4' src={img} alt='' />
      <div>
        <h4 className='text-xl font-bold tracking-tight text-zinc-900 mb-2'>
          {title}
        </h4>
        <p className='leading-5 text-zinc-700'>{description}</p>
      </div>
    </a>
  )
}

export default SimpleProjectCard
