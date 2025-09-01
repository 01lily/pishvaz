import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass =
    "px-4 py-2 text-sm font-light tracking-widest uppercase hover:text-gray-500 transition";

  return (
    <nav className="flex justify-center gap-10 py-8 border-b border-gray-200">
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/comingsoon" className={linkClass}>
        Coming Soon
      </NavLink>
      <NavLink to="/available" className={linkClass}>
        Available Now
      </NavLink>
      <NavLink to="/sold" className={linkClass}>
        Sold
      </NavLink>
    </nav>
  );
}

