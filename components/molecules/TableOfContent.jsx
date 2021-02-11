const TableOfContent = ({ headings }) => {
  return (
    <aside className='fixed z-40 invisible max-w-xs p-6 bg-white rounded-md shadow lg:visible left-7 top-36 dark:bg-outer-space-600'>
      <h6 className='mb-5 text-sm font-bold'>TABLE OF CONTENT</h6>
      <ul className='space-y-3'>
        {headings.map((heading, i) => (
          <li className='px-2 py-0.5' key={i}>
            <a
              className='text-sm transition duration-75 border-b-2 border-blue-300 border-dotted dark:border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-600'
              href={`#${heading.headingId}`}
            >
              {heading.headingText}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default TableOfContent
