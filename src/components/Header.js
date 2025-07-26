import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useShowOnlineStatus from "../utils/useShowOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logInOutBtn, setLogInOutBtn] = useState("Login");

  const onlineStatus = useShowOnlineStatus();

  const { userName } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex px-10 justify-between shadow-md">
      <div>
        <Link to="/">
          <img className="w-24" src={LOGO_URL} alt="brand-logo" />
        </Link>
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
        <li className="font-bold">
          <Link to="cart">Cart - {cartItems.length} items</Link>
        </li>
        <button
          onClick={() => {
            setLogInOutBtn(logInOutBtn === "Login" ? "Logout" : "Login");
          }}
        >
          {logInOutBtn}
        </button>
        <li className="font-bold">{userName}</li>
      </ul>
    </div>
  );
};

export default Header;
