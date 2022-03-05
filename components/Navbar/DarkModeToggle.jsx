import { useTheme } from 'next-themes'

const DarkModeToggle = ({ mounted }) => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='flex items-center justify-center w-10 h-10 p-3 bg-gray-200 rounded focus:outline-none'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (theme === 'light' ? '🌞' : '🌚')}
    </button>
  )
}

export default DarkModeToggle
