import { useState } from "react";
import "./Palette.css";

export default function Palette(props) {
  const [exit, setExit] = useState(false);
  const [selected, setSelect] = useState("")

  const paletteHandler = (e) => {
    setSelect(e.target.alt)
  }

  const nextHandler = () => {
    setExit(true);
    setTimeout(() => {
      props.pageSelector(3);
    }, 1000);
  };
  const backHandler = () => {
    setExit(true);
    setTimeout(() => {
      props.pageSelector(1);
    }, 1000);
  };
  return (
    <section className={!exit ? "palette-cont" : "palette-cont palette-exit"}>
      <h3 className="palette-title">COLOUR PALETTE</h3>
      <p className="palette-desc">
        Please choose ONE colour palette from selection below.
      </p>
      <p className="palette-desc-two">
        These colour palettes based on the four seasons - spring, autumn,
        and winter, and your designer will curate and select flowers that
        best suited to your choen style arrangment.
      </p>

      <div className="seasons">
        <div className="spring">
          <h4 className="season">Spring</h4>
          <div className="palette-select" onClick={paletteHandler}>
            <input type="radio"></input>
            <div className="palette-img-cont">
              <img
                className="palette-img"
                src="spring-1.png"
                alt="spring1"
              ></img>
            </div>
          </div>
          <div className="palette-select" onClick={paletteHandler}>
            <input type="radio"></input>
            <div className="palette-img-cont">
              <img
                className="palette-img"
                src="spring-2.png"
                alt="spring2"
              ></img>
            </div>
          </div>
        </div>
        <div className="summer">
          <h4 className="season">Summer</h4>
          <div className="palette-select" onClick={paletteHandler}>
            <input type="radio"></input>
            <div className="palette-img-cont">
              <img
                className="palette-img"
                src="summer-1.png"
                alt="summer1"
              ></img>
            </div>
          </div>
          <div className="palette-select" onClick={paletteHandler}>
            <input type="radio"></input>
            <div className="palette-img-cont">
              <img
                className="palette-img"
                src="summer-2.png"
                alt="summer2"
              ></img>
            </div>
          </div>
        </div>
        <div className="autumn">
          <h4 className="season">Autumn</h4>
          <div className="palette-select" onClick={paletteHandler}>
            <input type="radio"></input>
            <div className="palette-img-cont">
              <img
                className="palette-img"
                src="autumn-1.png"
                alt="autumn1"
              ></img>
            </div>
          </div>
          <div className="palette-select" onClick={paletteHandler}>
            <input type="radio"></input>
            <div className="palette-img-cont">
              <img
                className="palette-img"
                src="autumn-2.png"
                alt="autumn2"
              ></img>
            </div>
          </div>
        </div>
        <div className="winter">
          <h4 className="season">Winter</h4>
          <div className="palette-select" onClick={paletteHandler}>
            <input type="radio"></input>
            <div className="palette-img-cont">
              <img
                className="palette-img"
                src="winter-1.png"
                alt="winter1"
              ></img>
            </div>
          </div>
          <div className="palette-select" onClick={paletteHandler}>
            <input type="radio"></input>
            <div className="palette-img-cont">
              <img
                className="palette-img"
                src="winter-1.png"
                alt="winter2"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <button className="palette-back-button" onClick={backHandler}>
        Back
      </button>
      <button className="palette-button" onClick={nextHandler}>
        Next
      </button>
    </section>
  );
}
