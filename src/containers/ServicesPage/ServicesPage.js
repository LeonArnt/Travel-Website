import React, { useState } from "react";
import "../../App.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./ServicesPage.scss";
import { useNavigate } from "react-router-dom";

function ServicesPage() {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [label, setLabel] = useState("adventurous");
  const [location, setLocation] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const imagePath = image;
    const newLocation = { imagePath, label, text, description, location };
    console.log(image);

    setIsPending("true");

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLocation),
    }).then(() => {
      setIsPending("false");
      navigate("/locations");
      console.log("new place");
    });
  };

  return (
    <>
      <NavBar />
      <div className="services">
        <h1 className="services__title">Share your location</h1>
      </div>
      <div className="services__form-wrapper">
        <form className="services__form" onSubmit={handleSubmit}>
          <h2 className="services__form-title">Enter your info here</h2>
          <span className="services__form-labels">Attach Picture</span>
          <label className=" services__pic-attach">
            Choose File...
            <input
              name={image}
              onChange={(e) => {
                setImage(e.target.files[0].name);
              }}
              aria-label="Choose file..."
              className="services__pic-input"
              required
              type="file"
            />
          </label>
          <label className="services__form-labels">
            Enter the name of the location
          </label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="services__location-input"
            required
            type="text"
          />
          <label className="services__form-labels">
            Enter a description for the place
          </label>
          <textarea
            required
            className="services__textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <label className="services__form-labels">
            Enter an Overview from your location
          </label>
          <textarea
            required
            value={description}
            className="services__textarea textarea-overview"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label className="services__form-labels">
            Choose the type of place it is
          </label>
          <select
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="services__select-input"
          >
            <option value="Adventurous">Adventurous</option>
            <option value="Luxurious">Luxurious</option>
            <option value="Mysterious">Mysterious</option>
            <option value="Fascinating">Fascinating</option>
          </select>

          {!isPending && <button className="services__button">Submit</button>}
          {isPending && (
            <button className="services__button" disabled>
              Sharing...
            </button>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ServicesPage;
