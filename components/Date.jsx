import { parseISO, format } from 'date-fns'

// Component to display dates in a pretty format for blog posts
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time
      className='text-sm text-gray-600 dark:text-outer-space-300'
      dateTime={dateString}
    >
      {format(date, 'LLLL dd, yyyy')}
    </time>
  )
}
