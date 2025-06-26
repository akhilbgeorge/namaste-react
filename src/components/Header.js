import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [logInOutBtn, setLogInOutBtn] = useState("Login");

  return (
    <div className="header-container">
      <img className="logo" src={LOGO_URL} alt="brand-logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
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
