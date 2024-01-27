import React from "react";

import "./Hero.css";
import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={hero} className="hero-photo" />
      <div className="hero-text">
        <h1><strong>Online Experiences</strong></h1>
        <p>
          Join unique interactive activities led by one-of-a-kinde hosts-all
          without leaving home
        </p>
      </div>
    </div>
  );
}
