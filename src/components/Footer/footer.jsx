import logoF from "../../assets/images/logo-footer.PNG";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="logo-footer">
        <img src={logoF} alt={logoF}></img>
      </div>
      <div className="copyright">
        <span>© 2020 Kasa. All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
