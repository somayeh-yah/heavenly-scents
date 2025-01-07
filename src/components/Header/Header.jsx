import "../Header/Header.css";

import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import ToggleLanguage from "../SelectLanguage/ToggleLanguage";
import userIcon from "../../assets/User.svg";
import Cart from "../Cart/Cart";

export default function Header() {



  return (
    <header className="header_container">
      
      <div className="header_left">
        <ToggleLanguage />
        <div className="userLogin_container">
          <a href="/login">
            <img className="login-icon" src={userIcon} alt={userIcon} />
          </a>

          <p className="login">
            <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <div className="header_center">
        <Logo />
      </div>
      <div className="header_right">
        <Cart />
      </div>
      <Navbar />
    </header>
  );
}
