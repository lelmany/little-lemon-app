import "../Nav.css";

function Nav() {
  return (
    <nav className="navBar">
      <img className="logo" src="/icons_assets/Logo .svg" alt="logo"></img>
      <ul className="navItems">
        <li className="list">
          <a href="/home" role="button" className="link">
            Home
          </a>
        </li>
        <li className="list">
          <a href="/about" role="button" className="link">
            About
          </a>
        </li>
        <li className="list">
          <a href="/menu" role="button" className="link">
            Menu
          </a>
        </li>
        <li className="list">
          <a href="/reservations" role="button" className="link">
            Reservations
          </a>
        </li>
        <li className="list">
          <a href="/order" role="button" className="link">
            Order Online
          </a>
        </li>
        <li className="list">
          <a href="/login" role="button" className="link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
