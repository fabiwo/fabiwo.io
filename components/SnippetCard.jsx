import Link from 'next/link'

const SnippetCard = ({ id, title, description, icon }) => {
  return (
    <Link href={`/snippets/${id}`}>
      <div className='bg-white flex flex-col p-4 border border-zinc-200 rounded cursor-pointer focus-within:border-zinc-300 hover:border-zinc-300'>
        <img className='object-contain w-8 h-8' src={icon} alt='' />
        <h4 className='mb-1 text-xl font-bold tracking-tight text-zinc-900'>
          {title}
        </h4>
        <p className='leading-5 text-zinc-700'>{description}</p>
      </div>
    </Link>
  )
}

export default SnippetCard
