import { useParams } from "react-router-dom";
import data from "../../assets/data/appartements.json";
import Tags from "./tags";
import Slider from "./carousel";
import Dropdown from "./dropdown";
import Stars from "./stars";
import "./appart.css";

function Appart() {
  let { id } = useParams();
  const dataAppart = data.find((logement) => logement.id === id);
  console.log(dataAppart);
  return (
    <div className="appart">
      <div className="carrousel">
        <Slider images={dataAppart.pictures} />
      </div>
      <div className="titre-et-host">
        <div className="titre-logement">
          <h1>{dataAppart.title}</h1>
        </div>
        <div className="host">
          <div className="host-name">
            <p>{dataAppart.host.name}</p>
          </div>
          <div className="host-picture">
            <img src={dataAppart.host.picture} alt="personne"></img>
          </div>
        </div>
      </div>
      <div className="location-appartement">
        <p>{dataAppart.location}</p>
      </div>
      <div className="tags-et-rating">
        <div className="tags">
          {dataAppart.tags.map((tag) => {
            return <Tags name={tag} key={tag} />;
          })}
        </div>
        <div className="ratings">
          <Stars rating={dataAppart.rating} />
        </div>
      </div>
      <div className="dropdown-menus">
        <Dropdown
          description={dataAppart.description}
          equipments={dataAppart.equipments}
        />
      </div>
    </div>
  );
}

export default Appart;
