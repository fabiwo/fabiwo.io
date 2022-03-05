const Menu = ({ isOpen, children }) => (
  <nav
    className={
      isOpen
        ? `flex flex-col z-40 pt-20 px-8 w-full shadow space-y-5 bg-white h-screen absolute top-0 left-0`
        : 'hidden md:flex md:space-x-1.5 '
    }
  >
    {children}
  </nav>
)

export default Menu
