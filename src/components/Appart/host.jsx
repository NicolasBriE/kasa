import "./host.css";

function Host(props) {
  return (
    <div className="host">
      <div className="host-name">
        <p>{props.name}</p>
      </div>
      <div className="host-picture">
        <img src={props.picture} alt="personne"></img>
      </div>
    </div>
  );
}

export default Host;
