/** @format */
import React from "react";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import VideoDetail from "../../components/videoDetail/VideoDetail";
import AsideVideo from "../../components/sideVideos/SideVideo";
import CommentsRender from "../../components/commentsRender/CommentsRender";
import { Component } from "react";
import axios from "axios";
import moment from "moment";
import CommentInput from "../../components/commentsInput/CommentInput";
import { toast } from "react-toastify";

const API_URL = `https://project-2-api.herokuapp.com/videos/`;
const API_KEY = `?api_key=5b8e876e-df7c-4475-8dff-3cd2ed0b1aab`;

const API_URL_ID = (id) =>
  `https://project-2-api.herokuapp.com/videos/${id}?api_key=5b8e876e-df7c-4475-8dff-3cd2ed0b1aab`;

const API_URL_ID_Comment = (id) =>
  `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=5b8e876e-df7c-4475-8dff-3cd2ed0b1aab`;

const API_URL_ID_Comment_Delete = (videoID, commentID) =>
  `https://project-2-api.herokuapp.com/videos/${videoID}/comments/${commentID}?api_key=5b8e876e-df7c-4475-8dff-3cd2ed0b1aab`;

let newId = "";

export default class Home extends Component {
  state = {
    details: {},
    videos: [],
    videoID: "",
  };

  //******** WORKING API AND MOUNTING START ******** */

  //******** Loads When Page is Refreshed ******** */
  componentDidMount() {
    this.getData();
  }

  //******** Loads When State Changes ******** */
  componentDidUpdate(prevProps, props) {
    newId = this.props.match.params.videoID;
    if (newId !== prevProps.match.params.videoID) {
      if (this.props.match.path === "/") {
        this.getDefaultVideo();
        return;
      }
      this.getNewData(newId);
    }
  }

  //******** Loads When Logo Is Pressed ******** */
  //Calls the whole list of vidoes and deletes the first one
  getDefaultVideo = async () => {
    const videoResponse = await axios.get(API_URL + API_KEY);
    this.getNewData(videoResponse.data[0].id);
  };

  //******** Validation When The Delete Button Is Pressed ******** */
  //Checks to see if the button ir the img inside the button is pressed to get the comment tile ID
  // selectComment = (e) => {
  //   if (e.target.classList.contains("comment__img")) {
  //     let button =
  //       e.target.parentElement.parentElement.parentElement.parentElement
  //         .parentElement.id;
  //     return button;
  //   } else if (e.target.classList.contains("comment__button")) {
  //     let button =
  //       e.target.parentElement.parentElement.parentElement.parentElement.id;
  //     return button;
  //   }
  // };

  //******** API Call When The Delete Button Is Pressed ******** */
  //Takes the ID from the selectComment function and deletes the comment on a video
  deleteComment = async (e) => {
    e.preventDefault();
    let buttonID = this.selectComment(e);
    await axios.delete(API_URL_ID_Comment_Delete(this.state.videoID, buttonID));
    toast.success("Comment Deleted");
    this.getNewComment();
  };

  //******** API Call To Post A Comment ******** */
  //Posts A Comment To The Video
  postComment = async (event) => {
    const newComment = {
      name: "Wahaj",
      comment: event,
    };
    await axios
      .post(API_URL_ID_Comment(this.state.videoID), newComment)
      .then((response) => {
        this.getNewComment();
      });
  };

  //******** API Call To Only Respond With New Comment ******** */
  //This function re-renders the comments section, including the new comment
  getNewComment = async () => {
    const response = await axios.get(API_URL_ID(this.state.videoID));
    this.setState({
      details: response.data,
    });
  };

  //******** API Call When The Page Is Refreshed ******** */
  //This function is called when componentDidMount
  getData = async () => {
    const videoResponse = await axios.get(API_URL + API_KEY);
    const detailsResponse = await axios.get(
      API_URL_ID(videoResponse.data[0].id)
    );
    this.setState({
      videos: videoResponse.data,
      details: detailsResponse.data,
      videoID: videoResponse.data[0].id,
    });
  };

  //******** API Call When An Aside Video Is Clicked Upon ******** */
  //This function gets the details of the new aside video which the user selects.
  getNewData = async (newId) => {
    const videoResponse = await axios.get(API_URL + API_KEY);
    const response = await axios.get(API_URL_ID(newId));
    this.setState({
      details: response.data,
      videos: videoResponse.data.filter((video) => video.id !== newId),
      videoID: newId,
    });
  };

  //******** WORKING API AND MOUNTING END ******** */

  //******** Function To Humanise Comment Times ******** */
  newMoment = (commentDate) => {
    let x = new moment(commentDate);
    let y = new moment();
    let duration = moment.duration(-y.diff(x)).humanize(true);
    return duration;
  };

  render() {
    const { details } = this.state;
    const { videos } = this.state;
    return (
      <>
        {!videos && !details ? (
          <p>Loading...</p>
        ) : (
          <>
            <VideoPlayer detailsId={details.id} detailsImage={details.image} />
            <section className="desktop">
              <section className="desktop__left">
                <VideoDetail
                  detailsTitle={details.title}
                  detailsChannel={details.channel}
                  detailsTimeStamp={details.timestamp}
                  detailsViews={details.views}
                  detailsLikes={details.likes}
                  detailsDescription={details.description}
                  newMoment={this.newMoment}
                />
                <CommentInput
                  postComment={this.postComment}
                  props={this.props}
                  // commentValidation={this.commentValidation}
                />
                <CommentsRender
                  detailsComment={details.comments}
                  deleteComment={this.deleteComment}
                  newMoment={this.newMoment}
                  props={this.props}
                />
              </section>
              <section className="desktop__right">
                <AsideVideo
                  videos={videos}
                  currentVideo={this.state.videoID}
                  props={this.props}
                />
              </section>
            </section>
          </>
        )}
      </>
    );
  }
}
