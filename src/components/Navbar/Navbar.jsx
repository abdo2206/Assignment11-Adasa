import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo-GdqARQRt.png";

const navLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "المدونة", path: "/blog" },
  { name: "من نحن", path: "/about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        : "text-neutral-400 hover:text-white"
    }`;

  const getMobileLinkClass = ({ isActive }) =>
    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
        : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img
                src={logo}
                alt="Photography Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                عدسة
              </span>

              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={getLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            >
              <FiSearch className="w-5 h-5" />
            </button>

            <Link to="/blog" className="btn-primary text-sm">
              ابدأ القراءة
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  className={getMobileLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-sm text-center mt-2"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
