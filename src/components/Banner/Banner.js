import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <video
        src={require("../../assets/videos/video-1.mp4")}
        autoPlay
        loop
        muted
      />
      <h1 className="banner__title">ADVENTURE AWAITS</h1>
      <p className="banner__quote">
        Dare to live the life you've always wanted
      </p>
      <div className="banner__button">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Banner;
