import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 p-6 text-lg font-light uppercase tracking-wide">
      <Link to="/comingsoon">Coming Soon</Link>
      <Link to="/available">Available Now</Link>
      <Link to="/sold">Sold</Link>
    </nav>
  );
}
