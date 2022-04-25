/** @format */

import "./upload.scss";
import "react-toastify/dist/ReactToastify.css";

import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import React, { Component } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL_UPLOAD = `${API_URL}/upload`;

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      formValid: false,
      inputTitleValid: true,
      inputDescriptionValid: true,
    };
  }

  //******** API Call To Upload A Video ******** */
  //Posts A Comment To The Video
  uploadVideo = async (event) => {
    const newVideo = {
      title: this.state.title,
      description: this.state.description,
      image: { thumbnail },
    };
    await axios.post(API_URL_UPLOAD, newVideo).then((response) => {
      // this.getNewComment();
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  isFormValid = (e) => {
    if (this.state.title.length < 3 || this.state.description.length < 5) {
      if (this.state.title.length < 3) {
        this.setState({ inputTitleValid: false });
        toast.error("Error: Insert Video Title");
        if (this.state.description.length < 5) {
          this.setState({ inputDescriptionValid: false });
          toast.error("Error: Insert Video Description");
        } else {
          this.setState({ inputDescriptionValid: true });
        }
      } else {
        this.setState({ inputTitleValid: true });
        toast.error("Error: Insert a Video Description");
        return;
      }
    } else {
      this.setState({ inputTitleValid: true, inputDescriptionValid: true });
      toast.success("Uploading...");
      this.uploadVideo();
      e.target.title.value = null;
      e.target.description.value = null;
      this.delayTimerRedirect();
    }
  };

  delayTimerRedirect = () => {
    setTimeout(() => {
      this.props.history.push("/");
    }, 6000);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    toast.configure();
    this.isFormValid(e);
  };

  render() {
    return (
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__container">
          <form className="upload__form" onSubmit={this.handleSubmit}>
            <div className="upload__thumbnail">
              <label className="upload__label">video thumbnail</label>
              <img className="upload__img" src={thumbnail}></img>
            </div>
            <div className="upload__content">
              <label className="upload__label">title your video</label>
              <input
                className={`${
                  !this.state.inputTitleValid
                    ? "upload__comment-title upload__comment-title--error"
                    : "upload__comment-title"
                }`}
                type="text"
                name="title"
                onChange={this.handleChange}
                placeholder="Add a title to your video"
              />
              <label className="upload__label">add a video description</label>
              <textarea
                className={`${
                  !this.state.inputDescriptionValid
                    ? "upload__comment-description upload__comment-description--error"
                    : "upload__comment-description"
                }`}
                type="text"
                name="description"
                onChange={this.handleChange}
                placeholder="Add a description to your video"
              />
            </div>
            <div className="upload__button">
              <button className="button upload__submit" type="submit">
                publish
              </button>
              <button type="button" className="upload__cancel">
                cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
