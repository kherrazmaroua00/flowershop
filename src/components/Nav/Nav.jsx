import React from "react";
import "./Nav.css";
import CartIcon from "../Cart/CartIcon";
import image from "/public/logo.png";
export const Nav = () => {
  return (
    <div className="nav">
      <img src={image} alt="Logo" className="logo" />

      <div className="menu">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>

          <li>
            <a href="#About">About</a>
          </li>

          <button className="button">
            <a href="#Contact">Contact</a>
          </button>
        </ul>
      </div>
      <CartIcon />
    </div>
  );
};
