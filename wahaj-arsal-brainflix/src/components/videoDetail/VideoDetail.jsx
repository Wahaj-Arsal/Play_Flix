/** @format */

import React from "react";
import "./VideoDetail.scss";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";

export default function VideoDetail({ details, newMoment }) {
  return (
    <div className="video">
      <h1 className="video__title">{details.title}</h1>
      <div className="video__details">
        <div className="video__content">
          <p className="video__channel">By {details.channel}</p>
          <p className="video__date">{newMoment(details.timestamp)}</p>
        </div>
        <div className="video__stats">
          <div className="video__views">
            <img src={views} alt="views icon" className="video__img" />
            <p className="video__label">{details.views}</p>
          </div>
          <div className="video__likes">
            <img src={likes} alt="like icon" className="video__img" />
            <p className="video__label">{details.likes}</p>
          </div>
        </div>
      </div>
      <div className="main">
        <p className="main__text">{details.description}</p>
        <p className="main__comment">{details.comments.length} Comments</p>
      </div>
    </div>
  );
}
