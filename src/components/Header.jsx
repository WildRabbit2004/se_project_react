import "../blocks/header.css";
import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.svg";

function Header({ city, onAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="wtwr logo" className="header__logo" />
        <p className="header__date">
          {currentDate}, {city}
        </p>
      </div>
      <div className="header__right">
        <button className="header__button" type="button" onClick={onAddClick}>
          + Add Clothes
        </button>
        <p className="header__username">Username</p>
        <img src={avatar} alt="avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
