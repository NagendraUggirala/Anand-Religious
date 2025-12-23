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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        {/* MAIN ROW */}
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">

          {/* LOGO + FOUNDER */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">

            {/* Images */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition">
                <img
                  src="./images/image.png"
                  alt="Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center">
                <img
                  src="./images/Anandhlogo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight overflow-hidden">
              <h1 className="text-xs sm:text-sm md:text-lg font-bold text-blue-800 whitespace-nowrap">
                <span className="text-orange-500">ANAND </span>
                RELIGIOUS TRUST
              </h1>

              {/* Hide tagline only on very small screens */}
              <p className="hidden sm:block text-[11px] md:text-sm text-gray-600 italic">
                Protect Dharma, and Dharma protects you
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
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
            className="lg:hidden p-2 sm:p-2.5 text-blue-800 hover:bg-blue-50 rounded-lg transition"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-4">
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