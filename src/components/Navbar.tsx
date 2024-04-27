import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="w-full">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service"> Services </a>
              </li>
              <li>
              <a href='#cctv'>cctv</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">ringsolutions</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
                <a href='#cctv'>cctv</a>
              </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-4 flex gap-4">
          <div>
            <button className="border-2 border-blue-400 py-1 px-4 rounded-lg">
              Sign In
            </button>
          </div>
          <div>
            <button className="border-2 border-blue-400 bg-blue-400 text-white py-1 px-4 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
