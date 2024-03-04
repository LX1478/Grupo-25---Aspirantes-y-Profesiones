import User from "./User";
import Menu from "./Menu";

function Navbar() {
  return (
    <>
      <nav className="menu-wrap hamburger">
        <User
          img="/images/logo-dh.png"
          name="Digital House"
          alt="Logo Digital House"
        />
          <Menu />
      </nav>
    </>
  );
}

export default Navbar;
