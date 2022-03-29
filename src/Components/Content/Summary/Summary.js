import { useState } from "react";
import "./Summary.css";

export default function Summary(props) {
  const [exit, setExit] = useState(false)
  const backHandler = () => {
    setExit(true)
    setTimeout(() => {
      props.pageSelector(4);
    }, 1000);
  };
  return (
    <section className={!exit ? "summary-cont" : "summary-cont summary-exit"}>
      <h3 className="summary-title">YOUR ORDER SUMMARY</h3>
      <div className="summary-content">
        <div className="row">
          <span>Arragnment</span>
          <span>Color Platelle</span>
          <span>Price</span>
        </div>
        <div className="rowbreak"></div>
        <div className="row">
          <div className="summary-flower-cont">
            <img className="summary-flower" src="Classic-hand-tied-bouquet.jpg" alt="flower"></img>
          </div>
          <div className="summary-palette-cont">
            <img className="summary-palette" src="spring-1.png" alt="spring"></img>
          </div>
          <div>RM625</div>
        </div>
        <div className="last-row">
          <span>CLASSIC HAND <br/>TIED BOUQUET</span>
        </div>
      </div>
      <button className="palette-back-button" onClick={backHandler}>Back</button>
      <button className="order-button">PLACE YOUR ORDER</button>
    </section>
  );
}
