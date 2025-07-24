import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 right-0 z-50 px-8 py-6 flex justify-end items-center bg-transparent text-black backdrop-blur-md">
      <div className="space-x-6 text-lg font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-500' : 'hover:text-yellow-500'}>Home</NavLink>
        <NavLink to="/hire-me" className={({ isActive }) => isActive ? 'text-yellow-500' : 'hover:text-yellow-500'}>Hire Me</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-yellow-500' : 'hover:text-yellow-500'}>Projects</NavLink>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-yellow-500' : 'hover:text-yellow-500'}>Blogs</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-500' : 'hover:text-yellow-500'}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-500' : 'hover:text-yellow-500'}>Contact</NavLink>
      </div>
    </nav>
  );
}
