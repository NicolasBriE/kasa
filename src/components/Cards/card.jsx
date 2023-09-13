import "./card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`/appartement/${props.id}`} className="card">
      <img src={props.cover} alt={props.title}></img>
      <div className="overlay"></div>
      <div className="titre-appartement">{props.title}</div>
    </Link>
  );
}

export default Card;
