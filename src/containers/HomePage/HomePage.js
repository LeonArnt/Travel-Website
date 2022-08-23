import React from "react";
import "../../App.css";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import useFetch from "../../hooks/useFetch";

function HomePage() {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      <NavBar />
      <div>
        <Banner />
        {data && <Cards data={data} />}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
