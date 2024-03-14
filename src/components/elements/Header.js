import {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Mark.png";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      <div className="flex justify-between items-center px-4 lg:px-20 py-6 lg:px-14 xl:px-20 outer-wrapper">
        <div className="header-left flex items-center">
          <img src={Logo} className="mr-8" alt="Logo" />
          <nav className="hidden lg:block space-x-7 font-sf_pro_medium text-gray-600 text-base">
            <NavLink activeClassName="active" to="/">
              Product
            </NavLink>
            <NavLink activeClassName="active" to="/">
              Features
            </NavLink>
            <NavLink activeClassName="active" to="/">
              Marketplace
            </NavLink>
            <NavLink activeClassName="active" to="/">
              Company
            </NavLink>
          </nav>
        </div>

        <div className="header-right items-center font-sf_pro_medium text-base text-gray-600 hidden lg:flex">
          <nav>
            <NavLink activeClassName="active" to="/">
              Login
            </NavLink>
          </nav>
          <a href="#" className="ml-5 dark-button">
            Start free trail
          </a>
        </div>

        <div className="mobile-menu flex lg:hidden">
          <button
            className="mobile-menu-button focus:outline-none"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`relative z-10 transition-all duration-300 w-full transform  ${
          toggleMenu ? "-translate-y-96 hidden" : "translate-y-0 block"
        } bg-white mobile-menu lg:hidden text-center`}
      >
        <div className="absolute w-full bg-white shadow-md rounded-b-md">
          <ul className="text-left">
            <li>
              <a href="/" className="block px-4 py-3 text-gray-900 font-medium">
                Products
              </a>
            </li>
            <li>
              <a href="/" className="block px-4 py-3 text-gray-900 font-medium">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="block px-4 py-3 text-gray-900 font-medium">
                Marketplace
              </a>
            </li>
            <li>
              <a href="/" className="block px-4 py-3 text-gray-900 font-medium">
                Company
              </a>
            </li>
          </ul>

          <hr className="mt-4 mb-8 text-gray-50" />
          <a href="#" className="block mx-4 font-inter rounded-lg p-4 bg-gray-900 text-white">
            Start Free Trail
          </a>
          <p className="text-gray-500 py-8">Existing customer? <a className="text-gray-900">Log In</a></p>
        </div>
      </div>
    </>
  );
}
export default Header;
