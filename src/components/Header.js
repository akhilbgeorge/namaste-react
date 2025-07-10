import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [logInOutBtn, setLogInOutBtn] = useState("Login");

  return (
    <div className="header-container">
      <img className="logo" src={LOGO_URL} alt="brand-logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
        <li>Cart</li>
        <button
          onClick={() => {
            setLogInOutBtn(logInOutBtn === "Login" ? "Logout" : "Login");
          }}
        >
          {logInOutBtn}
        </button>
      </ul>
    </div>
  );
};

export default Header;
