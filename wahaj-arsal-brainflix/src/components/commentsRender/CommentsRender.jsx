/** @format */
import React from "react";
import CommentsDisplay from "../commentsDisplay/CommentsDisplay";

export default function CommentsRender({
  detailsComment,
  newMoment,
  deleteComment,
  props,
}) {
  detailsComment &&
    detailsComment.sort((first, last) => last.timestamp - first.timestamp);

  const commentMarkup =
    detailsComment &&
    detailsComment.map((comment) => {
      return (
        <CommentsDisplay
          key={comment.timestamp}
          id={comment.timestamp}
          comment={comment}
          deleteComment={deleteComment}
          newMoment={newMoment}
          props={props}
        />
      );
    });

  return (
    <>
      <section className="comment">{commentMarkup}</section>
    </>
  );
}
