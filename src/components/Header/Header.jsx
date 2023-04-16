import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <ActiveLink to={`/`}>Shop</ActiveLink>
        <ActiveLink to="/orders">Orders</ActiveLink>
        <ActiveLink to="/inventory">Inventory</ActiveLink>
        <ActiveLink to="/login">Login</ActiveLink>
        <ActiveLink to="/register">Register</ActiveLink>
      </div>
    </nav>
  );
};

export default Header;
