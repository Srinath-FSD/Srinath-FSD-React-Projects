import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 className="text-lg font-bold">My Website</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-200">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-200">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
