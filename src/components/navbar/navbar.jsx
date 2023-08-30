import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <Link to="/" className="link">
          Accueil
        </Link>
        <Link to="/apropos" className="link">
          A propos
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
