/** @format */

import React from "react";

export default function VideoInfo({ details }) {
  return (
    <div>
      <h1 className="video__title">{details.title}</h1>
      <div className="video__details">
        <div className="video__content">
          <p className="video__artist">{details.channel}</p>
          <p className="video__date">{details.timestamp}</p>
        </div>
        <div className="video__stats">
          <p className="video__views">{details.views}</p>
          <p className="video__likes">{details.likes}</p>
        </div>
      </div>
      <div className="main">
        <p className="main__text">{details.description}</p>
      </div>
    </div>
  );
}
