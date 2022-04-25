/** @format */

import React from "react";
import "./VideoPlayer.scss";

export default function VideoPlayer({ detailsId, detailsImage }) {
  console.log(detailsImage);
  return (
    <div className="video-player" id={detailsId}>
      <video
        src=""
        poster={detailsImage}
        className="video-player__video"
        controls
      ></video>
    </div>
  );
}
