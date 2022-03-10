const FoundTag = ({ number }) => (
  <div className='mx-auto mb-3 bg-white border rounded-md px-7 text-md'>
    <p>
      <strong className='font-bold text-red-500'>{number} </strong>
      {number === 1 ? 'Article' : 'Articles'}
    </p>
  </div>
)

export default FoundTag
