import headerLogo from "../Images/logo.svg";
import { Link } from "react-router-dom";

function Header({ title, email, route, onClick }) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <p className="header__email">{email}</p>
      <Link
        to={route}
        className="header__button"
        type="button"
        onClick={onClick}
      >
        {title}
      </Link>
    </header>
  );
}

export default Header;
