/** @format */

import "../src/App.scss";
import React, { Component } from "react";
import moment from "moment";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

// import videosDetails from "./assets/Data/video-details.json";
// import videosInfo from "./assets/Data/videos.json";

import Home from "./pages/home/Home.jsx";
import Header from "./components/header/Header";
import Upload from "./pages/upload/Upload";

export default function App() {
  // handleChange = (e) => {
  //   const filteredVideos = videosInfo.filter(
  //     (video) => video.id !== e.target.id
  //   );

  //   const filteredVideoDetails = videosDetails.filter(
  //     (videoDetail) => videoDetail.id === e.target.id
  //   );

  //   this.setState({
  //     details: filteredVideoDetails,
  //     videos: filteredVideos,
  //   });
  // };
  // console.log(this.state.videos);
  // console.log(this.state.details);
  return (
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <Home
              // details={this.state.details}
              // getDetails={this.getDetails}
              {...routerProps}
              // newMoment={this.newMoment}
            />
          )}
        />
        <Route
          path="/upload"
          render={(routerProps) => <Upload {...routerProps} />}
        />
        <Route
          path="/video/:videoID"
          render={(routerProps) => (
            <Home
              // details={this.state.details}
              // videos={this.state.videos}
              // newMoment={this.newMoment}
              {...routerProps}
            />
          )}
        />
      </Switch>
    </div>
  );
}
