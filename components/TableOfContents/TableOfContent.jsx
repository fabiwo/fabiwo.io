const TableOfContent = ({ headings }) => (
  <aside className='fixed z-40 invisible max-w-xs p-6 rounded-md xl:visible left-7 top-36'>
    <h6 className='mb-5 text-sm font-bold'>TABLE OF CONTENT</h6>
    <ul className='space-y-3'>
      {headings
        .filter((heading) => heading.level === 2)
        .map((heading) => (
          <li className='py-0.5' key={heading.headingText}>
            <a
              className='text-sm text-zinc-700 transition duration-75 border-b-2 border-indigo-300 border-dotted hover:bg-indigo-100'
              href={`#${heading.headingId}`}
            >
              {heading.headingText}
            </a>
          </li>
        ))}
    </ul>
  </aside>
)

export default TableOfContent
