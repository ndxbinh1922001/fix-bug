import NavLink from "./NavLink"


const Navbar = () => {
  return (
    <nav className="h-[60px] w-full background-gradient mt-3">
        <div className="flex-center font-medium justify-around relative">
            <NavLink />
        </div>
    </nav >
  )
}

export default Navbar