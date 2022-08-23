import React from "react";
import { Link } from "react-router-dom";
import "./LocationItem.scss";

export default function LocationItem({
  imagePath,
  text,
  label,
  location,
  path,
  id,
}) {
  return (
    <div className="location">
      <Link className="location__link" to={`/place/${id}`}>
        <figure
          className="location__picture-wrap location__position"
          data-category={label}
        >
          <img
            src={require(`../../assets/Images/${imagePath}`)}
            alt="travel-img"
            className="location__image"
          />
        </figure>

        <div className="location__position location__description">
          <div className="location__text">{text}</div>
          <div className="location__destination-name">{location}</div>
        </div>
      </Link>
    </div>
  );
}
