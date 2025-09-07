import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToFooter = (e) => {
    e.preventDefault();
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById("PropertiesSection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between px-8 py-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="PropBot Logo" className="w-auto h-10" />
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden space-x-6 font-medium text-gray-700 md:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listings"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "hover:text-blue-600"
              }
            >
              Buy
            </NavLink>
          </li>
          <li>
            <NavLink
              
            >
              Rent
            </NavLink>
          </li>
          <li>
            <NavLink
             
            >
              Sell
            </NavLink>
          </li>
          <li>
            <a
              href="#PropertiesSection"
              onClick={scrollToAbout}
              className="hover:text-blue-600"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#footer"
              onClick={scrollToFooter}
              className="hover:text-blue-600"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Auth Links (Desktop) */}
        <div className="flex items-center bg-blue-900 text-white px-2 py-0.5 rounded-full text-center">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "px-2 py-1 underline text-blue-200"
                : "px-2 py-1 hover:text-gray-400"
            }
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>

          <span className="text-white select-none">/</span>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-1 px-2 py-1 underline text-blue-200"
                : "flex items-center gap-1 px-2 py-1 hover:text-gray-400"
            }
            onClick={() => setIsOpen(false)}
          >
            Register <FaArrowRight size={12} />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="px-6 py-4 space-y-4 bg-white shadow-lg md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "block text-blue-600 underline" : "block hover:text-blue-600"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/listings"
            className={({ isActive }) =>
              isActive ? "block text-blue-600 underline" : "block hover:text-blue-600"
            }
            onClick={() => setIsOpen(false)}
          >
            Buy
          </NavLink>

          <NavLink
          >
            Rent
          </NavLink>

          <NavLink
          >
            Sell
          </NavLink>

          <a
            href="#PropertiesSection"
            onClick={(e) => {
              scrollToAbout(e);
              setIsOpen(false);
            }}
            className="block hover:text-blue-600"
          >
            About Us
          </a>
          <a
            href="#footer"
            onClick={(e) => {
              scrollToFooter(e);
              setIsOpen(false);
            }}
            className="block hover:text-blue-600"
          >
            Contact Us
          </a>

          <hr />

          <div className="flex px-4 py-2 text-center text-white bg-blue-100 rounded-md">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "block text-blue-600 underline" : "block hover:text-blue-600"
              }
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "block text-blue-600 underline" : "block hover:text-blue-600"
              }
              onClick={() => setIsOpen(false)}
            >
              Register
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
