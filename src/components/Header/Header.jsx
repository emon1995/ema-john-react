import React from "react";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <div className=" ">
      <div className="navbar bg-neutral px-12 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/order">Order</a>
              </li>
              <li tabIndex={0}>
                <a href="/review">Order Review</a>
              </li>

              <li>
                <a href="/inventory">Manage Inventory</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/order">Order</a>
              </li>
              <li tabIndex={0}>
                <a href="/review">Order Review</a>
              </li>
              <li>
                <a href="/inventory">Manage Inventory</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
