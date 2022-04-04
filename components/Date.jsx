import { parseISO, format } from 'date-fns'

// Component to display dates in a pretty format for blog posts
export default function Date({ dateString }) {
  return (
    <time className='text-xs' dateTime={dateString}>
      {format(parseISO(dateString), 'dd. LLLL yyyy')}
    </time>
  )
}

export const LastEdited = ({ dateString }) => (
  <div className='mt-5'>
    <span className='text-xs'>Last edited: </span>
    <Date dateString={dateString} />
  </div>
)
