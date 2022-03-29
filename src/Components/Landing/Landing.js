import { useState } from "react";
import Logo from "../Logo/Logo";
import "./Landing.css";

export default function Landing(props) {
    const [exit, setExit] = useState(false)
    const btnHandler = () => {
        setExit(true)
        setTimeout(()=>{
          props.onStart(true)
        }, 1000)
        
    }
  return (
    <section className={"landing-container " + (exit && "landing-exit")}>
      <Logo/>
      <div className="green-pane"></div>
      <div className="img-cont">
        <img className="main-pic" src="bespoke-hero.jpg" alt="main-pic" />
      </div>
      <section className="landing-content">
        <div className="landing-title">Style Your Bouquet</div>
        <p className="landing-desc">Flowers are the ultimate decorating accessory and
        a wonderful expression of sentiment</p>
        <p className="landing-desc">bringing the vivid beauty of nature to the comfort and warmth of home.</p>
      </section>
      <button className="landing-button" onClick={btnHandler}>LET'S CREATE</button>
    </section>
  );
}
