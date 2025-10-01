import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/icon/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md sticky top-0 left-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex items-center justify-between py-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-indigo-600">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "active-item" : "pending-item"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active-item" : "pending-item"
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active-item" : "pending-item"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive ? "active-item" : "pending-item"
                  }
                >
                  Service
                </NavLink>
              </li>
            </ul>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <a
                href="#"
                className="inline-flex items-center justify-center 
                              bg-[#8447E9] hover:bg-purple-700 
                              text-white font-medium 
                              px-4 py-2 
                              shadow-lg transition duration-200 
                              text-md"
              >
                Contact us
                <span className="ml-2 text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M0.833338 4.16666H7.15834L4.40834 1.42499C4.25142 1.26807 4.16326 1.05524 4.16326 0.833325C4.16326 0.611407 4.25142 0.398578 4.40834 0.241658C4.56526 0.0847387 4.77809 -0.00341797 5 -0.00341797C5.22192 -0.00341797 5.43475 0.0847387 5.59167 0.241658L9.75834 4.40833C9.83421 4.48758 9.89368 4.58103 9.93334 4.68333C10.0167 4.88621 10.0167 5.11377 9.93334 5.31666C9.89368 5.41895 9.83421 5.51241 9.75834 5.59166L5.59167 9.75832C5.5142 9.83643 5.42203 9.89843 5.32049 9.94074C5.21894 9.98304 5.11001 10.0048 5 10.0048C4.88999 10.0048 4.78107 9.98304 4.67952 9.94074C4.57797 9.89843 4.48581 9.83643 4.40834 9.75832C4.33023 9.68086 4.26824 9.58869 4.22593 9.48714C4.18362 9.38559 4.16184 9.27667 4.16184 9.16666C4.16184 9.05665 4.18362 8.94773 4.22593 8.84618C4.26824 8.74463 4.33023 8.65246 4.40834 8.57499L7.15834 5.83333H0.833338C0.612324 5.83333 0.400362 5.74553 0.244082 5.58925C0.0878015 5.43297 4.76857e-06 5.22101 4.76857e-06 4.99999C4.76857e-06 4.77898 0.0878015 4.56702 0.244082 4.41074C0.400362 4.25446 0.612324 4.16666 0.833338 4.16666Z"
                      fill="#F5F5F5"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)}>
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Offcanvas Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="text-xl font-bold text-indigo-600">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium w-full">
          <li>
            <NavLink
              to="/home"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? "active-item" : "pending-item"
                } block w-full px-4 py-2`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? "active-item" : "pending-item"
                } block w-full px-4 py-2`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? "active-item" : "pending-item"
                } block w-full px-4 py-2`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? "active-item" : "pending-item"
                } block w-full px-4 py-2`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="px-6">
          <a
                href="#"
                className="inline-flex items-center justify-center 
                              bg-[#8447E9] hover:bg-purple-700 
                              text-white font-medium 
                              px-4 py-2 
                              shadow-lg transition duration-200 
                              text-md"
              >
                Contact us
                <span className="ml-2 text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M0.833338 4.16666H7.15834L4.40834 1.42499C4.25142 1.26807 4.16326 1.05524 4.16326 0.833325C4.16326 0.611407 4.25142 0.398578 4.40834 0.241658C4.56526 0.0847387 4.77809 -0.00341797 5 -0.00341797C5.22192 -0.00341797 5.43475 0.0847387 5.59167 0.241658L9.75834 4.40833C9.83421 4.48758 9.89368 4.58103 9.93334 4.68333C10.0167 4.88621 10.0167 5.11377 9.93334 5.31666C9.89368 5.41895 9.83421 5.51241 9.75834 5.59166L5.59167 9.75832C5.5142 9.83643 5.42203 9.89843 5.32049 9.94074C5.21894 9.98304 5.11001 10.0048 5 10.0048C4.88999 10.0048 4.78107 9.98304 4.67952 9.94074C4.57797 9.89843 4.48581 9.83643 4.40834 9.75832C4.33023 9.68086 4.26824 9.58869 4.22593 9.48714C4.18362 9.38559 4.16184 9.27667 4.16184 9.16666C4.16184 9.05665 4.18362 8.94773 4.22593 8.84618C4.26824 8.74463 4.33023 8.65246 4.40834 8.57499L7.15834 5.83333H0.833338C0.612324 5.83333 0.400362 5.74553 0.244082 5.58925C0.0878015 5.43297 4.76857e-06 5.22101 4.76857e-06 4.99999C4.76857e-06 4.77898 0.0878015 4.56702 0.244082 4.41074C0.400362 4.25446 0.612324 4.16666 0.833338 4.16666Z"
                      fill="#F5F5F5"
                    />
                  </svg>
                </span>
              </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
