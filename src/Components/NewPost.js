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
          poster: "Kiart Tantasi",
          likes: Math.ceil(Math.random() * 30)
        },
        ...prev
      ];
    });
    textRef.current.value = "";
  }
  return (
    <div className="new-post">
      <form onSubmit={post}>
        <textarea
          ref={textRef}
          rows="5"
          cols="50"
          className="new-post"
          type="text"
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
