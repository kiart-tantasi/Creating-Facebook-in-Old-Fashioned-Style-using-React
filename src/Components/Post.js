import React, { useState } from "react";

export default function Post(props) {
  const [isLiked, setIsLiked] = useState(false);
  function pressLike() {
    setIsLiked(!isLiked);
  }
  let styled;
  if (isLiked) {
    styled = { fontWeight: "bold" };
  }

  return (
    <div className="each-post">
      <h1>{props.post}</h1>
      <div className="bottom-post">
        <p onClick={pressLike} style={styled}>
          {isLiked ? (props.likes + 1).toString() : props.likes.toString()}{" "}
          Likes
        </p>
        <h2>{props.poster}</h2>
      </div>
    </div>
  );
}
