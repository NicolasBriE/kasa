import Header from "../../components/Header/header";
import Background from "../../components/Background/background";
import Dropdown from "../../components/Appart/dropdown";
import Footer from "../../components/Footer/footer";
import backgroundApropos from "../../assets/images/backgroundApropos.png";
import data from "../../assets/data/apropos-dropdowns.json";
import "./Apropos.css";

function Apropos() {
  return (
    <div className="Apropos">
      <Header />
      <Background image={backgroundApropos} />
      <div className="dropdowns-container-apropos">
        {data.map((dropdown) => {
          return (
            <Dropdown
              title={dropdown.title}
              content={dropdown.content}
              class="dropdown-content-text"
              key={dropdown.title}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Apropos;
