import data from "../../assets/data/appartements.json";
import { Link } from "react-router-dom";
// import Stars from "./stars";
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      {data.map((appartement) => {
        return (
          <Link
            to={`/appartement/${appartement.id}`}
            key={appartement.id}
            className="card"
          >
            <img src={appartement.cover} alt={appartement.title}></img>
            <div className="overlay"></div>
            <div className="titre-appartement">{appartement.title}</div>
          </Link>
        );
      })}
      {/* <Stars /> */}
    </div>
  );
}

export default Cards;
