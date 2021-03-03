const SearchBar = ({ onChange }) => (
  <div className='relative w-full mb-3'>
    <input
      aria-label='Search articles'
      type='text'
      onChange={(e) => onChange(e.target.value)}
      placeholder='Search articles'
      className='w-full px-4 py-3 rounded-md shadow-lg dark:text-outer-space-300 dark:border-transparent dark:bg-outer-space-700 dark:placeholder-outer-space-400 dark:focus:bg-outer-space-800 active:ring-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400'
    />
    <svg
      className='absolute w-5 h-5 text-gray-400 right-4 top-4 dark:text-gray-300'
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
