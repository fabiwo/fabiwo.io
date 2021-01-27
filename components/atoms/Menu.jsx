const Menu = ({ isOpen, setOpen, children }) => {
  return (
    <>
      <nav
        className={
          isOpen
            ? `flex flex-col z-40 pt-20 px-8 w-64 shadow space-y-5 bg-white h-screen absolute top-0 left-0`
            : 'hidden md:flex md:space-x-1 '
        }
      >
        {children}
      </nav>
    </>
  )
}

export default Menu
