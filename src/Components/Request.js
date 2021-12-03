import React from "react";

export default function Request(props) {
  function acceptRequest() {
    props.setFriends((prev) => {
      return [...prev, { id: Math.random(), name: props.requester }];
    });
    props.setRequests((prev) => {
      return prev.filter((x) => x.id !== props.id);
    });
    props.setPosts((prev) => {
      if (props.requester === "Wattana Jirakun") {
        return [
          {
            id: Math.random().toString(),
            post: "Alright. I'll try it again tmr... just maybe.",
            poster: "Wattana Jirakun",
            likes: 3
          },
          ...prev
        ];
      } else if (props.requester === "Alexander Wanz") {
        return [
          {
            id: Math.random().toString(),
            post: "I need some space please!",
            poster: "Alexander Wanz",
            likes: 11
          },
          ...prev
        ];
      } else if (props.requester === "Thomas Groon") {
        return [
          {
            id: Math.random().toString(),
            post: "You Guys, Have a Wonderful Day!",
            poster: "Thomas Groon",
            likes: 37
          },
          ...prev
        ];
      }
    });
  }

  function declineRequest() {
    props.setRequests((prev) => {
      return prev.filter((x) => x.id !== props.id);
    });
  }

  return (
    <div className="each-request">
      <h2>{props.requester}</h2>
      <div className="request-buttons">
        <button onClick={acceptRequest}>Accept</button>
        <button onClick={declineRequest}>Decline</button>
      </div>
    </div>
  );
}
