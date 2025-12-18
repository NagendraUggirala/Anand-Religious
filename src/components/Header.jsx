import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Our Rituals" },
  
   
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 left-0 right-0 w-full z-50 bg-white border-b transition-all duration-300 ${
        isScrolled ? "shadow-md border-gray-200" : "border-gray-100"
      }`}
    >
      {/* WRAPPER → FIXES MOBILE OVERFLOW  */}
      <div className="w-full px-4 overflow-x-hidden">

        {/* MAIN ROW */}
        <div className="flex justify-between items-center py-3 md:py-4">
          
          {/* LOGO + FOUNDER SECTION */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md duration-300">
                <img
                  src="./images/image.png"
                  alt="Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <img
                src="./images/Anandhlogo.png"
                alt="Logo"
                className="w-8 h-10 md:w-10 md:h-12 object-contain"
              />
            </div>

            <div className="flex flex-col items-start">
              <h1 className="text-lg md:text-xl font-bold text-blue-800 leading-tight">
                <span className="text-orange-500">ANAND </span>RELIGIOUS TRUST
              </h1>
              <p className="text-xs text-gray-600 italic">Protect Dharma, and Dharma protects you</p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2.5 rounded-lg text-base font-semibold duration-200 ${
                  isActiveLink(item.path)
                    ? "text-blue-700 bg-blue-100 border border-blue-200"
                    : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/booking"
              className={`px-4 py-2.5 rounded-lg text-base font-semibold duration-200 ${
                isActiveLink("/booking")
                  ? "text-white bg-orange-600 border border-orange-700"
                  : "bg-orange-600 text-white hover:bg-orange-700 shadow-md hover:shadow-lg"
              }`}
            >
              Booking
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 md:p-3 text-blue-800 hover:bg-blue-50 rounded-lg transition duration-200"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-4 overflow-x-hidden">
            <nav className="space-y-2 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg duration-200 ${
                    isActiveLink(item.path)
                      ? "bg-blue-100 text-blue-700 border border-blue-200"
                      : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/booking"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg duration-200 ${
                  isActiveLink("/booking")
                    ? "bg-orange-600 text-white border border-orange-700"
                    : "bg-orange-600 text-white hover:bg-orange-700"
                }`}
              >
                Booking
              </Link>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
