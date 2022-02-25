/** @format */
import React from "react";
import CommentInput from "../comments-input/CommentInput";
import CommentsDisplay from "../comments-display/CommentsDisplay";

export default function CommentsRender({ details }) {
  const commentMarkup = details.comments.map((comment) => {
    return <CommentsDisplay key={comment.timestamp} comment={comment} />;
  });

  return (
    <>
      <CommentInput />
      {commentMarkup}
    </>
  );
}
