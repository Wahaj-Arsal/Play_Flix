/** @format */

import "./CommentsDisplay.scss";

const CommentsDisplay = ({ comment, newMoment }) => {
  // const commentMarkup = comments.comments.map((comment) => {
  return (
    <div className="comment__container">
      <div className="comment__tile">
        <p></p>
        <div className="comment__picture"></div>
        <div className="comment__content">
          <div className="comment__header">
            <p className="comment__name">{comment.name}</p>
            <p className="comment__date">{newMoment(comment.timestamp)}</p>
          </div>
          <p className="comment__text">{comment.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsDisplay;
