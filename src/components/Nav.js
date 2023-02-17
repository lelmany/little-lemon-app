import "../styles/Nav.css";
import "../styles/Main.css";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <section>
      <nav className="navBar">
        <img className="logo" src="/icons_assets/Logo .svg" alt="logo"></img>
        <Link to="/" className="list">
          Home
        </Link>
        <Link to="/about" className="list">
          About
        </Link>
        <Link to="/menu" className="list">
          Menu
        </Link>
        <Link to="/reservations" className="list">
          Reservations
        </Link>
        <Link to="/order" className="list">
          Order Online
        </Link>
        <Link to="/contact" className="list">
          Contact
        </Link>
        <Link to="/login" className="list">
          Login
        </Link>
      </nav>
    </section>
  );
}

export default Nav;
