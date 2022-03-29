import { useState } from "react";
import "./Price.css";
export default function Price(props) {
  const [exit, setExit] = useState(false);
  const nextHandler = () => {
    setExit(true);
    setTimeout(() => {
      props.pageSelector(4);
    }, 1000);
  };
  const backHandler = () => {
    setExit(true);
    setTimeout(() => {
      props.pageSelector(2);
    }, 1000);
  };
  return (
    <section className={!exit ? "price-cont" : "price-cont price-exit"}>
      <h3 className="price-title">PRICING</h3>
      <div className="price-item-one prices">
        <input type="radio"></input>
        <span>RM 545</span>
      </div>
      <div className="price-item-two prices">
        <input type="radio"></input>
        <span>RM 675</span>
      </div>
      <div className="price-item-three prices">
        <input type="radio"></input>
        <span>RM 725</span>
      </div>
      <div className="price-item-four prices">
        <input type="radio"></input>
        <span>RM 865</span>
      </div>
      <div className="price-item-five prices">
        <input type="radio"></input>
        <span>RM 975</span>
      </div>
      <button className="palette-back-button" onClick={backHandler}>
        Back
      </button>
      <button className="palette-button" onClick={nextHandler}>
        Next
      </button>
      <p className="price-desc">
        If you would prefer a more lvish, show stopping arrangment that
        surpasses the estimated prices provided,
        <br />
        please reach out to us at 012-345 6678 for a more personalize
        experience. It will be our pleasure to serve <br />
        you
      </p>
    </section>
  );
}
