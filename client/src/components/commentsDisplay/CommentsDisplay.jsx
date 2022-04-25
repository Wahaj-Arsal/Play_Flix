/** @format */

import "./CommentsDisplay.scss";
import deleteIcon from "../../assets/Icons/icon-delete.svg";

const CommentsDisplay = ({ comment, newMoment, deleteComment }) => {
  return (
    <div className="comment__container" id={comment.id}>
      <div className="comment__tile">
        <div className="comment__picture"></div>
        <div className="comment__content">
          <div className="comment__header">
            <p className="comment__name">{comment.name}</p>
            <p className="comment__date">{newMoment(comment.timestamp)}</p>
          </div>
          <p className="comment__text">{comment.comment}</p>
          <div className="comment__icons">
            <button className="comment__button" onClick={deleteComment}>
              <img className="comment__img" src={deleteIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsDisplay;
