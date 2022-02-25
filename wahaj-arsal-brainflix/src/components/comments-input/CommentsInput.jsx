/** @format */

import React from "react";

const CommentInput = () => {
  return (
    <div className="display__content">
      <div className="display__picture"></div>
      <form className="display__form">
        <label className="display__label">Comment</label>
        <textarea
          className="display__comment"
          placeholder="Add a new comment"
        ></textarea>
        <button className="display__btn" type="button">
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
