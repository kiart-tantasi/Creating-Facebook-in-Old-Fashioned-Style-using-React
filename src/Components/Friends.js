import React from "react";
import Friend from "./Friend";

export default function Friends(props) {
  return (
    <div className="friends">
      <h1 className="friends-heading">Friend List</h1>
      {props.friends.map((x) => (
        <Friend key={x.id} friend={x} />
      ))}
    </div>
  );
}
