import React from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import "./PlacePage.scss";
import Footer from "../../components/Footer/Footer";

export default function PlacePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: place,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/locations");
    });
  };
  return (
    <>
      <NavBar />
      <div>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {place && (
          <>
            <div className="place-link">
              <img
                src={require(`../../assets/Images/${place.imagePath}`)}
                alt="travel-img"
                className="place-link__image"
              />
            </div>
            <article className="place-link__wrapper">
              <div className="place-link__label">{place.label}</div>
              <h1 className="place-link__title">{place.location}</h1>
              <div className="place-link__difficulty">
                <div>Max 8 people</div>
                <div>Moderate difficulty</div>
                <div>Beginner experience</div>
              </div>
              <div className="place-link__overview">Overview</div>
              <div className="place-link__overview-description">
                {place.description}
              </div>
              <div className="place-link__social-icons-container">
                <div className="place-link__social-icons-wrap">
                  Share with your friends:
                  <div className="place__link-social-share">
                    <Link
                      className="place-link__social-icons facebook"
                      to="https://www.facebook.com"
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      className="place-link__social-icons instagram"
                      to="https://www.facebook.com"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link
                      className="place-link__social-icons linkedin"
                      to="https://www.facebook.com"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </div>
                </div>
                <button
                  className="place-link__delete-btn"
                  onClick={handleClick}
                >
                  Delete Location
                </button>
              </div>
            </article>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
