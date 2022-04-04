import { v4 as uuidv4 } from 'uuid'

export default function ListOfReferences({ references }) {
  return (
    <ul className='space-y-5'>
      {references.map((d, j) => {
        let id
        if (d.type === 'paper') {
          id = `DOI: ${d.doi}`
        } else if (d.type === 'patent') {
          id = `${d.patentNr}`
        }
        return (
          <>
            <li key={uuidv4()} className='relative'>
              <a
                className='block mb-2 font-semibold underline-offset-2 hover:underline hover:decoration-indigo-700 '
                target='_blank'
                rel='noopener noreferrer'
                href={d.link}
              >
                {d.title}
              </a>
              <p className='mb-2 text-sm leading-relaxed text-zinc-700 line-clamp-3'>
                {d.authors.join(', ')}
              </p>
              <p className='mb-2 text-sm leading-relaxed text-zinc-800 line-clamp-3'>
                {d.abstract}
              </p>
              <ul className='relative z-10 -mb-[0.5em] flex flex-wrap text-sm'>
                <li className='mr-[0.5em] mb-[0.5em] last:mr-0'>
                  <a
                    className='flex items-center rounded-md bg-indigo-50 px-2 py-1.5 tracking-tight text-indigo-600 hover:text-white hover:bg-indigo-500'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={d.link}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                    <span>Link</span>
                  </a>
                </li>
                <li className='mr-[0.5em] mb-[0.5em] last:mr-0'>
                  <p className='flex items-center rounded-md bg-indigo-50 px-2 py-1.5 tracking-tight text-indigo-600'>
                    <span>{id}</span>
                  </p>
                </li>
                {d.journal ? (
                  <li className='mr-[0.5em] mb-[0.5em] last:mr-0'>
                    <p className='flex items-center rounded-md bg-indigo-50 px-2 py-1.5 tracking-tight text-indigo-600'>
                      <span>{d.journal}</span>
                    </p>
                  </li>
                ) : null}
              </ul>
            </li>
            {j < references.length - 1 ? (
              <hr className='w-full border-1 border-zinc-200 mb-8' />
            ) : null}
          </>
        )
      })}
    </ul>
  )
}
