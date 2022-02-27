/** @format */
import React from "react";
import CommentInput from "../commentsInput/CommentInput";
import CommentsDisplay from "../commentsDisplay/CommentsDisplay";

export default function CommentsRender({ details, newMoment }) {
  const commentMarkup = details.comments.map((comment) => {
    return (
      <CommentsDisplay
        key={comment.timestamp}
        comment={comment}
        newMoment={newMoment}
      />
    );
  });

  return (
    <>
      <CommentInput />
      <section className="comment">{commentMarkup}</section>
    </>
  );
}
