import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <NavLink activeclassname="active" to="/" className="link">
          Accueil
        </NavLink>
        <NavLink activeclassname="active" to="/apropos" className="link">
          A propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
