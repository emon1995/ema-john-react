import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // console.log(user.email);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("click");
    logout()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="header-item">
        <ActiveLink to={`/`}>Shop</ActiveLink>
        <ActiveLink to="/orders">Orders</ActiveLink>
        <ActiveLink to="/inventory">Inventory</ActiveLink>
        {!user && (
          <>
            <ActiveLink to="/login">Login</ActiveLink>
            <ActiveLink to="/register">Register</ActiveLink>
          </>
        )}
        {user && (
          <>
            <ActiveLink>{user.email}</ActiveLink>
            <p onClick={handleLogout}>Logout</p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
