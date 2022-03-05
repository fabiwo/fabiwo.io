const FoundTag = ({ number }) => (
  <div className='mx-auto mb-3 bg-white border rounded-md shadow px-7 text-md'>
    <p>
      <strong className='text-red-600'>{number} </strong>
      {number === 1 ? 'Post' : 'Posts'}
    </p>
  </div>
)

export default FoundTag
