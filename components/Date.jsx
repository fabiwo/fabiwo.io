import { parseISO, format } from 'date-fns'

// Component to display dates in a pretty format for blog posts
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time className='text-sm text-zinc-600' dateTime={dateString}>
      {format(date, 'dd. LLLL yyyy')}
    </time>
  )
}

export const LastEdited = ({ dateString }) => (
  <div className='mt-5'>
    <span className='text-sm text-zinc-600'>Last edited: </span>
    <Date dateString={dateString} />
  </div>
)
