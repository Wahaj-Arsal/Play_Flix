/** @format */

import "../src/App.scss";
import React from "react";
import Header from "./components/header/Header.jsx";
import videosDetails from "./assets/Data/video-details.json";
import videosInfo from "./assets/Data/videos.json";
import VideoInfo from "./components/video-info/VideoInfo";
import AsideVideo from "./components/aside/AsideVideo";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import CommmentsRender from "./components/commentsRender/CommentsRender";

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
        <VideoPlayer details={this.state.details[0]} />
        <VideoInfo details={this.state.details[0]} />
        <CommmentsRender details={this.state.details[0]} />
        <AsideVideo
          videos={this.state.videos}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}
