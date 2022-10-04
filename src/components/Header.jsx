import { Link } from "react-router-dom";
import Logo from "../assets/popcorn.png";
import "../css/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="logo" className="header__logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listado">listado</Link>
          </li>
          <li>
            <Link to="/contacto">contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
