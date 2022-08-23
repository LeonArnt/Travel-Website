import React from "react";
import "../../App.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import useFetch from "../../hooks/useFetch";
import Locations from "../../components/Locations/Locations";

function LocationsPage() {
  const { data } = useFetch("http://localhost:8000/blogs");
  return (
    <>
      <NavBar />
      <div className="locations">Locations</div>
      {data && <Locations data={data} />}
      <Footer />
    </>
  );
}

export default LocationsPage;
