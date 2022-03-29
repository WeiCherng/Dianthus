import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="header-container">
          <h2 className={props.color ? "header-name black" : "header-name"}>
            DIANTHUS
          </h2>
          <div className="line-break">
            <div
              className={
                props.color ? "header-fill blackfill" : "header-fill"
              }
            ></div>
          </div>
          <span className={props.color ? "header-desc black" : "header-desc"}>
            LUXURY FLORALS
          </span>
        </div>
      </div>
      <div className="icons">
        <div className="icons-img-cont">
          <img className="cart" src="shop-cart.png" alt="shop-chart" />
        </div>
        <section className="line-container">
          <div className={props.color ? "line blackfill" : "line"}></div>
          <div className={props.color ? "line blackfill" : "line"}></div>
          <div className={props.color ? "line blackfill" : "line"}></div>
        </section>
      </div>
    </header>
  );
}
