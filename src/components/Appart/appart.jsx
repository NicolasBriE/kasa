import { useParams, Navigate } from "react-router-dom";
import data from "../../assets/data/appartements.json";
import Tags from "./tags";
import Slider from "./carousel";
import Dropdown from "./dropdown";
import Stars from "./stars";
import Host from "./host";
import "./appart.css";

function Appart() {
  let { id } = useParams();
  const dataAppart = data.find((logement) => logement.id === id);

  if (dataAppart) {
    return (
      <div className="appart">
        <div className="carrousel">
          <Slider images={dataAppart.pictures} />
        </div>
        <div className="container-multiples">
          <div className="titre-location-tags">
            <div className="titre-logement">
              <h1>{dataAppart.title}</h1>
            </div>
            <div className="location-appartement">
              <h3>{dataAppart.location}</h3>
            </div>
            <div className="tags">
              {dataAppart.tags.map((tag) => {
                return <Tags name={tag} key={tag} />;
              })}
            </div>
          </div>
          <div className="host-et-rating">
            <Host
              name={dataAppart.host.name}
              picture={dataAppart.host.picture}
            />

            <div className="ratings">
              <Stars rating={dataAppart.rating} />
            </div>
          </div>
        </div>
        <div className="dropdown-menus">
          <div className="dropdowns-container-appart">
            <Dropdown
              title="Description"
              content={dataAppart.description}
              class="dropdown-content-text"
            />
          </div>
          <div className="dropdowns-container-appart">
            <Dropdown
              title="Équipements"
              content={dataAppart.equipments.map((equipment) => {
                return <span key={equipment}>{equipment}</span>;
              })}
              class="dropdown-equipments-content-text"
            />
          </div>
        </div>
      </div>
    );
  }
  return <Navigate replace to="/404" />;
}

export default Appart;
