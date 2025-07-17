import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-around sticky top-0 z-50">
      <Link to="/" className="font-bold text-xl text-blue-700">Prajwal</Link>
      <div className="space-x-4">
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
