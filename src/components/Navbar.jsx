import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <nav className="bg-[#1E293B] text-white px-4 md:px-10 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">Vishwa Vani</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 items-center text-sm font-medium">
        <li><Link to="/" className="hover:text-sky-300 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-sky-300 transition">About Church</Link></li>
        <li><a href="/teaching" className="hover:text-sky-300 transition">Teaching</a></li>
        <li><Link to="/events" className="hover:text-sky-300 transition">Events</Link></li>
        <li><Link to="/gallery" className="hover:text-sky-300 transition">Gallery</Link></li>
        <li><a href="#contact" className="hover:text-sky-300 transition">Contact Us</a></li>

        {/* Social Icons + Donate */}
        <div className="flex gap-4 items-center">
          {["facebook-f", "instagram", "youtube"].map((icon, idx) => (
            <a key={idx} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#1E293B] hover:bg-sky-300 transition">
              <i className={`fab fa-${icon}`} />
            </a>
          ))}
          <button className="bg-white text-[#1E293B] px-4 py-2 rounded-md font-semibold hover:bg-sky-300 transition">
            Donate
          </button>
        </div>
      </ul>

      {/* Mobile Toggle */}
      <button className="md:hidden z-50" onClick={toggleMobileMenu}>
        {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#1E293B] text-white transition-transform duration-300 transform ${
          isMobileOpen ? "translate-y-0" : "-translate-y-[120%]"
        } flex flex-col gap-4 px-6 py-4 md:hidden shadow-lg z-40`}
      >
        <Link to="/" className="hover:text-sky-300 transition" onClick={toggleMobileMenu}>Home</Link>
        <Link to="/about" className="hover:text-sky-300 transition" onClick={toggleMobileMenu}>About Church</Link>
        <Link to="/events" className="hover:text-sky-300 transition" onClick={toggleMobileMenu}>Events</Link>
        <Link to="/gallery" className="hover:text-sky-300 transition" onClick={toggleMobileMenu}>Gallery</Link>
        <Link to="/teaching" className="hover:text-sky-300 transition" onClick={toggleMobileMenu}>Teaching</Link>
        <a href="/contact" className="hover:text-sky-300 transition">Contact Us</a>

        <div className="flex gap-3 mt-4">
          {["facebook-f", "instagram", "youtube"].map((icon, idx) => (
            <a key={idx} href="#" className="bg-white text-[#1E293B] w-8 h-8 flex items-center justify-center rounded-full">
              <i className={`fab fa-${icon}`} />
            </a>
          ))}
        </div>
        <button className="mt-2 bg-white text-[#1E293B] px-4 py-2 rounded font-semibold">
          Donate
        </button>
      </div>
    </nav>
  );
}
