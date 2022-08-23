import React from "react";
import useData from "../../hooks/useData";
import CardItem from "../CardItem/CardItem";
import "./Cards.scss";

function Cards() {
  const { locations } = useData("http://localhost:8000/blogs");
  const data = locations;

  const LogData = () => console.log(data);

  LogData();

  const renderAllProducts = () => {
    return data.map((places) => {
      return <CardItem key={"places_" + places.id} {...places} />;
    });
  };

  return (
    <div className="cards">
      <h1 className="cards__title">Check out the locations here</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <div>{renderAllProducts()}</div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
