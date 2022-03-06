/** @format */

import React from "react";
import "./VideoPlayer.scss";

export default function VideoPlayer({ detailsId, detailsImage }) {
  return (
    <div className="video-player" id={detailsId}>
      <video
        src="https://project-2-api.herokuapp.com/stream"
        poster={detailsImage}
        className="video-player__video"
        controls
      ></video>
    </div>
  );
}
