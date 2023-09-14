import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  console.log(friends);
  return (
    <div className="box">
      <h3>Friends:{friends.length}</h3>
      {friends.map((friend) => (
        // <p key={friend.id}>{friend.name}</p>
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
