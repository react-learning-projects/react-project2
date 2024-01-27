import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  // console.log(props.coverImg);
  return (
    <div className="card">
      <img src={props.coverImg} className="card-img" />
      <div className="card-info">
        <div className="card-stats">
          <div className="card-icon-star">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <span>{props.stats.rating}</span>
          <span>({props.stats.reviewCount})</span>
        </div>
        <div className="card-location">
          <span>
            <FontAwesomeIcon icon={faCircle} /> {props.location}
          </span>
        </div>
      </div>
      <div className="card-text">
        <h3>{props.title}</h3>

        <div className="card-price">
          <span>
            <strong>From ${props.price}</strong> /person
          </span>
        </div>
      </div>
    </div>
  );
}
