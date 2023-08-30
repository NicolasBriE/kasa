import "./tags.css";

function Tags(props) {
  return (
    <div className="tag">
      <span>{props.name}</span>
    </div>
  );
}

export default Tags;
