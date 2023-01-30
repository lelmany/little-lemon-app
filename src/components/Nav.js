function Nav() {
  return (
    <nav>
      <img src="/icons_assets/Logo.svg" alt="logo"></img>
      <ul>
        <li>
          <a href="/home" role="button">
            Home
          </a>
        </li>
        <li>
          <a href="/about" role="button">
            About
          </a>
        </li>
        <li>
          <a href="/menu" role="button">
            Menu
          </a>
        </li>
        <li>
          <a href="/reservations" role="button">
            Reservations
          </a>
        </li>
        <li>
          <a href="/order" role="button">
            Order Online
          </a>
        </li>
        <li>
          <a href="/login" role="button">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
