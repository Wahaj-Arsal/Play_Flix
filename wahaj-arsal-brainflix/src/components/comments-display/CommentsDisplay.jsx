/** @format */

const CommentsDisplay = (details) => {
  return (
    <section className="comment">
      <div className="comment__tile">
        <div className="comment__picture"></div>
        <div className="comment__content">
          <div className="comment__header">
            <p className="comment__name">{details.name}</p>
            <p className="comment__date">a year ago</p>
          </div>
          <p className="comment__text">
            This is art. This is inexplicable magic expressed in the purest way,
            everything that makes up this majestic work deserves reverence. Let
            us appreciate this for what it is and what it contains.
          </p>
          <div className="comment__icons">
            <button className="comment__like">
              0
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsDisplay;
