const Menu = ({ isOpen, setOpen, children }) => {
  return (
    <nav
      className={
        isOpen
          ? `flex flex-col z-40 pt-20 pl-14 w-64 space-y-5 bg-white shadow h-screen absolute top-0 left-0`
          : 'hidden md:flex md:space-x-10 '
      }
    >
      {children}
    </nav>
  )
}

export default Menu
