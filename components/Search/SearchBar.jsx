const SearchBar = ({ onChange }) => (
  <div className='relative w-full mb-3'>
    <input
      aria-label='Search articles'
      type='text'
      onChange={(e) => onChange(e.target.value)}
      placeholder='Search articles'
      className='w-full px-3 py-2 rounded-md active:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 outline outline-1	outline-gray-200'
    />
    <svg
      className='absolute w-5 h-5 text-gray-400 right-3 top-3'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      />
    </svg>
  </div>
)

export default SearchBar
