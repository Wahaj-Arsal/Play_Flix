/** @format */

import React, { Component } from "react";
import "./VideoDetail.scss";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";

const VideoDetail = ({
  detailsTitle,
  detailsChannel,
  detailsTimeStamp,
  detailsViews,
  detailsLikes,
  detailsDescription,
  newMoment,
  incrementLike,
}) => {
  // console.log(details);
  return (
    <div className="video">
      <h1 className="video__title">{detailsTitle}</h1>
      <div className="video__details">
        <div className="video__content">
          <p className="video__channel">By {detailsChannel}</p>
          <p className="video__date">{newMoment(detailsTimeStamp)}</p>
        </div>
        <div className="video__stats">
          <div className="video__views">
            <img src={views} alt="views icon" className="video__img" />
            <p className="video__label">{detailsViews}</p>
          </div>
          <div className="video__likes">
            <img
              src={likes}
              alt="like icon"
              className="video__img"
              onClick={incrementLike}
            />
            <p className="video__label">{detailsLikes}</p>
          </div>
        </div>
      </div>
      <div className="main">
        <p className="main__text">{detailsDescription}</p>
        {/* <p className="main__comment">{details.comments.length} Comments</p> */}
      </div>
    </div>
  );
};

export default VideoDetail;
