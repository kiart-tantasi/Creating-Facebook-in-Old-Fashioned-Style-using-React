import React, { useState } from "react";
import Nav from "./Nav";
import Posts from "./Posts";
import Friends from "./Friends";
import Requests from "./Requests";
import NewPost from "./NewPost";

const postsArr = [
  { id: "1", post: "I AM SO HAPPY WITH THIS!", poster: "James Boro", likes: 15 },
  {
    id: "2",
    post: "What happened last nighttt???",
    poster: "Panda Kung",
    likes: 20
  },
  { id: "3", post: "... i am speechless", poster: "Watson Alfo", likes: 5 },
  {
    id: "4",
    post: "Meeting today went really well!!",
    poster: "Morna Wikiz",
    likes: 3
  }
];

const friendsArr = [
  { id: "1", name: "Watson Alfo" },
  { id: "2", name: "James Boro" },
  { id: "3", name: "Morna Wikiz" },
  { id: "4", name: "Panda Kung" }
];
const requestsArr = [
  { id: "1", requester: "Wattana Jirakun" },
  { id: "2", requester: "Alexander Wanz" },
  { id: "3", requester: "Thomas Groon" }
];

export default function Main() {
  const [posts, setPosts] = useState(postsArr);
  const [friends, setFriends] = useState(friendsArr);
  const [requests, setRequests] = useState(requestsArr);

  return (
    <div>
      <Nav />
      <NewPost setPosts={setPosts} />
      <Posts posts={posts} />
      <hr />
      <Friends friends={friends} />
      <hr />
      <Requests
        requests={requests}
        setRequests={setRequests}
        setFriends={setFriends}
        setPosts={setPosts}
      />
    </div>
  );
}
