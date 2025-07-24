import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useShowOnlineStatus from "../utils/useShowOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [logInOutBtn, setLogInOutBtn] = useState("Login");

  const onlineStatus = useShowOnlineStatus();

  const {userName} = useContext(UserContext);

  return (
    <div className="flex px-10 justify-between shadow-md">
      <div>
        <img className="w-24" src={LOGO_URL} alt="brand-logo" />
      </div>
      <ul className="flex items-center gap-8 mr-10">
        <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
        <li>
          <Link to="grocery">Grocery</Link>
        </li>
        <li>Cart</li>
        <button
          onClick={() => {
            setLogInOutBtn(logInOutBtn === "Login" ? "Logout" : "Login");
          }}
        >
          {logInOutBtn}
        </button>
        <li className="font-bold">
          {userName}
        </li>
      </ul>
    </div>
  );
};

export default Header;
