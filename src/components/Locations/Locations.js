import React, { useState } from "react";
import LocationItem from "../LocationItem/LocationItem";
import "./Locations.scss";

export default function Locations({ data }) {
  const renderAllLocations = () => {
    return data.slice(6).map((locations) => {
      return <LocationItem key={locations.id} {...locations} />;
    });
  };

  return (
    <div className="places">
      <h1 className="places__title">Check out all the locations here</h1>
      <div className="places__container">
        <div className="places__wrapper">
          <div className="places__locations">{renderAllLocations()}</div>
        </div>
      </div>
    </div>
  );
}
