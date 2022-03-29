import "./Flower.css";

export default function Flower(props) {
  let img = props.img + ".jpg"
  return (
    <div className="flower-cont">
      <div className="flower-item">
        <input type="radio" />
        <div className="flower-img-cont">
          <img
            className="flower-img"
            src={img}
            alt="flower"
          ></img>
        </div>
      </div>
      <div className="flower-select">
        <div className="flower-desc">{props.name}</div>
        <span className="plus">+</span>
      </div>
    </div>
  );
}
