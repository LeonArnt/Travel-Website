import React from "react";
import { Link } from "react-router-dom";
import "../Cards/Cards.scss";

function CardItem({ id, src, text, path, label }) {
  return (
    <div>
      <li className="card">
        <Link className="card__link" to={path}>
          <figure className="card__picture" data-category={label}>
            <img src={src} alt="travel-img" className="card__image" />
          </figure>
          <div className="cards__info">
            <h5 className="card__text">{text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;
