import activeStar from "../../assets/images/Star-active.PNG";
import inactiveStar from "../../assets/images/Star-inactive.PNG";
const stars = [1, 2, 3, 4, 5];

function Stars(props) {
  return stars.map((star, index) => {
    if (props.rating >= star) {
      return (
        <div key={index}>
          <img src={activeStar} alt={star}></img>
        </div>
      );
    } else {
      return (
        <div key={index}>
          <img src={inactiveStar} alt={star}></img>
        </div>
      );
    }
  });
}

export default Stars;
