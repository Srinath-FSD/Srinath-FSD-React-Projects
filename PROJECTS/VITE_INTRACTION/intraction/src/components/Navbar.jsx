import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="bg-gray-800 text-white p-5 flex justify-between items-center">
      <div className="bg-amber-400 px-4 py-2 rounded-full text-black font-bold">
        LOGO
      </div>

      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-amber-400 px-4 py-1 rounded text-black font-bold"
        >
          Home
        </Link>

        <Link
          to="/intract"
          className="bg-amber-400 px-4 py-1 rounded text-black font-bold"
        >
          Intraction
        </Link>
      </div>
    </div>
  )
}

export default NavBar
