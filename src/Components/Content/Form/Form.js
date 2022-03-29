import { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [exit, setExit] = useState(false);
  const nextHandler = () => {
    setExit(true);
    setTimeout(() => {
      props.pageSelector(5);
    }, 1000);
  };
  const backHandler = () => {
    setExit(true);
    setTimeout(() => {
      props.pageSelector(3);
    }, 1000);
  };
  return (
    <section className={!exit ? "form-cont" : "form-cont form-exit"}>
      <h3 className="form-title">WE ARE ALMOST THERE....</h3>
      <p className="form-desc">Tell Us:</p>
      <div className="form-reason">
        <span>I'm buying this flower for</span>
        <input
          className="input-reason"
          type="textarea"
          placeholder="my fiance..."
        ></input>
      </div>
      <textarea className="form-story" placeholder="What's your story:I'm thinking about someone special in my life..."></textarea>
      <div className="form-msg">
        <div>Message on Card:</div>
        <textarea
          type="textarea"
          className="input-msg"
          placeholder="Message on card(text limit 250 words)"
        ></textarea>
      </div>
      <div className="form-check">
        <input className="checkbox" type="checkbox"></input>
        <span>I'm sending this flower anonymously</span>
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
