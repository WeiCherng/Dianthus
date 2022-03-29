import { useState } from "react";
import Flower from "./Flower";
import "./Type.css";

export default function Type(props) {
  const [exit, setExit] = useState(false)
  const btnHandler = () => {
    setExit(true)
    setTimeout(() => {
      props.pageSelector(2);
    }, 1000);
  };
  return (
    <section className={!exit ? "type-cont" : "type-cont type-exit"}>
      <h3 className="type-title">SELECT ARRANGMENT</h3>
      <div className="type-row">
        <Flower name={"WHIMSICAL FLORALS"}  img={"whimsical-florals"}/>
        <Flower name={"CLASSIC HAND TIED BOUQUET"} img={"Classic-hand-tied-bouquet"}/>
        <Flower name={"TABLETOP ARRANGMENT"} img={"Tabletop-arrangement"}/>
      </div>
      <div className="type-row">
        <Flower name={"STRUCTURAL AND SLENDER"} img={"Structural-and-slender"}/>
        <Flower name={"GARDEN STYLE CENTERPIECE"} img={"Garden-style-centerpiece"}/>
        <Flower name={"TABLETOP ARRANGEMENT"} img={"Tabletop-arrangement"}/>
      </div>
      <button className="type-button" onClick={btnHandler}>Next</button>
    </section>
  );
}
