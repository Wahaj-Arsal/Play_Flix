/** @format */

import "../src/App.scss";
import React from "react";
import Header from "./components/header/Header.jsx";
// import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import CommentsInput from "./components/comments-input/CommentsInput";
import CommentsDisplay from "./components/comments-display/CommentsDisplay";
import videosDetails from "./assets/Data/video-details.json";
import videosInfo from "./assets/Data/videos.json";
import Hero from "./components/hero/Hero";
import VideoInfo from "./components/video-info/VideoInfo";
import Aside from "./components/aside/Aside";

export default class App extends React.Component {
  state = {
    details: videosDetails,
    videos: videosInfo.slice(1),
  };

  handleChange = (e) => {
    const filteredVideos = videosInfo.filter(
      (video) => video.id !== e.target.id
    );

    const filteredVideoDetails = videosDetails.filter(
      (videoDetail) => videoDetail.id === e.target.id
    );

    this.setState({
      details: filteredVideoDetails,
      videos: filteredVideos,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main videos={this.state.videos} handleChange={this.handleChange} />
        <Hero details={this.state.details[0]} />
        <VideoInfo details={this.state.details[0]} />
        <CommentsInput />
        <CommentsDisplay details={this.state.details[0]} />
      </>
    );
  }
}
