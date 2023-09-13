import "./background.css";

function Background({ image, texte }) {
  return (
    <div className="background">
      <img src={image} className="background-image" alt="image Home" />
      <div className="background-text">{texte}</div>
    </div>
  );
}

export default Background;
