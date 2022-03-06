/** @format */

import "./CommentInput.scss";
import { Component } from "react";
import React from "react";
import Button from "../button/Button";
import { toast } from "react-toastify";

export default class CommentInput extends Component {
  state = { commentInputValid: true };

  commentValidation = (event, props) => {
    event.preventDefault();
    toast.configure({ autoclose: 200, draggable: false });
    if (event.target.comment.value === "") {
      this.setState({ commentInputValid: false });
      toast.error("Please enter a comment");
    } else {
      this.props.postComment(event.target.comment.value);
      toast.success("Post Successful!");
      event.target.comment.value = null;
      this.setState({ commentInputValid: true });
    }
  };

  render() {
    return (
      <div className="display">
        <div className="display__picture"></div>
        <form onSubmit={this.commentValidation} className="display__form">
          <label className="display__label">join the conversation</label>
          <div className="display__content">
            <textarea
              name="comment"
              className={`${
                !this.state.commentInputValid
                  ? "display__comment display__comment--error"
                  : "display__comment"
              }`}
              placeholder="Add a new comment"
            ></textarea>
            <Button className="button display__button" label="comment" />
          </div>
        </form>
      </div>
    );
  }
}
