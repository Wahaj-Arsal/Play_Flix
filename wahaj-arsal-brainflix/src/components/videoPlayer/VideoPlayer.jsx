/** @format */

import React from "react";
import "./VideoPlayer.scss";

export default function VideoPlayer({ details }) {
  return (
    <div className="video-player" id={details.id}>
      <video
        src="https://project-2-api.herokuapp.com/stream"
        poster={details.image}
        className="video-player__video"
        controls
      ></video>
    </div>
  );
}
