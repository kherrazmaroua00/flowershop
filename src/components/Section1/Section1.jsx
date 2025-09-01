import React from "react";
import "./Section1.css";
import b1 from "/public/img/b1.png";
import b2 from "/public/img/b2.png";
import b3 from "/public/img/b3.png";
export const Section1 = () => {
  return (
    <div className="s1">
      <h1></h1>
      <h1>Flowers for you</h1>
      <h1>Send Love with Every Flower</h1>
      <button className="button">
        <a href="#ordernow">Order Now</a>
      </button>
      <div className="img">
        <img src={b3} alt="bouquet3" />
        <img src={b2} alt="bouquet2" />
        <img src={b1} alt="bouquet1" />
      </div>
      <div className="c" id="home">
        <p>
          A simple flower shop website where customers create custom bouquets,
          send their order, and get notified once it's ready.
        </p>
      </div>
    </div>
  );
};
