const Menu = ({ isOpen, setOpen, children }) => {
  return (
    <nav
      className={
        isOpen
          ? `flex flex-col pt-20 p-10 w-64 space-y-5 bg-white shadow h-screen p-5 absolute top-0 left-0`
          : 'hidden lg:flex lg:space-x-10 '
      }
    >
      {children}
    </nav>
  )
}

export default Menu
