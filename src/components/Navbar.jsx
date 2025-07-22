import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `font-bold hover:text-blue-600 ${
      location.pathname === path ? 'text-blue-600 underline' : 'text-gray-800'
    }`;

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Prajwal name on the left */}
      <span className="text-2xl font-bold text-gray-800">Prajwal</span>

      {/* Navigation Links on the right */}
      <div className="space-x-4">
        <Link to="/" className={linkClass('/')}>Home</Link>
        <Link to="/about" className={linkClass('/about')}>About</Link>
        <Link to="/skills" className={linkClass('/skills')}>Skills</Link>
        <Link to="/projects" className={linkClass('/projects')}>Projects</Link>
        <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
      </div>
    </nav>
  );
}
