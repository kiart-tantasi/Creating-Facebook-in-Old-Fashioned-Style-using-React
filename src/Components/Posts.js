import React from "react";
import Post from "./Post";

export default function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map((x) => (
        <Post
          key={x.id}
          id={x.id}
          post={x.post}
          poster={x.poster}
          likes={x.likes}
        />
      ))}
    </div>
  );
}
