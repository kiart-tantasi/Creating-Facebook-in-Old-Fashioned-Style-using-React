import React from "react";
import Request from "./Request";

export default function Requests(props) {
  const length = props.requests.length;
  return (
    <div className="requests">
      <h1>{length} Friend Requests</h1>

      {props.requests.map((x) => (
        <Request
          key={x.id}
          id={x.id}
          requester={x.requester}
          setRequests={props.setRequests}
          setFriends={props.setFriends}
          setPosts={props.setPosts}
        />
      ))}
    </div>
  );
}
