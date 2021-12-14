import React, { useRef } from "react";

export default function NewPost(props) {
  const textRef = useRef();

  function post(e) {
    e.preventDefault();
    const inputText = textRef.current.value;

    if (inputText === "") {
      return;
    }

    props.setPosts((prev) => {
      return [
        {
          id: Math.random().toString(),
          post: inputText,
          poster: props.username,
          likes: Math.ceil(Math.random() * 30),
        },
        ...prev
      ];
    });
    textRef.current.value = "";
  }
  return (
    <div className="new-post">
      <form onSubmit={post}>
        <div className="new-post-container">
          <input type="text" ref={textRef} />
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}
