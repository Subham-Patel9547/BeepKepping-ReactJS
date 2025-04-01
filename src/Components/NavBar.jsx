import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <nav className="w-full z-10 fixed top-0 bg-green-950/70 backdrop-blur-md text-white shadow-md font-bold">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Honey</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-xl">
          <Link to="/" className={`${location.pathname === "/" ? "text-yellow-300" : "hover:text-gray-300"}`}>Home</Link>
          <Link to="/about" className={`${location.pathname === "/about" ? "text-yellow-300" : "hover:text-gray-300"}`}>About Us</Link>
          
          <div className="relative">
            <button onClick={() => toggleDropdown("services")} className="flex items-center hover:text-gray-300">
              Services <ChevronDown size={18} className="ml-1" />
            </button>
            {dropdownOpen === "services" && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md">
                <Link to="/project/pricing" className="block px-4 py-2 hover:bg-gray-200">Pricing</Link>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button onClick={() => toggleDropdown("pages")} className="flex items-center hover:text-gray-300">
              Pages <ChevronDown size={18} className="ml-1" />
            </button>
            {dropdownOpen === "pages" && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md">
                <Link to="/pages/team" className="block px-4 py-2 hover:bg-gray-200">Our Team</Link>
                <Link to="/pages/faq" className="block px-4 py-2 hover:bg-gray-200">FAQ</Link>
                <Link to="/pages/testimonials" className="block px-4 py-2 hover:bg-gray-200">Testimonials</Link>
                <Link to="/pages/gallery" className="block px-4 py-2 hover:bg-gray-200">Gallery</Link>
                <Link to="/pages/blog" className="block px-4 py-2 hover:bg-gray-200">Blog</Link>
                <Link to="/pages/single-post" className="block px-4 py-2 hover:bg-gray-200">Single Post</Link>
                <Link to="/pages/404" className="block px-4 py-2 hover:bg-gray-200">404</Link>
              </div>
            )}
          </div>
          
          <Link to="/contact" className={`${location.pathname === "/contact" ? "text-yellow-300" : "hover:text-gray-300"}`}>Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 bg-green-900 space-y-2">
          <Link to="/" className="text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>About Us</Link>
          <button onClick={() => toggleDropdown("services")} className="flex items-center justify-between text-white hover:text-yellow-300">
            Services <ChevronDown size={18} />
          </button>
          {dropdownOpen === "services" && (
            <div className="pl-4">
              <Link to="/project/pricing" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Pricing</Link>
            </div>
          )}
          <button onClick={() => toggleDropdown("pages")} className="flex items-center justify-between text-white hover:text-yellow-300">
            Pages <ChevronDown size={18} />
          </button>
          {dropdownOpen === "pages" && (
            <div className="pl-4">
              <Link to="/pages/team" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Our Team</Link>
              <Link to="/pages/faq" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>FAQ</Link>
              <Link to="/pages/testimonials" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Testimonials</Link>
              <Link to="/pages/gallery" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Gallery</Link>
              <Link to="/pages/blog" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link to="/pages/single-post" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Single Post</Link>
              <Link to="/pages/404" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>404</Link>
            </div>
          )}
          <Link to="/contact" className="text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
