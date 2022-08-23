import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Cards.scss";

function Cards({ data }) {
  const renderTwoProducts = () => {
    return data.slice(0, 2).map((places) => {
      return <CardItem key={places.id} {...places} />;
    });
  };
  const renderThreeProducts = () => {
    return data.slice(2, 5).map((places) => {
      return <CardItem key={places.id} {...places} />;
    });
  };

  return (
    <div className="cards">
      <h1 className="cards__title">Check out the featured locations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">{renderTwoProducts()}</ul>
          <ul className="cards__items">{renderThreeProducts()}</ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
