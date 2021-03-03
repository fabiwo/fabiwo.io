const Hamburger = ({ isOpen, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!isOpen)}
      className={`p-5 hamburger hamburger--collapse md:hidden z-50 ${
        isOpen ? 'is-active' : ''
      }`}
      type='button'
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  )
}

export default Hamburger
