import logo from "../../assets/images/logo.PNG";
import "./logo.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt={logo} />
    </div>
  );
}

export default Logo;
