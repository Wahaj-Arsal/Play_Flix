/** @format */

import "../src/App.scss";
import React from "react";
import moment from "moment";
import Header from "./components/header/Header.jsx";
import videosDetails from "./assets/Data/video-details.json";
import videosInfo from "./assets/Data/videos.json";
// import VideoDetail from "./components/videoDetail/VideoDetail";
// import AsideVideo from "./components/sideVideos/SideVideo";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
// import CommmentsRender from "./components/commentsRender/CommentsRender";

export default class App extends React.Component {
  state = {
    details: videosDetails,
    videos: videosInfo.slice(1),
  };

  newMoment(commentDate) {
    let x = new moment(commentDate);
    let y = new moment();
    let duration = moment.duration(-y.diff(x)).humanize(true);
    return duration;
  }

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
        {/* <section className="desktop">
          <section className="desktop__left">
            <VideoDetail
              details={this.state.details[0]}
              newMoment={this.newMoment}
            />
            <CommmentsRender
              details={this.state.details[0]}
              newMoment={this.newMoment}
            />
          </section>
          <section className="desktop__right">
            <AsideVideo
              videos={this.state.videos}
              handleChange={this.handleChange}
            />
          </section>
        </section> */}
      </>
    );
  }
}
