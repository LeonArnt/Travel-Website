import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.scss";

function CardItem({ imagePath, text, path, label }) {
  return (
    <>
      <li className="card">
        <Link className="card__link" to={path}>
          <figure className="card__picture" data-category={label}>
            <img src={imagePath} alt="travel-img" className="card__image" />
          </figure>
          <div className="cards__info">
            <h5 className="card__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
