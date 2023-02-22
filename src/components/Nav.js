import "../styles/Nav.css";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <section>
      <nav className="navBar">
        <Link to="/">
          <img
            className="logo"
            src="/icons_assets/Logo .svg"
            alt="logo"
            width="180px"
          ></img>
        </Link>
        <Link to="/" className="list">
          <a>Home</a>
        </Link>
        <Link to="/about" className="list">
          <a>About</a>
        </Link>
        <Link to="/menu" className="list">
          <a>Menu</a>
        </Link>
        <Link to="/reservations" className="list">
          <a>Reservations</a>
        </Link>
        <Link to="/order" className="list">
          <a>Order Online</a>
        </Link>
        <Link to="/contact" className="list">
          <a>Contact</a>
        </Link>
        <Link to="/login" className="list">
          <a>Login</a>
        </Link>
      </nav>
    </section>
  );
}

export default Nav;
