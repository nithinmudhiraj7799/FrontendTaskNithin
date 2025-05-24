import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold">
          <Link to="/">MyApp</Link>
        </div>
        
        {/* Hamburger button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/login" className="hover:text-blue-400">Login</Link></li>
          <li><Link to="/signup" className="hover:text-blue-400">Signup</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4">
          <ul className="space-y-2">
            <li><Link to="/" className="block text-white hover:text-blue-400" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/login" className="block text-white hover:text-blue-400" onClick={() => setOpen(false)}>Login</Link></li>
            <li><Link to="/signup" className="block text-white hover:text-blue-400" onClick={() => setOpen(false)}>Signup</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
