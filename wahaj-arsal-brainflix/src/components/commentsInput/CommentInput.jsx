/** @format */

import "./CommentInput.scss";
import React from "react";
import Button from "../button/Button";

const CommentInput = () => {
  return (
    <div className="display">
      <div className="display__picture"></div>
      <form className="display__form">
        <label className="display__label">join the conversation</label>
        <div className="display__content">
          <textarea
            className="display__comment"
            placeholder="Add a new comment"
          ></textarea>
          <Button className="button display__button" label="comment" />
          {/* <button className="display__btn" type="button">
          Comment
        </button> */}
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
