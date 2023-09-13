import data from "../../assets/data/appartements.json";
import "./cards.css";
import Card from "./card";

function Cards() {
  return (
    <div className="cards">
      {data.map((appartement) => {
        return (
          <Card
            id={appartement.id}
            cover={appartement.cover}
            title={appartement.title}
            key={appartement.id}
          />
        );
      })}
    </div>
  );
}

export default Cards;
