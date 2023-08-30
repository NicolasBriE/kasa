import Navbar from "../../components/navbar/navbar";
import Logo from "../logo/logo";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
