const FoundTag = ({ number }) => {
  return (
    <div className='mx-auto mb-3 bg-white border rounded-md shadow dark:border-transparent dark:bg-outer-space-500 px-7 text-md'>
      <p>
        <strong className='text-red-600'>{number} </strong>
        {number === 1 ? 'Post' : 'Posts'}
      </p>
    </div>
  )
}

export default FoundTag
