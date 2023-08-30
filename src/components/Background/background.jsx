import backgroundHome from "../../assets/images/backgroundHome.png";
import "./background.css";

function Background() {
  return (
    <div className="background">
      <img src={backgroundHome} className="background-image" alt="image Home" />
      <div className="background-text">Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default Background;
