/** @format */

const CommentsDisplay = ({ comment }) => {
  // const commentMarkup = comments.comments.map((comment) => {
  return (
    <div className="comment__tile">
      <p></p>
      <div className="comment__picture"></div>
      <div className="comment__content">
        <div className="comment__header">
          <p className="comment__name">{comment.name}</p>
          <p className="comment__date">{comment.timestamp}</p>
        </div>
        <p className="comment__text">{comment.comment}</p>
        <div className="comment__icons">
          <button className="comment__like">
            {comment.likes}
            <img
              className="comment__img"
              alt="like button"
              src="../assets/Icons/SVG/icon-like.svg"
            />
          </button>
          <button className="comment__delete">
            <img
              className="comment__img"
              alt="delete button"
              src="../assets/Icons/SVG/icon-delete.svg"
            />
          </button>
          {/* <Button /> */}
        </div>
      </div>
    </div>
  );
  // });
  // return { commentMarkup };
};

export default CommentsDisplay;
