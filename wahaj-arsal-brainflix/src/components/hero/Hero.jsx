/** @format */

import React from "react";
import VideoInfo from "../video-info/VideoInfo";
import "./hero.scss";

export default function Hero({ details }) {
  return [
    <div className="hero" id={details.id}>
      <div className="video__container">
        <video
          src="https://project-2-api.herokuapp.com/stream"
          poster={details.image}
          className="hero__video hero__play hero__pause"
        ></video>
      </div>
    </div>,
  ];
}

// export default Hero;
